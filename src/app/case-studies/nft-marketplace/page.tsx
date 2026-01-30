 export default function NftMarketplaceCaseStudy() {
   return (
     <main className="max-w-3xl mx-auto px-6 py-16 text-white">
       <h1 className="text-4xl font-bold mb-6">NFT Marketplace</h1>
       <p className="text-gray-300 mb-6">
         A marketplace for minting, buying, and selling NFTs with auctions and IPFS storage.
       </p>
       <section className="space-y-6">
         <div>
           <h2 className="text-2xl font-semibold mb-2">Problem</h2>
           <p className="text-gray-300">Creators need a fast, secure way to list and trade NFTs with transparent fees.</p>
         </div>
         <div>
           <h2 className="text-2xl font-semibold mb-2">Solution</h2>
           <p className="text-gray-300">ERC‑721 contracts, IPFS storage, Next.js UI, and optimized listing flows.</p>
         </div>
         <div>
           <h2 className="text-2xl font-semibold mb-2">Impact</h2>
           <ul className="list-disc list-inside text-gray-300">
             <li>Simplified minting and listing UX</li>
             <li>Secure auctions with clear state transitions</li>
             <li>Scalable asset handling with IPFS</li>
           </ul>
         </div>
         <div>
           <h2 className="text-2xl font-semibold mb-2">Stack</h2>
           <div className="flex flex-wrap gap-2">
             {["Solidity", "ERC‑721", "IPFS", "Next.js", "Tailwind"].map((t) => (
               <span key={t} className="px-2 py-1 bg-cyan-600/40 text-white text-sm rounded-full">{t}</span>
             ))}
           </div>
         </div>
       </section>
     </main>
   );
 }
