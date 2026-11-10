// Run locally with Node after `npm install @supabase/supabase-js`
// Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in environment.
// Import questions.json into public.questions. Never put service role key in browser.
import fs from "node:fs";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const questions = JSON.parse(fs.readFileSync("./questions.json", "utf8"));
const rows = questions.map(q => ({
  id: q.id, question: q.question, options: q.options,
  correct_index: q.correct, category: q.category, points: q.points || 10
}));
const { error } = await supabase.from("questions").upsert(rows, { onConflict: "id" });
if (error) throw error;
console.log(`Imported ${rows.length} questions`);
