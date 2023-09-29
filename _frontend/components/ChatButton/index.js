import React, { useState } from "react";
import AssistantImage from "@/assets/images/assistant.png";
import CloseIcon from "@/assets/images/close.svg";
import ChatBot from "@/components/ChatBot/ChatBot";
import Button from "react-bootstrap/Button";
import "./index.scss";

const ChatPopup = () => {
  return (
    <div className="chat-popup">
      <p>
        Hi! I am Ben, your virtual assistant. <br /> How can I make your day
        better?
      </p>
    </div>
  );
};

const ChatButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="fixed-bottom chat-button-container">
      <div
        className={` ${showPopup ? "--active" : "--inactive"} chat-button `}
        title="Chat button"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {!showPopup && isHovering && <ChatPopup />}
        {/* <ChatPopup /> */}
        <Button
          onClick={togglePopup}
          variant={"light"}
          className={` ${showPopup ? "" : ""} chat-button`}
          aria-label={showPopup ? "Close chat" : "Open chat"}
        >
          <img className="" src={AssistantImage} />
        </Button>
        {showPopup && (
          <button className="chat-button__close" onClick={togglePopup}>
            <img src={CloseIcon} />
          </button>
        )}
        <div className="chatbot-window">{showPopup && <ChatBot />}</div>
      </div>
    </div>
  );
};

export default ChatButton;
