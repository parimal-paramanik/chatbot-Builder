import React from 'react'
import ChatBot from 'react-simple-chatbot';

const Secondbot = () => {
    const steps = [
        {
          id: 'Greet',
          message: 'Welcome to Prodigal Bot!',
          trigger: 'Ask Name',
        },
        {
          id: 'Ask Name',
          message: 'please enter your name',
        //   end: false,
          trigger :"waiting1",
          
          
        },
        {
          id:"waiting1",
          user:true,
          trigger:"Name"
        },
        {
            id:"Name",
            message:"Hello {previousValue} . select you query",
            trigger:"query"
        },
        {
            id:"query",
            options :[{value:"React", label:"React",trigger:"React"},
            {value:"Nodejs", label:"Nodejs",trigger:"Nodejs"}
        ],
        },
        {
            id:"React",
            options :[{value:"Dom", label:"Dom",trigger:"Dom"},
            {value:"Hooks", label:"Hooks Realated",trigger:"Hooks"}
         ] 
        },
        {
            id:"Hooks",
            message:"somehthing related to Hoks",
            end:true,
        },
        {
            id:"Dom",
            message:"somehthing related to Hooks",
            end:true,

        },
        {
            id:"Nodejs",
            message:"something related to Nodejs",
            end:true,
        }

      ];

  return (
    <div>
       <ChatBot steps={steps} className="fixed right-0 bottom-0 p-4" />
    </div>
  )
}

export default Secondbot
