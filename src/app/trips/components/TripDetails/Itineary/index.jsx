import React from "react";

const Itineary = ({ content }) => {
  return (
    <div className="my-8">
      {/* <p>Itineary</p> */}
      {content.map((item, index) => {
        if (item.type === "heading") {
          return <h2 key={index}>{item.content}</h2>;
        } else if (item.type === "paragraph") {
          return <p key={index}>{item.content}</p>;
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

export default Itineary;
