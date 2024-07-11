import React from 'react';
import { useNavigate } from 'react-router-dom';
import LAYOUT from '../LAYOUT/LAYOUT';
import Card from './Card';

const Home = () => {
  const navigate = useNavigate();

  const handleAddTodo = () => {
    navigate("/create");
  };

  return (
    <LAYOUT>
      <div className="relative">
        <Card />
        <button
          onClick={handleAddTodo}
          className="absolute bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          style={{ fontSize: '24px', width: '50px', height: '50px', lineHeight: '24px' }}
        >
          +
        </button>
      </div>
    </LAYOUT>
  );
};

export default Home;
