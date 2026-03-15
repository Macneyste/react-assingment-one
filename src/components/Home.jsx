const Home = () => {
  return (
    <section style={{ padding: '20px' }}>
      <h1>Welcome to My Awesome Portfolio</h1>
      <p>
        Hello and welcome! This is my officially updated web portfolio. Here, you'll find everything you need to know about my journey, the projects I've built, and the thoughts I share through my blogs. 
      </p>
      <p>
        As a passionate developer, my mission is to build robust, scalable, and visually appealing applications that solve real-world problems. Throughout my career, I've cultivated a deep appreciation for clean architecture, efficient performance, and exceptional user experience.
      </p>
      <p>
        Take a moment to navigate through the interactive links above. Whether you're a recruiter seeking a dedicated hard worker, a fellow developer looking for inspiration, or just a curious visitor, there's a lot of exciting content waiting for you to discover. Dive into my projects to see the technical stacks I use, or read my blogs to learn about my problem-solving strategies and insights into modern web development.
      </p>
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f9f9f9', borderLeft: '5px solid #007BFF' }}>
        <h3>Why React?</h3>
        <p>This entire experience is powered by React and React Router DOM. React allows for seamless rendering of components, ensuring that your journey across different sections of this site is instantaneous and smooth without requiring page reloads.</p>
      </div>
    </section>
  );
};

export default Home;
