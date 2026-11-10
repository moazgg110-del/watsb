// بنك الأسئلة المضمن في JavaScript. أضف باقي الأسئلة إلى نفس المصفوفة بعد مراجعتها.
const QUESTION_BANK = [
  {
    "id": 1,
    "question": "ما عاصمة اليابان؟",
    "options": [
      "سيول",
      "طوكيو",
      "بكين",
      "بانكوك"
    ],
    "correct": 1,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 2,
    "question": "ما أكبر كوكب في المجموعة الشمسية؟",
    "options": [
      "الأرض",
      "زحل",
      "المشتري",
      "نبتون"
    ],
    "correct": 2,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 3,
    "question": "كم عدد أضلاع الشكل السداسي؟",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 4,
    "question": "ما العنصر الكيميائي الذي رمزه O؟",
    "options": [
      "الذهب",
      "الأكسجين",
      "الفضة",
      "الهيدروجين"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 5,
    "question": "في أي قارة تقع دولة البرازيل؟",
    "options": [
      "آسيا",
      "أفريقيا",
      "أمريكا الجنوبية",
      "أوروبا"
    ],
    "correct": 2,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 6,
    "question": "من مؤلف رواية البؤساء؟",
    "options": [
      "فيكتور هوغو",
      "تشارلز ديكنز",
      "نجيب محفوظ",
      "دوستويفسكي"
    ],
    "correct": 0,
    "category": "ثقافة",
    "points": 10
  },
  {
    "id": 7,
    "question": "ما أسرع حيوان بري؟",
    "options": [
      "الأسد",
      "الفهد",
      "الحصان",
      "الغزال"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 8,
    "question": "كم دقيقة في ساعتين ونصف؟",
    "options": [
      "120",
      "130",
      "150",
      "180"
    ],
    "correct": 2,
    "category": "معلومات عامة",
    "points": 10
  },
  {
    "id": 9,
    "question": "ما البحر الذي يفصل بين قارتي أفريقيا وأوروبا؟",
    "options": [
      "البحر الأحمر",
      "بحر العرب",
      "البحر المتوسط",
      "بحر قزوين"
    ],
    "correct": 2,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 10,
    "question": "ما اللغة الرسمية في البرازيل؟",
    "options": [
      "الإسبانية",
      "البرتغالية",
      "الفرنسية",
      "الإنجليزية"
    ],
    "correct": 1,
    "category": "ثقافة",
    "points": 10
  },
  {
    "id": 11,
    "question": "ما العضو المسؤول عن ضخ الدم؟",
    "options": [
      "الرئة",
      "الكبد",
      "القلب",
      "الكلى"
    ],
    "correct": 2,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 12,
    "question": "ما عاصمة كندا؟",
    "options": [
      "تورونتو",
      "فانكوفر",
      "مونتريال",
      "أوتاوا"
    ],
    "correct": 3,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 13,
    "question": "كم عدد الكواكب المعترف بها في المجموعة الشمسية؟",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 14,
    "question": "ما ناتج 12 × 8؟",
    "options": [
      "86",
      "92",
      "96",
      "108"
    ],
    "correct": 2,
    "category": "رياضيات",
    "points": 10
  },
  {
    "id": 15,
    "question": "في أي دولة يقع برج بيزا المائل؟",
    "options": [
      "فرنسا",
      "إيطاليا",
      "إسبانيا",
      "اليونان"
    ],
    "correct": 1,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 16,
    "question": "ما أكبر محيط على الأرض؟",
    "options": [
      "الأطلسي",
      "الهندي",
      "المتجمد الشمالي",
      "الهادئ"
    ],
    "correct": 3,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 17,
    "question": "ما اسم العملية التي تصنع بها النباتات غذاءها؟",
    "options": [
      "التبخر",
      "البناء الضوئي",
      "التكاثف",
      "التخمر"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 18,
    "question": "كم عدد أيام السنة الكبيسة؟",
    "options": [
      "365",
      "366",
      "364",
      "360"
    ],
    "correct": 1,
    "category": "معلومات عامة",
    "points": 10
  },
  {
    "id": 19,
    "question": "من رسم لوحة الموناليزا؟",
    "options": [
      "بابلو بيكاسو",
      "فان جوخ",
      "ليوناردو دا فينشي",
      "كلود مونيه"
    ],
    "correct": 2,
    "category": "ثقافة",
    "points": 10
  },
  {
    "id": 20,
    "question": "ما العملة الرسمية في المملكة المتحدة؟",
    "options": [
      "اليورو",
      "الدولار",
      "الجنيه الإسترليني",
      "الفرنك"
    ],
    "correct": 2,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 21,
    "question": "ما أصغر عدد أولي؟",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": 2,
    "category": "رياضيات",
    "points": 10
  },
  {
    "id": 22,
    "question": "ما الغاز الأكثر وجوداً في الغلاف الجوي للأرض؟",
    "options": [
      "الأكسجين",
      "النيتروجين",
      "ثاني أكسيد الكربون",
      "الهيدروجين"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 23,
    "question": "ما عاصمة أستراليا؟",
    "options": [
      "سيدني",
      "ملبورن",
      "كانبيرا",
      "بيرث"
    ],
    "correct": 2,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 24,
    "question": "أي كوكب يشتهر بحلقاته الواضحة؟",
    "options": [
      "المريخ",
      "زحل",
      "عطارد",
      "الأرض"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 25,
    "question": "ما اسم الجهاز الذي يقيس درجة الحرارة؟",
    "options": [
      "البارومتر",
      "الترمومتر",
      "الأميتر",
      "الميزان"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 26,
    "question": "كم ضلعاً للمكعب؟",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correct": 3,
    "category": "رياضيات",
    "points": 10
  },
  {
    "id": 27,
    "question": "ما القارة التي تضم الصحراء الكبرى؟",
    "options": [
      "آسيا",
      "أفريقيا",
      "أستراليا",
      "أمريكا الشمالية"
    ],
    "correct": 1,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 28,
    "question": "ما عاصمة المغرب؟",
    "options": [
      "الدار البيضاء",
      "مراكش",
      "الرباط",
      "فاس"
    ],
    "correct": 2,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 29,
    "question": "أي معدن سائل في درجة حرارة الغرفة؟",
    "options": [
      "الحديد",
      "النحاس",
      "الزئبق",
      "الألومنيوم"
    ],
    "correct": 2,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 30,
    "question": "ما وحدة قياس شدة التيار الكهربائي؟",
    "options": [
      "الفولت",
      "الأمبير",
      "الواط",
      "الأوم"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 31,
    "question": "من كتب مسرحية روميو وجولييت؟",
    "options": [
      "شكسبير",
      "موليير",
      "تشيخوف",
      "دانتي"
    ],
    "correct": 0,
    "category": "ثقافة",
    "points": 10
  },
  {
    "id": 32,
    "question": "ما أكبر حيوان معروف على وجه الأرض؟",
    "options": [
      "الفيل الأفريقي",
      "الحوت الأزرق",
      "القرش الأبيض",
      "الزرافة"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 33,
    "question": "ما عاصمة تركيا؟",
    "options": [
      "إسطنبول",
      "أنقرة",
      "إزمير",
      "بورصة"
    ],
    "correct": 1,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 34,
    "question": "كم يساوي 15% من 200؟",
    "options": [
      "15",
      "20",
      "30",
      "35"
    ],
    "correct": 2,
    "category": "رياضيات",
    "points": 10
  },
  {
    "id": 35,
    "question": "أي من هذه الدول تقع في شبه الجزيرة الإسكندنافية؟",
    "options": [
      "النرويج",
      "البرتغال",
      "بولندا",
      "بلجيكا"
    ],
    "correct": 0,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 36,
    "question": "ما اسم أقرب نجم إلى الأرض؟",
    "options": [
      "الشعرى اليمانية",
      "الشمس",
      "النجم القطبي",
      "ألفا قنطورس"
    ],
    "correct": 1,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 37,
    "question": "ما عاصمة الأرجنتين؟",
    "options": [
      "ليما",
      "سانتياغو",
      "بوينس آيرس",
      "مونتفيديو"
    ],
    "correct": 2,
    "category": "جغرافيا",
    "points": 10
  },
  {
    "id": 38,
    "question": "ما الجزء الذي يمتص الماء من النبات غالباً؟",
    "options": [
      "الأوراق",
      "الساق",
      "الجذور",
      "الأزهار"
    ],
    "correct": 2,
    "category": "علوم",
    "points": 10
  },
  {
    "id": 39,
    "question": "ما ناتج 144 ÷ 12؟",
    "options": [
      "10",
      "11",
      "12",
      "14"
    ],
    "correct": 2,
    "category": "رياضيات",
    "points": 10
  },
  {
    "id": 40,
    "question": "في أي عام انتهت الحرب العالمية الثانية؟",
    "options": [
      "1939",
      "1942",
      "1945",
      "1950"
    ],
    "correct": 2,
    "category": "تاريخ",
    "points": 10
  }
];


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
