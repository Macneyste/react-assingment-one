import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
