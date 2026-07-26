import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import Differentials from "@/components/Differentials";
import TechnicalBlueprints from "@/components/TechnicalBlueprints";
import Testimonial from "@/components/Testimonial";
import ClientReviews from "@/components/ClientReviews";
import CTAFixed from "@/components/CTAFixed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProjectsGrid />
      <Differentials />
      <TechnicalBlueprints />
      <Testimonial />
      <ClientReviews />
      <CTAFixed />
      <Footer />
    </>
  );
};

export default Index;