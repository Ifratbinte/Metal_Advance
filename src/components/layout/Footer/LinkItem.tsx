import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface Props {
  url: string;
  title: string;
}

const LinkItem: React.FC<Props> = ({ url, title }) => {
  return (
    <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-1">
      <FaAngleRight />
      <a href={url}>{title}</a>
    </li>
  );
};

export default LinkItem;
