import { FeatureSection } from "@/components/feature-section";
import { Herosection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <Herosection/>
        <FeatureSection/>
      </article>
    </>
  );
}
