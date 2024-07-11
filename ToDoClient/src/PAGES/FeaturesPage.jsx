import React from "react";
import LAYOUT from "../LAYOUT/LAYOUT";

const FeaturesPage = () => {
  return (
    <LAYOUT>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-400 via-stone-700 to-stone-900">
        <div className="max-w-4xl w-full mx-auto px-8 py-12 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Our Todo application offers a variety of features designed to help you stay organized and manage your tasks efficiently. Here are some of the key features:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Easy task creation with title and description</li>
              <li>Mark tasks as completed with a single click</li>
              <li>Delete tasks that are no longer needed</li>
              <li>View all your tasks in a clean and organized layout</li>
              <li>Responsive design that works on both desktop and mobile devices</li>
              <li>Secure and reliable data storage</li>
              <li>Real-time updates and synchronization</li>
              <li>Intuitive user interface for a seamless experience</li>
            </ul>
            <p>
              Our goal is to continuously improve and add new features to make task management even easier for you.
            </p>
          </div>
        </div>
      </div>
    </LAYOUT>
  );
};

export default FeaturesPage;
