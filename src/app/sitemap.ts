 export default function sitemap() {
   const base = "https://example.com";
   return [
     { url: `${base}/`, lastModified: new Date() },
     { url: `${base}/case-studies/defi-lending`, lastModified: new Date() },
     { url: `${base}/case-studies/nft-marketplace`, lastModified: new Date() },
   ];
 }
