
import config from "./Chatbot/config";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
const  Dashboard =()=> {
 return(
    <div>
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  </div>
 )
  
}

export default Dashboard;

