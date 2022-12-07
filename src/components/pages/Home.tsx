import Article from "#components/pages/Home/Article";
import Hero from "#components/pages/Home/Hero";
import Testimonial from "#components/pages/Home/Testimonial";
import Work from "#components/pages/Home/Work";

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Testimonial />
      <Article />
    </>
  );
};

export default Home;
