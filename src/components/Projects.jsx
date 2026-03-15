const Projects = () => {
  return (
    <section className="animate-fade-in">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Projects</h2>
        <p className="text-lg text-gray-600 max-w-3xl">Theory is great, but practical application is where real learning happens. Below are some of the most exciting projects I have built, ranging from e-commerce systems to productivity tools.</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
          <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 w-full relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced E-Commerce Platform</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">React</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Node.js</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">MongoDB</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Stripe</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 flex-1">
              A fully functional digital storefront designed to handle real-world transactions securely. Includes user authentication (JWT), role-based access control, a dynamic shopping cart, and seamless checkout with Stripe.
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">Live Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1">GitHub</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
          <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-600 w-full relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hospital Management System</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Next.js</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">TypeScript</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">TailwindCSS</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">PostgreSQL</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 flex-1">
              Enterprise-level management application digitizing hospital workflows. Handles patient registrations, doctor appointment scheduling, room management, and automated medical billing with strict privacy conformity.
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">Live Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1">GitHub</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
          <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 w-full relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">DevCollab Platform</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Vue.js</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Firebase</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">WebSockets</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 flex-1">
              A real-time communication platform built specifically for developers to share code snippets and collaborate on algorithms live. It features code syntax highlighting, integrated direct messaging, and group channels.
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">Live Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
          <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 w-full relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Finance Tracker</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">React Native</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">SQLite</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Redux</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 flex-1">
              A cross-platform mobile application that helps users gain control over their finances. The app allows tracking daily expenses, categorizing incomes, and visualizing spending habits through beautifully rendered offline-first charts.
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <a href="#" className="text-gray-400 cursor-not-allowed font-medium text-sm flex items-center gap-1">Mobile App Only</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
