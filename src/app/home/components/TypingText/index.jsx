import React, { useState, useEffect } from 'react';

const TypingText = ({ existingText, lines }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(true);
console.log("Here",here)
  useEffect(() => {
    const currentText = lines[currentLineIndex];
    console.log("isTyping",isTyping)

    if (isTyping) {
      // Typing animation
      if (currentLine.length < currentText.length) {
        const timeout = setTimeout(() => {
          setCurrentLine(currentText.slice(0, currentLine.length + 1));
        }, 100); // Adjust typing speed here
        return () => clearTimeout(timeout);
      } else {
        // Finish typing, start untyping
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
        }, 1000); // Adjust delay before untyping here
        return () => clearTimeout(timeout);
      }
    } else {
      // Untyping animation
      if (currentLine.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentLine(currentText.slice(0, currentLine.length - 1));
        }, 50); // Adjust untyping speed here
        return () => clearTimeout(timeout);
      } else {
        // Finish untyping, move to the next line
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
        setIsTyping(true);
      }
    }
  }, [currentLine, currentLineIndex, isTyping, lines]);

  return (
    <div>
      <p>{existingText}</p>
      <p>{currentLine}</p>
    </div>
  );
};


export default TypingText

