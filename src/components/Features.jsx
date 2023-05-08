import React from 'react'

function Features() {
  return (
    <div class="bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 py-12">
  <div class="relative">
    <div class="absolute top-0 bottom-0 left-0 right-0 z-0">
      <div class="absolute w-96 h-96 rounded-full bg-black top-0 left-0"></div>
      <div class="absolute w-80 h-80 rounded-full bg-yellow-400 top-8 left-8"></div>
      <div class="absolute w-64 h-64 rounded-full bg-red-500 top-20 right-12"></div>
      <div class="absolute w-56 h-56 rounded-full bg-blue-500 bottom-16 right-16"></div>
      <div class="absolute w-48 h-48 rounded-full bg-orange-400 bottom-8 left-20"></div>
    </div>
    <div class="z-10 mx-auto max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="px-4 py-6">
        <h2 class="text-xl font-bold text-gray-800 mb-2 text-center">Card Title</h2>
        <p class="text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel malesuada urna, a ultrices odio. Sed bibendum, justo eu placerat posuere, neque dui gravida dolor, a malesuada ipsum mi vitae sapien. Sed vitae magna dui. Vestibulum id magna quis nunc laoreet eleifend. Sed luctus eros et mi faucibus blandit.
        </p>
      </div>
    </div>
  </div>
</div>


  )
}

export default Features