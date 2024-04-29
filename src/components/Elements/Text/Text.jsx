import React from "react";

const textStyle = {
  h1: "font-sans text-[45px] font-normal leading-[120%] tracking-normal",
  h1Bold: "font-sans text-[45px] font-bold leading-[120%] tracking-normal",
  h2: "font-sans text-[32px] font-normal leading-[120%] tracking-normal",
  h2Bold: "font-sans text-[32px] font-bold leading-[120%] tracking-normal",
  h3: "font-sans text-[24px] font-normal leading-[120%] tracking-normal",
  h3Bold: "font-sans text-[24px] font-bold leading-[120%] tracking-normal",
  title: "font-sans text-[18px] font-medium leading-[120%] tracking-normal",
  titleBold: "font-sans text-[18px] font-bold leading-[120%] tracking-normal",
  subtitle: "font-sans text-[14px] font-normal leading-[120%] tracking-normal",
  subtitleBold:
    "font-sans text-[14px] font-bold leading-[120%] tracking-normal",
  caption: "font-sans text-[12px] font-normal leading-[120%] tracking-normal",
  captionBold: "font-sans text-[12px] font-bold leading-[120%] tracking-normal",
};

const Text = ({ children, className = "", textType }) => {
  const combinedClassName = `${className} ${
    textType ? textStyle[textType] : ""
  }`;
  return <p className={combinedClassName}>{children}</p>;
};

export { Text };
