// ===== إعدادات Supabase: ضع بيانات مشروعك هنا =====
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const SCORE_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/submit-answer`;
const supabaseReady = SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_URL.includes("YOUR-PROJECT") && !SUPABASE_ANON_KEY.includes("YOUR_");
const sb = supabaseReady ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

let currentUser = null, currentQuestion = null, busy = false, served = new Set();
const $ = id => document.getElementById(id);

async function init() {
  $("bankCount").textContent = QUESTION_BANK.length.toLocaleString("ar-EG");
  if (!sb) {
    $("status").textContent = "أضف SUPABASE_URL و SUPABASE_ANON_KEY في app.js لتفعيل الربط.";
    $("leaderboard").innerHTML = '<p class="muted">بانتظار إعداد Supabase.</p>';
    return;
  }
  const { data: { session } } = await sb.auth.getSession();
  currentUser = session?.user || null;
  sb.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    renderAuth();
    if (currentUser) refreshAccount();
  });
  renderAuth();
  await refreshLeaderboard();
  if (currentUser) await refreshAccount();
}
async function signInWithGoogle() {
  if (!sb) return alert("أضف إعدادات Supabase أولاً.");
  const { error } = await sb.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.href }
  });
  if (error) alert(error.message);
}
async function signOut() {
  if (!sb) return;
  const { error } = await sb.auth.signOut();
  if (error) alert(error.message);
  currentUser = null; renderAuth();
}
function renderAuth() {
  $("loginBtn").classList.toggle("hidden", !!currentUser);
  $("logoutBtn").classList.toggle("hidden", !currentUser);
  $("userLabel").textContent = currentUser?.user_metadata?.full_name ||
    currentUser?.email || "زائر";
  $("status").textContent = currentUser
    ? "أنت مسجل الدخول. إجاباتك الصحيحة تُسجل في قاعدة البيانات."
    : "سجّل الدخول بحساب Google لحفظ نقاطك في حسابك والمنافسة عالمياً.";
}
async function refreshAccount() {
  if (!currentUser) return;
  const { data, error } = await sb.from("profiles")
    .select("total_points,rank").eq("id", currentUser.id).maybeSingle();
  if (!error && data) {
    $("myPoints").textContent = data.total_points;
    $("scoreLabel").textContent = data.total_points;
  }
  const { data: rankData } = await sb.from("leaderboard")
    .select("rank").eq("id", currentUser.id).maybeSingle();
  $("myRank").textContent = rankData?.rank ? `#${rankData.rank}` : "—";
}
async function refreshLeaderboard() {
  if (!sb) return;
  const { data, error } = await sb.from("leaderboard")
    .select("id,username,total_points,correct_answers,rank")
    .order("total_points", { ascending: false }).limit(20);
  if (error) {
    $("leaderboard").innerHTML = '<p class="muted">تعذر تحميل الترتيب. راجع إعدادات قاعدة البيانات.</p>';
    return;
  }
  $("leaderboard").innerHTML = (data || []).map((p,i) =>
    `<div class="leader"><span>${["🥇","🥈","🥉"][i] || (p.rank + ".")} ${escapeHtml(p.username)}</span><b class="points">${p.total_points} ⭐</b></div>`
  ).join("") || '<p class="muted">لا يوجد لاعبون بعد.</p>';
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function loadQuestion() {
  if (!currentUser) return alert("سجّل الدخول بحساب Google أولاً.");
  if (busy) return;
  const pool = QUESTION_BANK.filter(q => !served.has(q.id));
  if (!pool.length) served.clear();
  const available = QUESTION_BANK.filter(q => !served.has(q.id));
  currentQuestion = available[Math.floor(Math.random() * available.length)];
  served.add(currentQuestion.id);
  $("category").textContent = currentQuestion.category;
  $("qNumber").textContent = `سؤال من ${QUESTION_BANK.length}`;
  $("questionText").textContent = currentQuestion.question;
  $("answers").innerHTML = currentQuestion.options.map((o,i) =>
    `<button class="answer" onclick="submitAnswer(${i})">${escapeHtml(o)}</button>`
  ).join("");
  $("feedback").textContent = "";
  $("nextBtn").disabled = true;
}
async function submitAnswer(selectedIndex) {
  if (!currentUser || !currentQuestion || busy) return;
  busy = true;
  document.querySelectorAll(".answer").forEach(b => b.disabled = true);
  $("feedback").textContent = "جارٍ التحقق وتسجيل النتيجة...";
  try {
    const { data: { session } } = await sb.auth.getSession();
    const response = await fetch(SCORE_FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session.access_token}`,
        "apikey": SUPABASE_ANON_KEY
      },
      body: JSON.stringify({ question_id: currentQuestion.id, selected_index: selectedIndex })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "تعذر تسجيل الإجابة");
    $("feedback").textContent = result.is_correct
      ? `إجابة صحيحة! +${result.points_awarded} نقطة 🎉`
      : "إجابة غير صحيحة. حاول في السؤال التالي!";
    $("feedback").style.color = result.is_correct ? "#45e0db" : "#ff8aa9";
    const buttons = [...document.querySelectorAll(".answer")];
    buttons.forEach((b,i) => {
      if (i === result.correct_index) b.classList.add("good");
      else if (i === selectedIndex) b.classList.add("bad");
    });
    $("nextBtn").disabled = false;
    await refreshAccount(); await refreshLeaderboard();
  } catch (e) {
    $("feedback").textContent = e.message;
    $("feedback").style.color = "#ff8aa9";
    $("nextBtn").disabled = false;
  } finally { busy = false; }
}
init();
