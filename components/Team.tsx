import Image from 'next/image'; // Import Next.js Image component
import { AiFillLinkedin } from 'react-icons/ai'; // Import LinkedIn icon from react-icons
import { Card } from '@/components/ui/card'; // Adjust the import path based on your project structure

const TeamsSection = () => {
  const teamMembers = [
    { name: 'Wishalya Tissera', image: '/wishalya.jpg', linkedIn: 'https://www.linkedin.com/in/wishalya-tissera/' },
    { name: 'Karthiga Rajendran', image: '/karthiga.jpg', linkedIn: 'https://www.linkedin.com/in/karthiga-rajendran-6492b3171/' },
    { name: 'Sangavi Gnanasegaram', image: '/sangavi.jpg', linkedIn: 'https://www.linkedin.com/in/sangavi-gnanasegaram-7a9135247/' },
    { name: 'Venuganth Arunthavarajah', image: '/venu1.jpg', linkedIn: 'https://www.linkedin.com/in/venuganth-arunthavarajah-674014219/' },
    { name: 'Kajanan Thangarajah', image: '/kajanan1.jpg', linkedIn: 'https://www.linkedin.com/in/kajanan-t/' },
    { name: 'Methiny Sethupathy', image: '/methini.jpg', linkedIn: 'https://www.linkedin.com/in/methiny/' },
  ];

  return (
    <section id="team" className="bg-purple-300 w-screen py-16 relative z-0" style={{ backgroundImage: "url('/bg4.png')" }}>
      <div className="my-8">
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl mx-auto px-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-full h-40"> {/* Adjust height as needed */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill" // Use fill to make the image cover the div
                    objectFit="cover" // Cover the entire box
                    className="rounded-lg" // Optional: Add some rounding to the card's corners
                  />
                </div>
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin className="w-8 h-8 text-blue-600 mt-2" /> {/* LinkedIn icon */}
                </a>
                <h4 className="text-md font-medium mt-2 text-center">{member.name}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
