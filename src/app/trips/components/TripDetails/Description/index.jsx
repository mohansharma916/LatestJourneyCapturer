import React from "react";

const Description = ({ content }) => {
  return (
    <div className="my-8">
      {/* <p>Description</p> */}
      {content.map((item, index) => {
        // {console.log(item.type)}
        if (item.type === "heading") {
          return (
            <h2 className="font-bold" key={index}>
              {item.content}
            </h2>
          );
        } else if (item.type === "paragraph") {
          return (
            <p className="my-8" key={index}>
              {item.content}
            </p>
          );
        } else if (item.type === "list") {
          return (
            <ul key={index}>
              {item.content.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          );
        } else {
          return null; // Handle other content types as needed
        }
      })}
    </div>
  );
};

export default Description;
