import { serve } from 'https://deno.land/std@0.137.0/http/server.ts'
import quotes from './assets/prophet-muhammad-quotes.json' assert { type: 'json' }


serve((req) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  return new Response(quote)
})
