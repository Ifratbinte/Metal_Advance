import ReviewCard from "#components/common/ReviewCard";
import SectionHeading from "#components/common/SectionHeading";
import reviewData from "#mocks/jsonData/review.json";
import ReviewSlider from "react-slick";
var Slider = {
  autoplay: true,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Review = () => {
  const reviews = reviewData.review;
  return (
    <>
     
      <section className="testimonial section-gap base-bg-light" id="testimonial">
        <div className="container">
          <SectionHeading subtitle={reviews.subtitle} title={reviews.title} />
          <div className="row section-card">
            <ReviewSlider {...Slider}>
              {reviews.card &&
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
                })}
            </ReviewSlider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
