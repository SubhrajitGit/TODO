import React, { useState } from "react";
import LAYOUT from "../LAYOUT/LAYOUT";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";


const CreateTodoForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PENDING");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      description,
      timestamp: new Date().toISOString(),
      status,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/v1/todo/create", newTodo);
      console.log("Todo created successfully:", response.data);
      if(response.status == 201)
      {
        console.log("TODO CREATED SUCESSFULLY");
        setTitle("");
        setDescription("");
        setStatus("PENDING");
        toast.success(response.data);
        navigate("/");
      }
      else{
        console.log("Something went Wrong");
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating todo:", error);
      toast.error(error);
    }
  };

  return (
    <LAYOUT>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-400 via-stone-700 to-stone-900">
        <div className="max-w-md w-full mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-3xl font-bold text-center mb-6">CREATE TODO</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </LAYOUT>
  );
};

export default CreateTodoForm;
