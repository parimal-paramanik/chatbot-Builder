import React, {useState} from "react";
import config from "./Chatbot/config";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import Navbar from "./Chatbot/Mainpage/Navbar";


const  Dashboard =()=> {
    const [chatbotVisible, setChatbotVisible] = useState(false);

    const toggleChatbot = () => {
      setChatbotVisible(!chatbotVisible);
    };
  
    return (
        
      <div>
        <div>
          <Navbar onToggleChatbot={toggleChatbot} />
        </div>
        <div className="fixed right-0 bottom-0 p-4">
          {chatbotVisible && (
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          )}
        </div>
      </div>
     
    );
  
}

export default Dashboard;

