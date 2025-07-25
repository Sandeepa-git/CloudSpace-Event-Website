"use client";

import React from "react";

type Feedback = {
  name: string;
  comment: string;
  rating: number;
};

const feedbacks: Feedback[] = [
  {
    name: "Nuwani Perera",
    comment: "The hands-on ML and DevOps sessions were truly eye-opening. Learned so much!",
    rating: 5,
  },
  {
    name: "Tharindu Jayasena",
    comment: "A great mix of architecture, deployment, and cloud insights. Very well organized!",
    rating: 4,
  },
  {
    name: "Isuri Fernando",
    comment: "Phase 2 was packed with real-world skills. Now I feel confident with CI/CD and cloud tools.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        fill={i < rating ? "#00C3FF" : "#cccccc"}
        viewBox="0 0 24 24"
        className="w-4 h-4 drop-shadow"
      >
        <path d="M12 .587l3.668 7.431 8.332 1.73-6 5.847L19.336 24 12 20.202 4.664 24 6 15.595 0 9.748l8.332-1.73z" />
      </svg>
    ))}
  </div>
);

const StudentFeedbackSection = () => {
  return (
    <section className="bg-[#0A0F1C] py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-10 mx-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text animate-[gradient_6s_linear_infinite]">
          Student Feedback
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((fb, idx) => (
            <div
              key={idx}
              className="bg-[#00C3FF0D] border border-[#00C3FF30] backdrop-blur-md rounded-xl p-6 text-left shadow-lg hover:scale-[1.02] transition-all"
            >
              <h3 className="text-lg font-semibold text-[#E0F7FF] mb-2">{fb.name}</h3>
              <StarRating rating={fb.rating} />
              <p className="text-sm mt-4 text-[#AEE8FF] italic">"{fb.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeedbackSection;
