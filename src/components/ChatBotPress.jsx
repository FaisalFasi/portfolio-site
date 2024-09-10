import React from "react";
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState, useEffect } from "react";
import { ChatBotConfig } from "../utils/ChatBotConfig";

const { theme, style } = buildTheme({
  themeName: "Galaxy",
  themeColor: "#634433",
});

//Add your Client ID here ⬇️
const clientId = import.meta.env.VITE_CHATBOAT_CLIENT_ID;

const ChatBotPress = () => {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen(!isWebchatOpen); // Toggle between true and false
  };

  const handleWebchatEvent = (event) => {
    if (event.type === "close") {
      setIsWebchatOpen(false);
    }
  };

  return (
    <div>
      <style>{style}</style>
      <WebchatProvider
        key={JSON.stringify(ChatBotConfig)}
        theme={theme}
        configuration={ChatBotConfig}
        client={client}
      >
        {/* Floating action button to toggle chatbot */}
        <Fab
          onClick={toggleWebchat}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        />
        {isWebchatOpen && ( // Only render the chatbox if the state is true
          <div
            style={{
              position: "fixed",
              bottom: "80px",
              right: "20px",
              width: "350px",
              height: "500px",
              zIndex: 1000,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Webchat onEvent={handleWebchatEvent} />
          </div>
        )}
      </WebchatProvider>
    </div>
  );
};

export default ChatBotPress;
//
