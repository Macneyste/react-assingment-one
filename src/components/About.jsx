const About = () => {
  return (
    <section className="animate-fade-in space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me: The Developer Behind the Code</h2>
        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            My name is a dedicated Software Engineer with a passion for transforming complex problems into elegant, functional digital solutions. My journey in technology began years ago with a simple curiosity about how things work on the internet. Over time, that curiosity evolved into a professional career focused on building high-quality software applications.
          </p>
          <p>
            I specialize in front-end development using modern frameworks like <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-blue-600">Tailwind CSS</span>, but my expertise doesn't stop there. I have comprehensive experience working with full-stack technologies, allowing me to understand the complete lifecycle of application development—from securing databases to designing pixel-perfect user interfaces.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Core Values</h3>
        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900">Continuous Learning</h4>
            <p className="text-gray-600">The tech landscape is always changing, and I prioritize continuous self-education. Whether it's learning a new JavaScript framework or exploring Cloud architectures.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900">Clean Code</h4>
            <p className="text-gray-600">I believe that code is read more often than it is written. Therefore, I strive to write maintainable, well-documented, and clean code that any fellow developer can easily understand.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900">User-Centric Design</h4>
            <p className="text-gray-600">Aesthetics and usability must go hand in hand. A product is only as good as the experience it delivers to the end-user.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg text-gray-600 italic">
        "When I'm not debugging a tricky script or optimizing application performance, you can usually find me reading technical blogs, contributing to open-source projects, or exploring nature to clear my mind and return to the keyboard with fresh perspectives."
      </div>
    </section>
  );
};

export default About;
