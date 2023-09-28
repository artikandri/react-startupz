import React, { useState } from "react";
import AssistantImage from "@/assets/images/assistant.png";
import CloseIcon from "@/assets/images/close.svg";
import ChatBot from "./ChatBot/ChatBot";
import Button from "react-bootstrap/Button";

const ChatPopup = () => {
  return (
    <div className="">
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
    <div className="sticky-bottom text-end me-5 mb-5">
      <div
        className={` ${showPopup ? "--active" : "--inactive"}`}
        title="Chat button"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {!showPopup && isHovering && <ChatPopup />}
        <Button
          onClick={togglePopup}
          className={` ${showPopup ? "" : ""}`}
          aria-label={showPopup ? "Close chat" : "Open chat"}
        >
          <img className="" src={AssistantImage} />
        </Button>
        <div className="">{showPopup && <ChatBot />}</div>
      </div>
    </div>
  );
};

export default ChatButton;
