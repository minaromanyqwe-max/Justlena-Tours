import React from 'react'
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
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src="/img/bg-hero.jpg" 
          alt="hero" 
          className="w-full h-full object-cover animate-image-reveal"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white dark:to-slate-950" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center responsive-container">
          <h1 className="text-responsive-h1 text-white mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            Let's Make Your <span className="text-blue-500">Best Trip</span> Ever ✈️
          </h1>
          <p className="max-w-2xl text-responsive-body text-white/90 drop-shadow-md mb-10">
            Welcome to Red Sea Excursions. Plan and book your perfect trip with expert advice and travel tips.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-500/40 transition-all hover:scale-105 active:scale-95">
            Explore Trips
          </button>
        </div>
      </div>

      {/* Destinations Section */}
      <section className="section-padding responsive-container">
        <div className="flex flex-col items-center mb-16">
          <div className="w-1.5 h-10 bg-blue-600 rounded-full mb-6" />
          <h2 className="text-responsive-h2 text-slate-900 dark:text-white">Our Destinations 🌍</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 overflow-hidden">
          {['destination-4.jpg', 'destination-3.jpg', 'destination-1.jpg', 're1.png'].map((img, i) => (
            <div key={i} className="group relative h-[300px] sm:h-[400px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl">
              <img
                src={`/img/${img}`}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Tours Grid Section */}
      <main className="bg-slate-50 dark:bg-slate-900/10 min-h-screen">
        <section className="section-padding responsive-container">
          <div className="grid-responsive">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-700 border border-slate-100 dark:border-slate-800 flex flex-col h-full relative"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  <div className="absolute top-5 left-5">
                    <span className="backdrop-blur-xl bg-white/20 text-white border border-white/30 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] shadow-xl">
                      {tour.category}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-white">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(tour.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-xs font-bold">{tour.rating}</span>
                      </div>
                    </div>
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-xl px-4 py-2 rounded-2xl">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase leading-none">Price</p>
                      <p className="text-lg font-black text-blue-600 dark:text-blue-400 leading-none mt-1">{tour.price}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="flex items-start gap-2 text-blue-600 dark:text-blue-400 mb-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-[11px] font-black uppercase tracking-widest leading-tight">{tour.location}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors mb-4 line-clamp-2 uppercase">
                    {tour.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase text-nowrap">Daily</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex -space-x-3 overflow-hidden">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl transition-all font-bold text-sm uppercase">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}