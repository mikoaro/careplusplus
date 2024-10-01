
import Footer from "@/components/Footer";
// import Map from "@/components/Map";
import dynamic from 'next/dynamic'

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="w-full h-full"> 
      <Map/>
      <Footer />
    </div>
  );
}
