// components/Milestones.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Adjust import path

interface Milestone {
  title: string;
  date: string;
  description: string;
  marks: string;
}

const milestonesData: Milestone[] = [
  {
    title: 'Topic Assessment Form (TAF)',
    date: '19th Feb 2024',
    description: 'Submit the initial topic assessment form for evaluation.',
    marks: 'No marks allocated',
  },
  {
    title: 'Project Charter',
    date: '21-22 Feb 2024',
    description: 'Finalize and submit the project charter document.',
    marks: 'No marks allocated',
  },
  {
    title: 'Proposal Presentation',
    date: '29th Feb 2024',
    description: 'Present the proposal to the panel for feedback.',
    marks: 'Marks Allocation - 6%',
  },
  {
    title: 'Proposal Reports (final-for marking)',
    date: '6-8 May 2024',
    description: 'Submit the final proposal report for marking.',
    marks: 'Marks Allocation - 6%',
  },
  {
    title: 'Progress Presentation - I',
    date: '6th May 2024',
    description: 'Present progress report to the panel.',
    marks: 'Marks Allocation - 5%',
  },
  {
    title: 'Status Document I',
    date: '14th June 2024',
    description: 'Submit the first status document to track progress.',
    marks: 'No marks allocated',
  },
  {
    title: 'Research Paper',
    date: '23rd Aug 2024',
    description: 'Submit the initial research paper for review.',
    marks: 'Marks Allocation - 10%',
  },
  {
    title: 'Final Reports',
    date: '9-11 Sep 2024',
    description: 'Submit the final report based on the completed research.',
    marks: 'Marks Allocation - 10%',
  },
  {
    title: 'Progress Presentation - II',
    date: '11th Sep 2024',
    description: 'Present the second progress report to the panel.',
    marks: 'Marks Allocation - 5%',
  },
  {
    title: 'Status Document II',
    date: '1st Nov 2024',
    description: 'Submit the second status document for tracking progress.',
    marks: 'No marks allocated',
  },
  {
    title: 'Research Paper Registration Notification',
    date: '28-30 Oct 2024',
    description: 'Notify the registration of the research paper.',
    marks: 'No marks allocated',
  },
  {
    title: 'Final Presentation & VIVA',
    date: '21st Oct 2024',
    description: 'Conduct the final presentation and VIVA.',
    marks: 'Marks Allocation - 15%',
  },
  {
    title: 'Project Website',
    date: '20th Nov 2024',
    description: 'Launch the project website.',
    marks: 'No marks allocated',
  },
  {
    title: 'Research Logbook',
    date: '2nd Dec 2024',
    description: 'Submit the research logbook documenting the research process.',
    marks: 'No marks allocated',
  },
  {
    title: 'Final Report (proofread)',
    date: '2nd Dec 2024',
    description: 'Submit the final proofread report for evaluation.',
    marks: 'Marks Allocation - 10%',
  },
];

const Milestones: React.FC = () => {
  return (
    <section id="milestones" className="bg-purple-300 relative w-screen z-0" style={{ backgroundImage: "url('/bg5.png')" }}>
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-12 relative z-20">Milestones</h1>
      <div className="container mx-auto relative grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Vertical divider line in the middle */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-500 z-10"></div>

        {/* Dots indicating card starts */}
        {milestonesData.map((_, index) => (
          <div
            key={index}
            className="absolute left-1/2 w-2 h-2 bg-purple-500 rounded-full transition-transform transform hover:scale-125"
            style={{
              top: `${(index + 1) * (100 / milestonesData.length)}%`, // Distribute evenly
              transform: 'translateX(-50%) translateY(-50%)', // Center the dot on the line
            }}
          ></div>
        ))}

        {/* Milestones rendering */}
        {milestonesData.map((milestone, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative mb-8 w-full max-w-md ${isEven ? 'justify-self-end' : 'justify-self-start'} ${isEven ? 'translate-y-[-30px]' : 'translate-y-[30px]'}`}
            >
              {/* Triangle/Arrow */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 ${
                  isEven
                    ? 'border-r-8 border-r-gray-200 right-full' // Triangle on the left for right-side cards
                    : 'border-l-8 border-l-gray-200 left-full' // Triangle on the right for left-side cards
                } z-20`}
              ></div>

              {/* Card with fixed width and height */}
              <Card className="shadow-lg w-[450px] h-[150px] flex flex-col justify-between transition-transform transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="font-semibold">{milestone.title}</CardTitle>
                  <h3 className="text-sm text-gray-600">{milestone.date}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Milestones;
