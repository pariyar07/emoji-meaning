import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "💫": "Dizzy",
  "💥": "Collision",
  "🥶": "Cold Face",
  "🔥": "Lit",
  "✨": "Sparkles",
  "🎊": "Party Popper",
  "⚠️": "Warning",
  "❤️": "Red Heart",
  "😂": "Tears of Joy",
  "💀": "Skull",
  "💢": "Anger",
  "🤩": "Star-Struck"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Real meaning will appear here...");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Not updated in our server");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Learn the real meaning of emoji..."}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
