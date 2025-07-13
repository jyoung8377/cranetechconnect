import { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function Home() {
  const [, setLocation] = useLocation()

  useEffect(() => {
    document.title = "Crane Tech Connect"
  }, [])

  return (
    <div className="min-h-screen bg-[#1A1D1E] text-white flex flex-col items-center justify-center text-center p-6">
      <img src="/logo.png" alt="CTC Logo" className="w-48 mb-6" />
      <h1 className="text-4xl font-bold text-[#ECC239] mb-4">Crane Tech Connect</h1>
      <p className="text-lg max-w-xl mb-6">
        CTC is a live technical support marketplace where crane mechanics can both request help and offer paid expertise to others in need—connecting experts in the field with real-time solutions.
      </p>
      <button
        className="bg-[#ECC239] text-black font-bold py-2 px-6 rounded hover:opacity-90"
        onClick={() => setLocation('/entry')}
      >
        Enter the Site
      </button>
    </div>
  )
}
