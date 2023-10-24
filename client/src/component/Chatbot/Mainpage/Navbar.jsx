import React from 'react';
import Leftcontainer from './Leftcontainer';

const Navbar = ({ onToggleChatbot, onStaticToggle }) => {
  return (
    <div>
      <div>
        <nav className="bg-blue-500 p-2 flex justify-between items-center">
          <div className="text-white text-2xl font-semibold ml-20">Prodigal AI</div>
          <div className="flex space-x-4">
            <button onClick={onStaticToggle} className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600">
              chat
            </button>
            <button className="bg-green-400 text-white px-4 py-2 rounded hover-bg-green-600" onClick={onToggleChatbot}>
              Preview
            </button>
            <button className="bg-green-400 text-white px-4 py-2 rounded hover-bg-green-600" onClick={onToggleChatbot}>
              Save
            </button>
          </div>
        </nav>
        <Leftcontainer />
      </div>
    </div>
  );
};

export default Navbar;
