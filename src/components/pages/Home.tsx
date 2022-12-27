import HeroSection from '#components/hero-section';
import Article from '#components/pages/Home/Article';
import Gallery from '#components/pages/Home/Gallary';
import Hero from '#components/pages/Home/Hero';
import Testimonial from '#components/pages/Home/Testimonial';
import Work from '#components/pages/Home/Work';

const Home = () => {
  return (
    <>
      <HeroSection>
        <Hero />
      </HeroSection>

      <Work />
      <Gallery />
      <Testimonial />
      <Article />
    </>
  );
};

export default Home;
