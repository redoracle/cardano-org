import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css"; 
import { parseTextWithLinks } from '@site/src/utils/textUtils';

//
// This component shows a simple header with some text below
 
function TitleWithText({ title, description, titleType, headingDot }) {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  // Use titleType to dynamically change the class for the title
  let titleClassName;

  switch (titleType) {
    case 'red':
      titleClassName = styles.titleTypeRed;
      break;
    case 'green':
      titleClassName = styles.titleTypeGreen;
      break;
    default:
      titleClassName = styles.titleTypeBlack;
  }

  // clsx allows for conditional className  inclusion based on the headingDot flag
  return (
    <div className="container">
        <h1 className={clsx({ "headingDot": headingDot }, titleClassName)}>
        {title}
        </h1>
      <p className="black-text">
      {parseTextWithLinks(description)}
      </p>
    </div> 
  );
};

export default TitleWithText;