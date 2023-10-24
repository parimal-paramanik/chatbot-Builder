import React from 'react';


const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(children)
    console.log(message)
    if (message.type === 'client' && message.content === "hello") {
      actions.handleHello()
      if (message.content.toLowerCase() === 'customer care') {
        actions.handleOptionA();
      } else if (message.content.toLowerCase() === 'recharge') {
        actions.handleOptionB();
      } else if (message.content.toLowerCase() === 'other') {
        actions.handleOptionC();
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
