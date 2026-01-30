 export async function POST(request: Request) {
   try {
     const data = await request.json();
     const name = typeof data.name === "string" ? data.name.trim() : "";
     const email = typeof data.email === "string" ? data.email.trim() : "";
     const message = typeof data.message === "string" ? data.message.trim() : "";
     const extra = typeof data.extra === "string" ? data.extra.trim() : "";
 
     if (extra) {
       return new Response(JSON.stringify({ ok: false, error: "spam_detected" }), {
         status: 400,
         headers: { "Content-Type": "application/json" },
       });
     }
 
     const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     if (!name || !emailOk || !message || message.length < 6) {
       return new Response(JSON.stringify({ ok: false, error: "invalid_input" }), {
         status: 400,
         headers: { "Content-Type": "application/json" },
       });
     }
 
     // Placeholder processing. Later: send email or store in DB.
     return new Response(JSON.stringify({ ok: true }), {
       status: 200,
       headers: { "Content-Type": "application/json" },
     });
   } catch {
     return new Response(JSON.stringify({ ok: false, error: "server_error" }), {
       status: 500,
       headers: { "Content-Type": "application/json" },
     });
   }
 }
