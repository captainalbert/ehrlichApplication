import React from "react";
import "./Title.css";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h4 className="title">{title}</h4>;
};

export default Title;
