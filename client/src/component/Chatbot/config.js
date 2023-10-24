import { createChatBotMessage, } from 'react-chatbot-kit';
import image from "../Chatbot/Assests/Bot.jpg"

const botName = 'ProdigaleBot';

const MyCustomAvatar = () => (
    <img src={image} alt='bothead' className="w-10 h-10 rounded-full" />
  );


  
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. How may i help you` ) ],

  customComponents: {
    header: () => (
      <div style={{ backgroundColor: '#5ccc9d', padding: "5px", textAlign: "center", borderRadius: "3px" }}>
        Prodigale Bot
      </div>
    ),
    botAvatar: (props) => <MyCustomAvatar {...props} />,
    
  },
  
};

export default config;
