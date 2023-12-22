import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://abgtzwmpnimfjterxuws.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZ3R6d21wbmltZmp0ZXJ4dXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxOTUwMDUsImV4cCI6MjAwNTc3MTAwNX0.9wK_AMHAWMMbM5nAURX9XUblCU0qQz55TdGBZyBQOXc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
