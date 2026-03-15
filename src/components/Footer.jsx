const Footer = () => {
  return (
    <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <p style={{ margin: '0' }}>&copy; {new Date().getFullYear()} My Professional Portfolio.</p>
      <p style={{ margin: '5px 0 0 0', fontSize: '0.9em' }}>
        Built with React and React Router DOM. Focuses on producing clean code, modular components, and highly engaging user experiences. Thanks for visiting!
      </p>
    </footer>
  );
};

export default Footer;
