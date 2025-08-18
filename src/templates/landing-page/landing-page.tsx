import { Herosection, FeatureSection, SupportSection, CustomerStorySection, CallToAction } from "@/templates/landing-page/sections"

export const LandingPage = () => {
  return (
      <article className="flex flex-col gap-10 md:gap-20">
        <Herosection/>
        <FeatureSection/>
        <SupportSection/>
        <CustomerStorySection/>
        <CallToAction/>
      </article>
  )
}