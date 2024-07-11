import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Card = () => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [filter, setFilter] = useState("All");
  const hasFetchedTodos = useRef(false);

  // Fetch todos from API
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/todo/all");
      if(response.status === 200){
        console.log(response.data);
        setTodos(response.data);
        if (!hasFetchedTodos.current) {
          toast.success("All Todo Are Fetched Successfully");
          hasFetchedTodos.current = true;
        }
      }
      else{
        toast.error("Somethung went wrong");
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
      toast.error(error);
    }
  };

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Handle completion of todo
  const handleComplete = async (todo) => {
    try {
      const newTodo = {
        title: todo.title,
        description: todo.description,
        timestamp: new Date().toISOString(),
        status: "COMPLETED",
      };
      const response = await axios.put(
        `http://localhost:8080/api/v1/todo/update/${todo.id}`,
        newTodo
      );
      if (response.status === 200) {
        console.log("Todo marked as completed:", response.data);
        fetchTodos();
        toast.success(response.data);
      } else {
        console.log("Something went wrong");
        toast.error("Something went Wrong");
      }
    } catch (error) {
      console.error("Error marking todo as completed:", error);
      toast.error(error);
    }
  };

  // Handle deletion of todo
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/todo/delete/${todoToDelete}`
      );
      console.log("Todo deleted:", response.data);
      // Remove deleted todo from todos state
      fetchTodos();
      setShowModal(false); // Close modal after deletion
      toast.success(response.data);
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error("Something Went Wrong");
    }
  };

  // Open the modal and set the todo to be deleted
  const openModal = (id) => {
    setTodoToDelete(id);
    setShowModal(true);
  };

  // Close the modal without deleting
  const closeModal = () => {
    setShowModal(false);
    setTodoToDelete(null);
  };

  // Filter todos based on status
  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Pending") return todo.status === "PENDING";
    if (filter === "Completed") return todo.status === "COMPLETED";
    return true;
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-400 via-stone-700 to-stone-900">
      <div className="max-w-4xl w-full px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Todo List</h2>
          <div className="relative inline-block text-left">
            <div>
              <button
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => document.getElementById("dropdown-menu").classList.toggle("hidden")}
              >
                Filter
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden"
              id="dropdown-menu"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <button
                  onClick={() => setFilter("All")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("Pending")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Pending
                </button>
                <button
                  onClick={() => setFilter("Completed")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{todo.description}</p>
              <p className="text-xs text-gray-500 mb-2">
                Timestamp: {todo.timestamp}
              </p>
              <p
                className={`text-sm font-medium ${
                  todo.status === "COMPLETED"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Status: {todo.status}
              </p>
              {todo.status !== "COMPLETED" && (
                <div className="flex justify-end mt-2 space-x-4">
                  <button
                    onClick={() => handleComplete(todo)}
                    className="inline-flex items-center justify-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => openModal(todo.id)}
                    className="inline-flex items-center justify-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this todo?</p>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
