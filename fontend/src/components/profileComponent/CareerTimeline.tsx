import React from 'react';

interface CareerItem {
  year: string;
  role: string;
  company: string;
}

interface CareerTimelineProps {
  careerPath: CareerItem[];
}

const CareerTimeline: React.FC<CareerTimelineProps> = ({ careerPath }) => {
  return (
    <ul className="border-l-2 border-blue-500 pl-4">
      {careerPath.map((item, index) => (
        <li key={index} className="mb-4">
          <p className="text-blue-600 font-semibold">{item.year}</p>
          <p>
            {item.role} at {item.company}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CareerTimeline;
