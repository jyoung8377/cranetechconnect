export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1D1E] text-white flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-4xl font-bold text-[#ECC239] mb-4">Crane Tech Connect</h1>
      <p className="text-lg mb-6">Technical Support Marketplace for Crane Mechanics</p>
      <div className="space-x-4">
        <button className="bg-[#ECC239] text-black font-bold py-2 px-4 rounded hover:opacity-90">Request Help</button>
        <button className="border border-[#ECC239] text-[#ECC239] font-bold py-2 px-4 rounded hover:bg-[#ECC239] hover:text-black">Offer Support</button>
      </div>
    </div>
  );
}
