import CoupleSection from "./components/CoupleSection";
import DateSection from "./components/DateSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <Hero />
      <CoupleSection />
      <DateSection />
    </div>
  );
}
