const Projects = () => {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Featured Projects</h2>
      <p>Theory is great, but practical application is where real learning happens. Below are some of the most exciting projects I have built, ranging from e-commerce systems to productivity tools.</p>
      
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Advanced E-Commerce Platform</h3>
        <p><strong>Primary Technologies:</strong> React, Node.js, Express, MongoDB, Stripe API</p>
        <p>
          A fully functional digital storefront designed to handle real-world transactions securely and efficiently. This application includes features like user authentication (JWT), role-based access control (Admin vs. Customer), a dynamic shopping cart, complex product filtering capabilities, and a seamless checkout process integrated with Stripe. The admin dashboard allows for complete inventory and order management.
        </p>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Smart Hospital Management System (HMS)</h3>
        <p><strong>Primary Technologies:</strong> Next.js, TypeScript, TailwindCSS, PostgreSQL</p>
        <p>
          This enterprise-level management application aims to digitize hospital workflows. It handles patient registrations, doctor appointment scheduling, room management, and automated medical billing. I focused heavily on security, ensuring all patient data is encrypted and strictly conforms to privacy standards. The interface provides a premium, user-friendly experience for medical staff to reduce administrative bottlenecks.
        </p>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Developer Collaboration Platform</h3>
        <p><strong>Primary Technologies:</strong> Vue.js, Firebase, WebSockets</p>
        <p>
          A real-time communication platform built specifically for developers to share code snippets and collaborate on algorithms live. It features code syntax highlighting, integrated direct messaging, and group channels. By utilizing WebSockets, changes made by one user are instantly propagated to the rest of the members in the room without relying on heavy HTTP polling.
        </p>
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Personal Finance Tracker</h3>
        <p><strong>Primary Technologies:</strong> React Native, SQLite, Redux</p>
        <p>
          A cross-platform mobile application that helps users gain control over their finances. The app allows tracking daily expenses, categorizing incomes, and visualizing spending habits through beautifully rendered charts. The offline-first architecture ensures that users can input their financial data anytime, anywhere, with data syncing securely when the internet connection is restored.
        </p>
      </div>
    </section>
  );
};

export default Projects;
