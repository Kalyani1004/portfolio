import React from "react";
import Card from "./Card";

const CardStack = () => {
  const cards = [
    {
      title: "About Me",
      description: "I am a web developer passionate about building UI.",
      image: "https://picsum.photos/400/300?1",
    },
    {
      title: "Projects",
      description: "Check out my best work built with React & Node.",
      image: "https://picsum.photos/400/300?2",
    },
    {
      title: "Skills",
      description: "JavaScript, React, Node, UI/UX, TailwindCSS",
      image: "https://picsum.photos/400/300?3",
    },
    {
      title: "Contact",
      description: "Let’s connect and create something amazing.",
      image: "https://picsum.photos/400/300?4",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
