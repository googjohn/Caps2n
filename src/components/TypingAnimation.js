// import React, { useEffect, useState } from 'react';

// const TypingAnimation = () => {
//   const [typingText, setTypingText] = useState('');
//   const textArray = [
//     "beautifully designed houses",
//     "housing loan calculation",
//     "PAGIBIG assistance",
//     "Free Online booking for site viewing",
//   ];
//   const delay = 1000;
//   let index = 0;
//   let currentText = '';
//   let isDeleting = false;

//   useEffect(() => {
//     const type = () => {
//       const text = textArray[index];
//       if (isDeleting) {
//         currentText = text.substring(0, currentText.length - 1);
//       } else {
//         currentText = text.substring(0, currentText.length + 1);
//       }

//       setTypingText(currentText);

//       let typeSpeed = 120;

//       if (isDeleting) {
//         typeSpeed /= 2;
//       }

//       if (!isDeleting && currentText === text) {
//         typeSpeed = delay;
//         isDeleting = true;

//         const lastChar = typingText[typingText.length - 1];
//         let blinkCount = 0;
//         const blinkInterval = setInterval(() => {
//           if (blinkCount < 3) {
//             lastChar.style.visibility = "hidden";
//             setTimeout(() => {
//               lastChar.style.visibility = "visible";
//             }, 250);
//             blinkCount++;
//           } else {
//             clearInterval(blinkInterval);
//           }
//         }, 500);
//       } else if (isDeleting && currentText === "") {
//         isDeleting = false;
//         index++;
//         if (index === textArray.length) {
//           index = 0;
//         }
//       }

//       setTimeout(() => {
//         type();
//       }, typeSpeed);
//     };

//     type();
//   }, []);

//   return <div id="typing-text">{typingText}</div>;
// };

// export default TypingAnimation;
