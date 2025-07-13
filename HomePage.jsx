
import { useLocation } from 'wouter';
import logo from '../assets/logo.png';

export default function HomePage() {
  const [location, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <img src={logo} alt="CTC Logo" className="w-20 mb-6" />
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Crane Tech Connect</h1>
      <p className="text-center max-w-xl text-lg text-gray-300 mb-8">
        CTC is a live technical support marketplace where crane mechanics can both request help and offer paid expertise to others in need—connecting experts in the field with real-time solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <div className="border border-yellow-400 p-4 rounded">
          <h2 className="text-xl font-bold text-yellow-400 mb-2 text-center">Help Seeker</h2>
          <ul className="list-disc list-inside text-left text-sm">
            <li>Submit a technical issue</li>
            <li>Receive help in real-time</li>
            <li>Choose your helper based on ratings</li>
          </ul>
        </div>
        <div className="border border-yellow-400 p-4 rounded">
          <h2 className="text-xl font-bold text-yellow-400 mb-2 text-center">Help Giver</h2>
          <ul className="list-disc list-inside text-left text-sm">
            <li>Browse requests for help</li>
            <li>Offer paid support</li>
            <li>Build your reputation as an expert</li>
          </ul>
        </div>
      </div>
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
        onClick={() => setLocation('/auth')}
      >
        Enter the Site
      </button>
    </div>
  );
}
