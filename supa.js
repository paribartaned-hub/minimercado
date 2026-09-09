import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"
const url = "https://ttyjtovrjdbpdfprievm.supabase.co"
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0eWp0b3ZyamRicGRmcHJpZXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4MTA3OTksImV4cCI6MjEwMjM4Njc5OX0.oSz4oJfZYj-kcWnorSFiAzHnCGvB69S_ZTyOVicqpD0"
export const supabase = createClient(url, anonKey)