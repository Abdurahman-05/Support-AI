import { supabase } from '@/lib/supabase/client'

export default async function Home() {
  const { data, error } = await supabase.from('test_table').select('*')

  console.log('Supabase data:', data)
  console.log('Supabase error:', error)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Supabase Test (TS)</h1>
    </div>
  )
}
