import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen text-gray-800 font-sans">
        <Navbar />
        
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
