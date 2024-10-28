import { Card } from '@/components/ui/card'; // Adjust the import path based on your project structure

const ToolsAndTechnologiesSection = () => {
  const technologies = [
    {
      name: 'Python',
      url: 'https://docs.python.org/3/', // Link to Python documentation
    },
    {
      name: 'NextJS',
      url: 'https://nextjs.org/docs', // Link to Next.js documentation
    },
    {
      name: 'TensorFlow',
      url: 'https://www.tensorflow.org/learn', // Link to TensorFlow documentation
    },
    {
      name: 'CNN',
      url: 'https://towardsdatascience.com/introduction-to-convolutional-neural-networks-8d12379e50f5', // Link to CNN resources
    },
    {
      name: 'Seaborn',
      url: 'https://seaborn.pydata.org/', // Link to Seaborn documentation
    },
    {
      name: 'Matplotlib',
      url: 'https://matplotlib.org/stable/contents.html', // Link to Matplotlib documentation
    },
    {
      name: 'Keras',
      url: 'https://keras.io/guides/', // Link to Keras documentation
    },
    {
      name: 'Google Colab',
      url: 'https://colab.research.google.com/notebooks/welcome.ipynb', // Link to Google Colab
    },
    {
      name: 'Roboflow',
      url: 'https://roboflow.com/', // Link to Roboflow documentation
    },
    {
      name: 'Google Cloud Platform',
      url: 'https://cloud.google.com/docs', // Link to Google Cloud Platform documentation
    },
  ];

  return (
    <section id="tools-and-technologies" className="bg-purple-300 py-16 w-screen relative z-0" style={{ backgroundImage: "url('/bg7.png')" }}>
      <div className="my-8">
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto">Tools and Technologies</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl px-4"> {/* Added margin and max-width here */}
            {technologies.map((tech) => (
              <a href={tech.url} target="_blank" rel="noopener noreferrer" key={tech.name}>
                <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow transform hover:scale-105 w-64"> {/* Reduced width here */}
                  <div className="flex flex-col items-center">
                    <h4 className="text-lg font-medium mb-2">{tech.name}</h4>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTechnologiesSection;
