import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://grmjimjyytjyiuwiwrdi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdybWppbWp5eXRqeWl1d2l3cmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjE0MTEsImV4cCI6MjA1ODAzNzQxMX0.rGKSgN-_0_FPxLWkEcmBb2WoRvDMAAOan2Rg3Chuh4E'

export const supabase = createClient(supabaseUrl, supabaseKey) 