

import React from 'react';

const Navbar = ({ onToggleChatbot }) => {
  return (
    <nav className="bg-blue-500 p-2 flex justify-between items-center">
      <div className="text-white text-2xl font-semibold ml-20 ">Prodigal AI</div>
      <div className="flex space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"  onClick={onToggleChatbot}>
          Preview
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"  onClick={onToggleChatbot}>
          Save
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
