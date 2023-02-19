import Loader from "#components/common/Loader/Loader";
import ReviewCard from "#components/common/ReviewCard";
import SectionHeading from "#components/common/SectionHeading";
import CONFIGS from "#configs/index";
import SliderOptions from "#helpers/slider-init-values";
import reviewData from "#mocks/jsonData/review.json";
import { useGetTestimonialQuery } from "#store/api/testimonial";
import ReviewSlider from "react-slick";

const Review = () => {
  const options = { ...SliderOptions, slidesToShow: 3 };
  const { data: testimonial, isLoading, isError, error } = useGetTestimonialQuery(null);
  const reviews = reviewData.review;
  return (
    <>
      {isLoading && !isError ? (
        <Loader />
      ) : (
        <section className="testimonials section-gap" id="testimonials">
          <div className="container">
            <SectionHeading subtitle={reviews.subtitle} title={reviews.title} />
            <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper"></div>
              <ReviewSlider {...options}>
                {testimonial &&
                  testimonial.data.map((review: any, i: any) => {
                    return (
                      <ReviewCard
                        key={i}
                        thumb={CONFIGS.CMS_URL + review.attributes.avatar.data.attributes.url}
                        alt={review.attributes.name}
                        name={review.attributes.name}
                        designation={review.attributes.designation}
                        review={review.attributes.content}
                      />
                    );
                  })}
              </ReviewSlider>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Review;
