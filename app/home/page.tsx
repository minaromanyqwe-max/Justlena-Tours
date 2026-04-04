import React from 'react'
import Log from '../register/page'
    import { Clock, MapPin, Star, Calendar, ArrowRight } from 'lucide-react';

export default function Page() {
    
    interface Tour {
      id: number;
      image: string;
      category: string;
      title: string;
      location: string;
      duration: string;
      price: string;
      rating: number;
      reviews: number;
    }
    
    const tours: Tour[] = [
      {
        id: 1,
        image: "/img/re1.jpg",
        category: "Daily Tour",
        title: "Ras Mohammed Yacht Experience",
        location: "Sharm El-Shaikh Islands",
        duration: "9 Hours",
        price: "$55",
        rating: 4.9,
        reviews: 124
      },
      {
        id: 2,
        image: "/img/re2.jpg",
        category: "Adventure",
        title: "Quad Bike Safari & Camel Ride",
        location: "Desert Park, Sharm",
        duration: "2.5 Hours",
        price: "$35",
        rating: 4.8,
        reviews: 98
      },
      {
        id: 3,
        image: "/img/re3.jpg",
        category: "Full Day",
        title: "Super Dahab Discovery 5-in-1",
        location: "Dahab & Blue Hole",
        duration: "9 Hours",
        price: "$65",
        rating: 4.7,
        reviews: 85
      },
      {
        id: 4,
        image: "/img/re4.jpg",
        category: "Evening",
        title: "VIP Pirate Ship Evening Cruise",
        location: "Sharm MarinaPort",
        duration: "5 Hours",
        price: "$75",
        rating: 4.9,
        reviews: 210
      },
      {
        id: 5,
        image: "/img/re5.jpg",
        category: "Diving",
        title: "Shore Diving Adventure",
        location: "Naama Bay Marine Area",
        duration: "1.5 Hours",
        price: "$45",
        rating: 4.6,
        reviews: 42
      },
      {
        id: 6,
        image: "/img/re6.jpg",
        category: "Daily",
        title: "Ras Mohammed National Park",
        location: "South Sinai Reserve",
        duration: "6 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 7,
        image: "/img/re7.jpg",
        category: "Water Sports",
        title: "Diving & Fun Experience",
        location: "Coral Reef Sanctuary",
        duration: "2 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 8,
        image: "/img/re8.jpg",
        category: "Sea Trip",
        title: "Tiran Island Yacht Excursion",
        location: "Sharm Coastline",
        duration: "9 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 9,
        image: "/img/re9.jpg",
        category: "Historical",
        title: "Cairo & Pyramids Discovery",
        location: "Giza Plateau, Cairo",
        duration: "24 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 10,
        image: "/img/re10.jpg",
        category: "Religious",
        title: "Mount Moses & St. Catherine",
        location: "Sinai Holy Mountains",
        duration: "17 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 11,
        image: "/img/re11.jpg",
        category: "Sightseeing",
        title: "Bathyscaphe Submarine View",
        location: "Sharm Underwater Park",
        duration: "2 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 12,
        image: "/img/re12.jpg",
        category: "History",
        title: "St. Catherine's Monastery",
        location: "Heritage Landmark",
        duration: "10 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 13,
        image: "/img/re13.jpg",
        category: "Safari",
        title: "Colored Canyon Salama 5-in-1",
        location: "Nuiba Natural Canyons",
        duration: "9 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 14,
        image: "/img/re14.jpg",
        category: "Adventure",
        title: "Buggy Safari & Camel Trek",
        location: "Sinai Desert Peaks",
        duration: "2.5 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 15,
        image: "/img/re15.jpg",
        category: "Daily",
        title: "Dahab Discovery Special",
        location: "Blue Hole Lagoon",
        duration: "9 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 16,
        image: "/img/re16.jpg",
        category: "Air Tour",
        title: "Cairo & Pyramids by Plane",
        location: "Ancient World Wonders",
        duration: "17 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 17,
        image: "/img/re17.jpg",
        category: "Entertainment",
        title: "Super Safari Dinner & Show",
        location: "Bedouin Nights Village",
        duration: "5 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 18,
        image: "/img/re18.jpg",
        category: "Family",
        title: "Albatross Waterpark Day",
        location: "Sharm Fun Center",
        duration: "7 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 19,
        image: "/img/re19.jpg",
        category: "Air Tour",
        title: "Luxor Ancient Ruins Trip",
        location: "Upper Egypt Heritage",
        duration: "17 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 20,
        image: "/img/re20.jpg",
        category: "Adventure",
        title: "Parasailing High Experience",
        location: "Red Sea Coast",
        duration: "1.5 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 21,
        image: "/img/re21.jpg",
        category: "International",
        title: "Petra Treasury - Jordan",
        location: "Ancient Rose City",
        duration: "24 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 22,
        image: "/img/re22.jpg",
        category: "Wellness",
        title: "Turkish Bath & Massage",
        location: "Sharm Relaxation Spa",
        duration: "2.5 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 23,
        image: "/img/re23.jpg",
        category: "Family",
        title: "Dolphinarium Fun Show",
        location: "Sharm Dolphin Park",
        duration: "1.5 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      },
      {
        id: 24,
        image: "/img/re24.jpg",
        category: "Interactive",
        title: "Swimming with Dolphins",
        location: "Marine Life Lagoon",
        duration: "2 Hours",
        price: "$40",
        rating: 4.5,
        reviews: 56
      }
    ];
    
  return (
    <div>

      {/* Hero Section */}
      <div className="relative min-h-[400px] md:h-[500px] bg-[url('/img/bg-hero.jpg')] bg-cover bg-center flex items-center">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Make Your Best Trip Ever ✈️
          </h1>

          <p className="max-w-2xl text-gray-200 text-lg leading-7">
            Welcome to Red Sea Excursions. Plan and book your perfect trip with expert advice and travel tips.
            <br />
            <span className="block mt-3 text-sm text-gray-300">
              Best Price Guarantee • No prepayment • Direct booking • Top rated
            </span>
          </p>

          {/* Button */}
          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Explore Trips
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 uppercase tracking-tight">
          Our Destinations 🌍
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          <img
            src="/img/destination-4.jpg"
            alt=""
            className="w-full h-[250px] object-cover rounded-2xl shadow-md hover:scale-105 transition duration-300"
          />

          <img
            src="/img/destination-3.jpg"
            alt=""
            className="w-full h-[250px] object-cover rounded-2xl shadow-md hover:scale-105 transition duration-300"
          />

          <img
            src="/img/destination-1.jpg"
            alt=""
            className="w-full h-[250px] object-cover rounded-2xl shadow-md hover:scale-105 transition duration-300"
          />

          <img
            src="/img/re1.png"
            alt=""
            className="w-full h-[250px] object-cover rounded-2xl shadow-md hover:scale-105 transition duration-300"
          />

        </div>

      </div>
<br />
    <main className="bg-slate-50 min-h-screen">
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {tours.filter(Boolean).map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-700 border border-slate-100/50 flex flex-col h-full relative"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="backdrop-blur-xl bg-white/20 text-white border border-white/30 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] shadow-xl">
                    {tour.category}
                  </span>
                </div>

                {/* Favorite Button (Visual only) */}
                <div className="absolute top-5 right-5">
                  <button className="backdrop-blur-xl bg-black/20 hover:bg-white text-white hover:text-red-500 p-2.5 rounded-2xl transition-all duration-300 border border-white/20 group/fav">
                    <Star className="w-4 h-4 group-hover/fav:fill-red-500 group-hover/fav:stroke-red-500" />
                  </button>
                </div>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(tour.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-white text-xs font-bold">{tour.rating}</span>
                      <span className="text-white/60 text-[10px]">({tour.reviews})</span>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur shadow-xl px-4 py-2 rounded-2xl">
                    <p className="text-[10px] text-slate-500 font-bold uppercase leading-none">Price</p>
                    <p className="text-lg font-black text-blue-600 leading-none mt-1">{tour.price}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <div className="flex items-start gap-2 text-blue-600 mb-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-widest leading-tight line-clamp-1">{tour.location}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-4 leading-tight line-clamp-2">
                  {tour.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-2.5 p-2 md:p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-500 font-medium">
                    <Clock className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0" />
                    <span className="text-[10px] md:text-xs text-slate-600 group-hover:text-blue-700">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-2.5 p-2 md:p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors duration-500 font-medium">
                    <Calendar className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 shrink-0" />
                    <span className="text-[10px] md:text-xs text-slate-600 group-hover:text-indigo-700 text-nowrap">Daily</span>
                  </div>
                </div>

                {/* Action Section */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between gap-3 md:gap-4 flex-wrap sm:flex-nowrap">
                  <div className="flex -space-x-3 overflow-hidden shrink-0">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                      </div>
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white ring-2 ring-white">
                      +12
                    </div>
                  </div>
                  <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-5 sm:px-6 py-3 rounded-2xl transition-all duration-300 transform hover:translate-x-1 hover:shadow-xl hover:shadow-blue-200 active:scale-95 group/btn w-full sm:w-auto">
                    <span className="text-sm font-bold">Book Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );

    </div>
  )
}