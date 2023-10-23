import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if (message.type === 'client') {
          if (message.content === 'OptionA') {
            actions.handleOptionA();
          } else if (message.content === 'OptionB') {
            actions.handleOptionB();
          } else if (message.content === 'OptionC') {
            actions.handleOptionC();
          }
        }
      };
      

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
