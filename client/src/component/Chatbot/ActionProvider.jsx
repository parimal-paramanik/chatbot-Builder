 import React from "react";


const ActionProvider = ({ createChatBotMessage, setState, createClientMessage, children }) => {

    const createClientOptionsMessage = (text, options) => {
        return {
          type: 'client',
          content: text,
          suggestions: options,
        };
      };
      
      const handleHello = () => {
        const options = ['OptionA', 'OptionB', 'OptionC'];
        const botMessage = createChatBotMessage('Please choose an option:', {
          withAvatar: true,
          delay: 500,
        });
      
        const optionsMessage = createClientOptionsMessage('Choose an option:', options); // Set a content value that matches the cases in parse
      
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage, optionsMessage],
        }));
      };
      
      

  

    // Other functions for handling OptionA, OptionB, etc.
    const handleOptionA = () => {
        const botMessage = createChatBotMessage('You chose OptionA. Now choose one:', {
          withAvatar: true,
          delay: 500,
          widget: 'options',
          widgetProps: {
            options: [
              {
                text: 'OptionA',
                handler: () => handleOptionA(),
              },
              {
                text: 'OptionB',
                handler: () => handleOptionB(),
              },
            ],
          },
        });
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    
      const handleOptionB = () => {
        const botMessage = createChatBotMessage('You chose OptionB. Now choose one:', {
          withAvatar: true,
          delay: 500,
          widget: 'options',
          widgetProps: {
            options: [
              {
                text: 'OptionA',
                handler: () => handleOptionA(),
              },
              {
                text: 'OptionB',
                handler: () => handleOptionB(),
              },
            ],
          },
        });
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    
      const handleOptionC = () => {
        const botMessage = createChatBotMessage('You chose OptionC. Now choose one:', {
          withAvatar: true,
          delay: 500,
          widget: 'options',
          widgetProps: {
            options: [
              {
                text: 'OptionA',
                handler: () => handleOptionA(),
              },
              {
                text: 'OptionB',
                handler: () => handleOptionB(),
              },
            ],
          },
        });
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
          }));
        };
  
    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleHello,
              handleOptionA,
              handleOptionB,
              handleOptionC,
              // Other action handlers here for OptionA, OptionB, etc.
            },
          });
        })}
      </div>
    );
  };
  
  export default ActionProvider