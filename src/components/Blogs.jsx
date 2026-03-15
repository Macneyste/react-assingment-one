const Blogs = () => {
  return (
    <section className="animate-fade-in">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Latest Articles & Insights</h2>
        <p className="text-lg text-gray-600">Welcome to my thought space! Here I share my technical tutorials, insights on software development, and lessons learned from challenging engineering problems.</p>
      </div>
      
      <div className="space-y-8">
        <article className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">React</span>
            <span className="text-sm text-gray-500">October 12, 2023</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">The Evolution of React: From Class to Functional Components</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            React has undergone significant changes since its inception. In the earlier days, class components were the standard for managing state and lifecycle methods. However, the introduction of React Hooks in version 16.8 revolutionized the way we write components. In this article, I discuss the massive benefits of switching to functional components...
          </p>
          <button className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
            Read full article 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </article>

        <article className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Architecture</span>
            <span className="text-sm text-gray-500">November 05, 2023</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Why Architecture Matters in Frontend Applications</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A common misconception is that frontend development is just about making things look pretty. In reality, modern frontend apps are incredibly complex distributed systems that run in the user's browser. Managing state, handling asynchronous side-effects, and keeping UI components decoupled requires a solid architectural foundation...
          </p>
          <button className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
            Read full article 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </article>

        <article className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">CSS</span>
            <span className="text-sm text-gray-500">December 18, 2023</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Mastering CSS Flexbox & Grid</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Centering a div shouldn't be a running joke in the developer community anymore! With the power of CSS Flexbox and Grid, creating responsive, accessible layouts is highly intuitive. This blog post breaks down the core concepts of both layout models. I explain when to use Flexbox versus Grid and provide common code snippets...
          </p>
          <button className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
            Read full article 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Blogs;
