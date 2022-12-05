import React from "react";
interface Props {
  subtitle: string;
}

const subTitle:React.FC<Props> = ({subtitle}) => {
  return <h5 className="subtitle">{subtitle}</h5>;
};

export default subTitle;
