import React from "react";
import LAYOUT from "../LAYOUT/LAYOUT";

const AboutPage = () => {
  return (
    <LAYOUT>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-400 via-stone-700 to-stone-900">
        <div className="max-w-4xl w-full mx-auto px-8 py-12 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">About Our Todo Application</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Welcome to our Todo application! This application was built with the goal of helping you organize your tasks and manage your daily activities efficiently.
            </p>
            <p>
              Our mission is to provide a simple yet powerful tool that enables you to create, edit, and track your todos seamlessly.
            </p>
            <p>
              Key features of our Todo application include:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Creation of todos with title and description</li>
              <li>Marking todos as completed</li>
              <li>Deleting todos when they are no longer needed</li>
              <li>Responsive and intuitive user interface</li>
            </ul>
            <p>
              Whether you are managing personal tasks or coordinating team activities, our Todo application strives to be your go-to tool for staying organized.
            </p>
            <p>
              Thank you for using our application! We are committed to continuously improving and adding new features to enhance your todo management experience.
            </p>
          </div>
        </div>
      </div>
    </LAYOUT>
  );
};

export default AboutPage;
