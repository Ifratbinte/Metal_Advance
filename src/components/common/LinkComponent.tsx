import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  url: string;
  children: JSX.Element;
  className: string;
}
const LinkComponent: React.FC<Props> = ({ url, children, className }) => {
  return (
    <>
      {url[0] === "/" ? (
        <NavLink className={className} to={url}>
          {children}
        </NavLink>
      ) : (
        <a className={className} href={url} target="_blank">
          {children}
        </a>
      )}
    </>
  );
};

export default LinkComponent;
