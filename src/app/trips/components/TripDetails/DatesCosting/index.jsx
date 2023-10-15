import React from "react";

const DatesCosting = ({ content }) => {
  return (
    <div className="my-8">
      <h4>Dates & Costing</h4>
      {/* {content.map((item, index) => {
        // {console.log(item.type)}
        if (item.type === 'heading') {
          return <h2 className='font-bold my-8' key={index}>{item.content}</h2>;
        } else if (item.type === 'paragraph') {
          return <p className="my-8" key={index}>{item.content}</p>;
        } else if (item.type === 'list') {
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
      })} */}
    </div>
  );
};

export default DatesCosting;
