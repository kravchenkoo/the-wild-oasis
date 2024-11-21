import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://tnbxkvxqzledvvdxshac.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuYnhrdnhxemxlZHZ2ZHhzaGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MjA3MzUsImV4cCI6MjA0NTI5NjczNX0.-3tMyxeq6DB8B0bh89vipzcY4jNsypajdsPqnlGyb04';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
