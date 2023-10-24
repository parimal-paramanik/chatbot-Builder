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
      const options = ['customer Care', 'Recharge', 'Other'];
      const botMessage = createChatBotMessage('Please choose an option:', {
        withAvatar: true,
        delay: 500,
      });
  
      const optionsMessage = createClientOptionsMessage( options);
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage,optionsMessage],
      }));
    };
  
    const handleOptionA = () => {
      const botMessage = createChatBotMessage('Now choose one:', {
        withAvatar: true,
        delay: 500,
        widget: 'options',
        widgetProps: {
          options: [
            {
              text: '1800 5696',
              handler: () => handleOptionAChoice('1800 5696'),
            },
            {
              text: 'customer@gmail.com',
              handler: () => handleOptionAChoice('customer@gmail.com'),
            },
          ],
        },
      });
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  
    const handleOptionAChoice = (choice) => {
      const botMessage = createChatBotMessage(`You chose ${choice}.`, {
        withAvatar: true,
        delay: 500,
      });
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  
    const handleOptionB = () => {
      const botMessage = createChatBotMessage(' Now choose one:', {
        withAvatar: true,
        delay: 500,
        widget: 'options',
        widgetProps: {
          options: [
            {
              text: 'Jio Number',
              handler: () => handleOptionBChoice('Jio Number'),
            },
            {
              text: 'Airtel Number',
              handler: () => handleOptionBChoice('Airtel Number'),
            },
          ],
        },
      });
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  
    const handleOptionBChoice = (choice) => {
      const botMessage = createChatBotMessage(`You chose ${choice}.`, {
        withAvatar: true,
        delay: 500,
      });
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  
    const handleOptionC = () => {
      const botMessage = createChatBotMessage(' Now choose one:', {
        withAvatar: true,
        delay: 500,
        widget: 'options',
        widgetProps: {
          options: [
            {
              text: 'Other one',
              handler: () => handleOptionCChoice('Other one'),
            },
            {
              text: 'Other Two',
              handler: () => handleOptionCChoice('Other Two'),
            },
          ],
        },
      });
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  
    const handleOptionCChoice = (choice) => {
      const botMessage = createChatBotMessage(`You chose ${choice}.`, {
        withAvatar: true,
        delay: 500,
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
              handleOptionCChoice
            },
          });
        })}
      </div>
    );
  };
  
  export default ActionProvider;
  