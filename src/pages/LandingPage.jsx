import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/assets/landing.jpg)' }}>
    <h1 className="text-5xl text-white font-bold">Plantify</h1>
    <p className="text-white mt-4">We bring nature to your home with our curated selection of indoor plants.</p>
    <Link to="/products" className="mt-6 bg-white text-green-700 px-4 py-2 rounded">Get Started</Link>
  </div>
);

export default LandingPage;