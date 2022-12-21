import ReviewCard from "#components/common/ReviewCard";
import SectionHeading from "#components/common/SectionHeading";
import reviewData from "#mocks/jsonData/review.json";
import { useGetTestimonialQuery } from "#store/api/testimonial";
import ReviewSlider from "react-slick";
import CONFIGS from "../../../configs";
var Slider = {
  // autoplay: true,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const Review = () => {
  const { data: testimonial, isLoading, isError, error } = useGetTestimonialQuery(null);
  console.log("testimonial,", testimonial);

  const reviews = reviewData.review;
  return (
    <>
      <section className="testimonial section-gap base-bg-white" id="testimonial">
        <div className="container">
          <SectionHeading subtitle={reviews.subtitle} title={reviews.title} />
          <div className="row section-card">
            <ReviewSlider {...Slider}>
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
              {/* {reviews.card &&
                reviews.card.map((review: any, i: any) => {
                  return (
                    <ReviewCard
                      key={i}
                      thumb={review.client_thumb}
                      alt={review.client_alt}
                      name={review.client_name}
                      designation={review.client_designation}
                      review={review.client_review}
                    />
                  );
                })} */}
            </ReviewSlider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
