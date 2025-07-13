
<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6">
    <img src="/logo.png" alt="CTC Logo" class="h-20" />
    <h1 class="text-4xl font-bold text-yellow-400">Crane Tech Connect</h1>
    <p class="text-center max-w-xl px-4">CTC is a live technical support marketplace where crane mechanics can both request help and offer paid expertise to others in need—connecting experts in the field with real-time solutions.</p>
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
      <div class="border border-yellow-400 p-4 rounded">
        <h2 class="text-xl font-bold text-yellow-400">Help Seeker</h2>
        <ul class="list-disc ml-5">
          <li>Submit a technical issue</li>
          <li>Receive help in real-time</li>
          <li>Choose your helper based on ratings</li>
        </ul>
      </div>
      <div class="border border-yellow-400 p-4 rounded">
        <h2 class="text-xl font-bold text-yellow-400">Help Giver</h2>
        <ul class="list-disc ml-5">
          <li>Browse requests for help</li>
          <li>Offer paid support</li>
          <li>Build your reputation as an expert</li>
        </ul>
      </div>
    </div>
    <router-link to="/auth">
      <button class="bg-yellow-400 text-black px-6 py-2 mt-6 rounded hover:bg-yellow-300">Enter the Site</button>
    </router-link>
  </div>
</template>
