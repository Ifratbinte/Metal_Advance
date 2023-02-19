import React from 'react';
import classes from './InfographicCard.module.css';
import ServiceSlider from 'react-slick';
import SliderOptions from '#helpers/slider-init-values';

interface Props {
  img: string;
  title: string;
  description: string;
  link: string;
}
const InfographicCard: React.FC<Props> = ({
  img,
  title,
  description,
  link,
}) => {
  return (
    <a href={link} target="_blank">
      <div className={`${classes.service} ${classes.service1}`}>
        <div style={{ width: '150px', height: '50px' }}>
          <img
            src={img}
            alt={title}
            className="w-100 h-100 sister-concern"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h4>{title}</h4>
        {/* <p>{description}</p> */}
      </div>
    </a>
  );
};

export default InfographicCard;
