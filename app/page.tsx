import NavbarSection from "./components/navbar/page";
import HeroSection from "./components/hero/page";
import FeaturesSection from "./components/features/page";
import BenefitsSection from "./components/benefits/page";
import PricingSection from "./components/pricing/page";
import DiscountSection from "./components/discount/page";
import FooterSection from "./components/footer/page";

export default function Home() {
  return (
   <>
   <NavbarSection/>
    <HeroSection/>
    <FeaturesSection/>
    <BenefitsSection/>
    <PricingSection/>
    <DiscountSection/>
    <FooterSection/>
   </>
  );
}
