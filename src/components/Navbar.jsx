import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const getLinkClasses = (path) => {
    return `px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
      location.pathname === path 
        ? 'bg-blue-600 text-white shadow-md' 
        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
    }`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              DevPortfolio
            </Link>
          </div>
          <ul className="flex space-x-2 sm:space-x-4">
            <li><Link to="/" className={getLinkClasses('/')}>Home</Link></li>
            <li><Link to="/about" className={getLinkClasses('/about')}>About Me</Link></li>
            <li><Link to="/projects" className={getLinkClasses('/projects')}>Projects</Link></li>
            <li><Link to="/blogs" className={getLinkClasses('/blogs')}>Blogs</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
