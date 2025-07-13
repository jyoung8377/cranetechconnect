export default function Entry() {
  return (
    <div className="min-h-screen bg-[#1A1D1E] text-white flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-3xl font-bold mb-6 text-[#ECC239]">Welcome to Crane Tech Connect</h2>
      <p className="mb-6">Please choose an option to continue:</p>
      <div className="space-x-4">
        <button className="bg-[#ECC239] text-black font-bold py-2 px-4 rounded hover:opacity-90">Log In</button>
        <button className="border border-[#ECC239] text-[#ECC239] font-bold py-2 px-4 rounded hover:bg-[#ECC239] hover:text-black">Create Account</button>
      </div>
    </div>
  )
}
