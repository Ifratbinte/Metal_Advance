import React from 'react';
import Lottie from 'lottie-react';

interface Props {
  data: any;
  width?: string | number;
  loop?: boolean;
}

const LottieRender: React.FC<Props> = ({
  data,
  width,
  loop = true,
}) => {
  const style = {
    width,
    height: width,
  };
  return <Lottie animationData={data} loop={loop} style={style} />;
};

export default LottieRender;
