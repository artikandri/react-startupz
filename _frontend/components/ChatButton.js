import React, { useState } from "react";
import AssistantImage from "@/assets/images/assistant.png";
import CloseIcon from "@/assets/images/close.svg";
import ChatBot from "./ChatBot/ChatBot";

const ChatPopup = () => {
  return (
    <div className="absolute p-4 font-medium  rounded-full -top-16 -left-80 bg-lightcyan text-whitesmoke rounded-br-none">
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
    <div>
      <div
        className={`fixed z-50 bottom-8 right-8 chat-button ${
          showPopup ? "--active" : "--inactive"
        }`}
        title="Chat button"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {!showPopup && isHovering && <ChatPopup />}
        <button
          onClick={togglePopup}
          className={`relative w-16 h-16 transition-all bg-white border-0 rounded-full shadow-xl md:w-32 md:h-32 ${
            showPopup ? "hover:bg-coral" : ""
          }`}
          aria-label={showPopup ? "Close chat" : "Open chat"}
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-full w-14 h-14 md:w-28 md:h-28"
              src={showPopup ? CloseIcon : AssistantImage}
              alt={showPopup ? "close" : "assistant"}
            />
          </div>
        </button>
        <div className="fixed z-49 right-48 bottom-8">
          {showPopup && <ChatBot />}
        </div>
      </div>
    </div>
  );
};

export default ChatButton;
