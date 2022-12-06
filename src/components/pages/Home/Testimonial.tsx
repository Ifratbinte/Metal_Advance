import ReviewCard from "#components/common/ReviewCard";
import SectionHeading from "#components/common/SectionHeading";
import reviewData from "#mocks/jsonData/review.json";

const Review = () => {
  const reviews = reviewData.review;
  return (
    <>
      <section className="testimonial section-gap base-bg-light" id="testimonial">
        <div className="container">
          <SectionHeading subtitle={reviews.subtitle} title={reviews.title} />
          <div className="row section-card">
            <div className="testimonial-slider gap-4 d-flex align-items-center justify-content-between">
              {reviews.card &&
                reviews.card.map((review: any, i: any) => {
                  return (
                    <ReviewCard
                      thumb={review.client_thumb}
                      alt={review.client_alt}
                      name={review.client_name}
                      designation={review.client_designation}
                      review={review.client_review}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
