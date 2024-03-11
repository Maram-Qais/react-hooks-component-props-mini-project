import React from "react";


function makeEmojiList(minutes) {
  const interval = minutes < 30 ? 5 : 10;
  const roundup = minutes < 30 ? 3:5;
  const emoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = "";
  for (let i = 0; i < minutes; i += interval) 
  {
    if ((minutes - roundup) >= i) {emojis += emoji;}
  }

  return emojis;
}

function Article({title, date = "January 1, 1970", preview, minutes }) {
  const emojis = makeEmojiList(minutes); 
  return (
   <article>
      <h3>{title}</h3>
      <small>{date} • {emojis} {minutes} minutes to read </small>
      <p> {preview} </p>
 </article>
  );
}

export default Article;
