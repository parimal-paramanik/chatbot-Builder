import { createChatBotMessage } from 'react-chatbot-kit';
const botName = 'ProdigaleBot';

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
    customStyles: {
        botMessageBox: {
          backgroundColor: '#376B7E',
        },
       
      },
};

export default config;