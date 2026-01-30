 "use client";
 
 export default function TrustedBy() {
   const brands = ["CoinBase", "Solana", "OpenSea", "AWS Activate"];
   return (
     <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400">
       <span className="uppercase tracking-widest text-xs">Trusted by</span>
       {brands.map((b) => (
         <span key={b} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:text-cyan-400 transition">
           {b}
         </span>
       ))}
     </div>
   );
 }
