 export default function DefiLendingCaseStudy() {
   return (
     <main className="max-w-3xl mx-auto px-6 py-16 text-white">
       <h1 className="text-4xl font-bold mb-6">DeFi Lending Platform</h1>
       <p className="text-gray-300 mb-6">
         A decentralized lending and borrowing platform enabling interest earnings and collateralized loans.
       </p>
       <section className="space-y-6">
         <div>
           <h2 className="text-2xl font-semibold mb-2">Problem</h2>
           <p className="text-gray-300">Users need trustless lending with transparent rates, low friction, and strong security.</p>
         </div>
         <div>
           <h2 className="text-2xl font-semibold mb-2">Solution</h2>
           <p className="text-gray-300">Smart contracts in Solidity, tested with Hardhat, integrated with a Next.js front‑end and Ethers.js.</p>
         </div>
         <div>
           <h2 className="text-2xl font-semibold mb-2">Impact</h2>
           <ul className="list-disc list-inside text-gray-300">
             <li>Transparent collateralization and liquidation logic</li>
             <li>Low latency UX with optimized state updates</li>
             <li>Auditable and upgrade‑ready contract architecture</li>
           </ul>
         </div>
         <div>
           <h2 className="text-2xl font-semibold mb-2">Stack</h2>
           <div className="flex flex-wrap gap-2">
             {["Solidity", "Hardhat", "Ethers.js", "Next.js", "Tailwind"].map((t) => (
               <span key={t} className="px-2 py-1 bg-cyan-600/40 text-white text-sm rounded-full">{t}</span>
             ))}
           </div>
         </div>
       </section>
     </main>
   );
 }
