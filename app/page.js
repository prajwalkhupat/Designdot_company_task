import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import InsightsSection from "@/components/InsightsSection";
import Navbar from "@/components/Navbar";
import TopicSection from "@/components/TopicSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <TopicSection/>
      <AboutSection/>
      <InsightsSection/>
    </>
  );
}