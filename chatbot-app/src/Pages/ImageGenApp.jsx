import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import "../App.css";
import { LoadingComponent } from "../Components/LoadingComponent";

const ImageGenApp = () => {
  const [messages, setMessages] = useState([]);
  const [newImagePrompt, setnewImagePrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const messageScrollRef = useRef(null);

  useEffect(() => {
    if (messageScrollRef.current) {
      messageScrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    try {
      if (newImagePrompt.trim()) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "user", text: newImagePrompt },
        ]);
        setLoading(true);
        setnewImagePrompt("");
        const botData = await fetchChatResponse();
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botData },
        ]);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const fetchChatResponse = async () => {
    //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

    try {
      const botResponse = await fetch(
        "http://localhost:5000/image-generation/prompt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imgPrompt: newImagePrompt }),
        }
      );

      console.log("bot Response - " + botResponse);

      const botData = await botResponse.json();

      console.log(botData);

      return botData;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-bot-app">
      <div className="app-title">
        <h1>Create new images using Dalle-3 API</h1>
      </div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={classnames("message-container", {
              "message-container--user": message.sender === "user",
              "message-container--bot": message.sender === "bot",
            })}
          >
            {message.sender === "user" ? (
              <img className="imgPic" src="client.png" alt="client" />
            ) : (
              <img className="imgPic" src="bot.png" alt="bot" />
            )}
            <div
              className={classnames("message", {
                "message--user": message.sender === "user",
                "message--bot": message.sender === "bot",
              })}
            >
              {message.sender === "user" ? (
                message.text
              ) : (
                <img src={message.text} className="generated-img" />
              )}
            </div>
            {index === messages.length - 1 ? <div ref={messageScrollRef} /> : null}
          </div>
        ))}
        {loading && <LoadingComponent />}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newImagePrompt}
          onChange={(e) => setnewImagePrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          className="chat-input__field"
        />
        <button onClick={sendMessage} className="chat-input__button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ImageGenApp;
