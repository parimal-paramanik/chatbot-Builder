import React from 'react'
import ChatBot from 'react-simple-chatbot';

const Secondbot = () => {
    const steps = [
        {
          id: '0',
          message: 'Welcome to Prodigal Bot! Select your Help',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          end: true,
        },
      ];

  return (
    <div>
       <ChatBot steps={steps} className="fixed right-0 bottom-0 p-4" />
    </div>
  )
}

export default Secondbot
