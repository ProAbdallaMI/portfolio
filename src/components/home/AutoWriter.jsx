import { useEffect, useState } from "react";

const AutoWriter = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 30,
  waitingTime = 2000,
}) => {
  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout;

    const typeText = () => {
      const currentFullText = texts[currentTextIndex];

      if (isWaiting) {
        timeout = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, waitingTime);
        return;
      }

      if (isDeleting) {
        if (text === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }

        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
        return;
      }

      if (text === currentFullText) {
        setIsWaiting(true);
        return;
      }

      timeout = setTimeout(() => {
        setText(currentFullText.slice(0, text.length + 1));
      }, typingSpeed);
    };

    timeout = setTimeout(typeText, 50);

    return () => clearTimeout(timeout);
  }, [
    text,
    currentTextIndex,
    isDeleting,
    isWaiting,
    texts,
    typingSpeed,
    deletingSpeed,
    waitingTime,
  ]);

  return <span>I'm a {text}</span>;
};
export default AutoWriter;
