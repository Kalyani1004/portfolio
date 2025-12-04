import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden">
      <img src={image} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
