import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="animate-fade-in">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Welcome to My <span className="text-blue-600">Awesome Portfolio</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Building robust, scalable, and visually appealing applications.
        </p>
      </div>

      <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
        <p>
          Hello and welcome! This is my officially updated web portfolio. Here, you'll find everything you need to know about my journey, the projects I've built, and the thoughts I share through my blogs.
        </p>
        <p>
          As a passionate developer, my mission is to build robust, scalable, and visually appealing applications that solve real-world problems. Throughout my career, I've cultivated a deep appreciation for clean architecture, efficient performance, and exceptional user experience.
        </p>
        <p>
          Take a moment to navigate through the interactive links above. Whether you're a recruiter seeking a dedicated hard worker, a fellow developer looking for inspiration, or just a curious visitor, there's a lot of exciting content waiting for you to discover. Dive into my <Link to="/projects" className="text-blue-600 hover:underline font-medium">projects</Link> to see the technical stacks I use, or read my <Link to="/blogs" className="text-blue-600 hover:underline font-medium">blogs</Link> to learn about my problem-solving strategies and insights into modern web development.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Why React?
        </h3>
        <p className="text-gray-700">
          This entire experience is powered by React, React Router DOM, and now styled with Tailwind CSS! React allows for seamless rendering of components, ensuring that your journey across different sections of this site is instantaneous and smooth without requiring page reloads, while Tailwind CSS provides a highly customizable and beautiful UI approach right from the utility classes.
        </p>
      </div>
    </section>
  );
};

export default Home;
