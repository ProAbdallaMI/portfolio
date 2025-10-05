import { useEffect, useRef, useState } from "react";

const AutoWriter = ({
	texts,
	typingSpeed = 100,
	deletingSpeed = 30,
	waitingTime = 2000,
	className = "",
}) => {
	const [cursor, setCursor] = useState(true);
	const [text, setText] = useState("");
	const currentIndex = useRef(0);
	const [typing, setTyping] = useState(true);
	const [deleting, setDeleting] = useState(false);
	const [waiting, setWaiting] = useState(true);

	// sleep function that returns a promise that resolves after a given time
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		if (waiting) {
			setCursor(true);
			return;
		}
		const interval = setInterval(() => {
			setCursor((prev) => !prev);
		}, 500);
		return () => clearInterval(interval);
	}, [waiting]);

	useEffect(() => {
		// typing action part that types as desired props speed
		if (typing) {
			const typingMethod = async () => {
				const currentText = texts[currentIndex.current];
				if (text.length < currentText.length) {
					await sleep(typingSpeed);
					setText(currentText.slice(0, text.length + 1));
				} else {
					setWaiting(false);
					setTyping(false);
					await sleep(waitingTime);
					setDeleting(true);
				}
			};
			typingMethod();
		}

		// deleting action part that deletes as desired props speed
		if (deleting) {
			const deletingMethod = async () => {
				const currentText = texts[currentIndex.current];
				if (text.length > 0) {
					await sleep(deletingSpeed);
					setText(currentText.slice(0, text.length - 1));
				} else {
					setDeleting(false);
					setWaiting(true);
					currentIndex.current =
						(currentIndex.current + 1) % texts.length;
					setTyping(true);
				}
			};
			deletingMethod();
		}
	}, [
		text,
		typing,
		deleting,
		texts,
		typingSpeed,
		deletingSpeed,
		waitingTime,
	]);

	return (
		<>
			<span>I'm a {text}</span>
			{cursor && <span>{cursor && "|"}</span>}
		</>
	);
};
export default AutoWriter;

