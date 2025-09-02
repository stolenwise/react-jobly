// In a React component
import { supabase } from './supabaseClient';

async function getJobs() {
  let { data: jobs, error } = await supabase
    .from('jobs')
    .select('*')
  
  if (error) console.error("Error fetching jobs:", error);
  else console.log(jobs);
}