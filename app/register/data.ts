import { 
  Waves, Bike, Wind, History, Palmtree, 
  Utensils, Info, ShieldCheck, MapPin, 
  Calendar, Clock, CreditCard, CheckCircle, XCircle, 
  Shirt, Coffee, Ghost, Image, Footprints, Flame 
} from 'lucide-react';

export interface TourDetail {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  duration: string;
  program: { t: string; a: string }[];
  prices: {
    adult: string;
    child: string;
    under5: string;
    additional?: { label: string; price: string }[];
  };
  included: string[];
  notIncluded: string[];
  needs: string[];
  additionalInfo: string[];
}

export const toursDetail: Record<number, TourDetail> = {
  1: {
    id: 1,
    title: "White Island & Ras Mohammed by Yacht",
    category: "Yacht Trip",
    location: "Sharm El Sheikh",
    description: "An amazing cruise to Ras Mohammed Nature Reserve and the White Island. Experience the beauty of coral reefs and unique marine life on a luxurious yacht.",
    image: "/img/re1.jpg",
    duration: "9 Hours",
    program: [
      { t: "08:00 AM", a: "Hotel Transfer" },
      { t: "10:00 AM", a: "Yacht Departure" },
      { t: "11:00 AM", a: "Snorkeling & Diving" },
      { t: "01:30 PM", a: "White Island Visit" },
      { t: "05:00 PM", a: "Return to Port" }
    ],
    prices: { adult: "$23", child: "$10", under5: "FREE" },
    included: ["Hotel Transfer", "Lunch on Yacht", "Soft Drinks", "Professional Guide"],
    notIncluded: ["Snorkeling Gear", "Diving Gear", "Personal Expenses"],
    needs: ["Passport", "Swimwear", "Towel", "Sunscreen"],
    additionalInfo: ["Daily Trip", "Dry off before upper deck", "No alcohol"]
  },
  2: {
    id: 2,
    title: "Quad Bike Safari + Camel Ride",
    category: "Adventure",
    location: "Sinai Desert",
    description: "Adrenaline-fueled adventure combined with the timeless atmosphere of the Sinai desert. The most popular excursion in Sharm.",
    image: "/img/re2.jpg",
    duration: "2.5 Hours",
    program: [
      { t: "Sunrise", a: "03:30 AM" },
      { t: "Daytime", a: "08:30 AM" },
      { t: "Sunset", a: "03:30 PM" }
    ],
    prices: { adult: "$15 (Single)", child: "$19 (Double)", under5: "N/A", additional: [{label: "Private", price: "+$10"}] },
    included: ["Hotel Transfer", "Quad & Camel ride", "Bedouin Tea"],
    notIncluded: ["Scarf", "Goggles", "Photos"],
    needs: ["Sunglasses", "Scarf", "Wet wipes"],
    additionalInfo: ["Safety briefing included", "No child discount"]
  },
  3: {
    id: 3,
    title: "Super Dahab Discovery 5 In 1",
    category: "Full Day",
    location: "Dahab",
    description: "Intensive excursion from Sharm to Dahab. Swim at coral reefs, ride camels, quad bikes, and visit the canyon.",
    image: "/img/re3.jpg",
    duration: "10 Hours",
    program: [
      { t: "08:00 AM", a: "Hotel Transfer" },
      { t: "10:00 AM", a: "Equipment Rental" },
      { t: "11:00 AM", a: "Quad Biking" },
      { t: "12:00 PM", a: "Snorkeling" },
      { t: "01:30 PM", a: "Lunch at Sea" },
      { t: "03:00 PM", a: "Canyon Walk" }
    ],
    prices: { adult: "$20", child: "$9", under5: "FREE" },
    included: ["Transfer", "Guide", "ATV & Camel", "Lunch"],
    notIncluded: ["Gear Rental", "Drinks during lunch"],
    needs: ["Passport", "Water", "Towel"],
    additionalInfo: ["Daily", "AC Mini-bus"]
  },
  4: {
    id: 4,
    title: "Pirate Ship Evening Cruise",
    category: "Entertainment",
    location: "Red Sea",
    description: "Exclusive dinner and show experience. Witness the night scenery with live music and Egyptian culture on a pirate yacht.",
    image: "/img/re4.jpg",
    duration: "4 Hours",
    program: [
      { t: "06:00 PM", a: "Transfer" },
      { t: "07:00 PM", a: "Sailing" },
      { t: "08:00 PM", a: "Dinner & Show" },
      { t: "10:00 PM", a: "Return" }
    ],
    prices: { adult: "$22", child: "$11", under5: "FREE" },
    included: ["Transfer", "Dinner", "Soft Drinks", "Show"],
    notIncluded: ["Fresh Juice", "Photos"],
    needs: ["Camera", "Warm clothes"],
    additionalInfo: ["No Alcohol", "Tanoura & Magic show"]
  },
  5: {
    id: 5,
    title: "Shore Diving Adventure",
    category: "Diving",
    location: "Sharm Shore",
    description: "Experience underwater beauty without a boat. Guided dive with professional instructors for beginners and pros.",
    image: "/img/re5.jpg",
    duration: "2 Hours",
    program: [
      { t: "11:00 AM", a: "Transfer" },
      { t: "11:30 AM", a: "Instruction" },
      { t: "12:00 PM", a: "Diving Session" }
    ],
    prices: { adult: "$20", child: "N/A", under5: "N/A" },
    included: ["Transfer", "Instructor", "Equipment"],
    notIncluded: ["Photos", "Drinks"],
    needs: ["Passport", "Towel"],
    additionalInfo: ["Min 10 years old", "Min 2 adults"]
  },
  6: {
    id: 6,
    title: "Ras Mohammed by Bus",
    category: "National Park",
    location: "Reserve",
    description: "Explore the southernmost tip of Sinai. Mangroves, Lake of Wishes, and stunning shoreline reefs.",
    image: "/img/re6.jpg",
    duration: "6 Hours",
    program: [
      { t: "08:30 AM", a: "Pickup" },
      { t: "10:00 AM", a: "Park Tour" },
      { t: "11:00 AM", a: "Snorkeling" },
      { t: "02:00 PM", a: "Return" }
    ],
    prices: { adult: "$18", child: "$9", under5: "FREE" },
    included: ["Transfer", "Guide", "Entrance Fee"],
    notIncluded: ["Gear Rental"],
    needs: ["Sunscreen", "Water"],
    additionalInfo: ["Daily", "AC Bus"]
  },
  7: {
    id: 7,
    title: "Diving & Water Sports Fun",
    category: "Water Sports",
    location: "Sharm Bay",
    description: "A perfect mix of underwater exploration and surface thrills. Dive, ride the banana boat, and parasail.",
    image: "/img/re7.jpg",
    duration: "3 Hours",
    program: [
      { t: "11:00 AM", a: "Transfer" },
      { t: "11:30 AM", a: "Dive Session" },
      { t: "12:30 PM", a: "Water Activities" }
    ],
    prices: { adult: "$35", child: "$35", under5: "N/A" },
    included: ["Transfer", "Dive Gear", "Banana & Parasail"],
    notIncluded: ["Drinks"],
    needs: ["Towel", "Swimwear"],
    additionalInfo: ["Daily", "Min 2 people"]
  },
  8: {
    id: 8,
    title: "Tiran Island Yacht Trip",
    category: "Sea Trip",
    location: "Tiran",
    description: "Sail to the Tiran Island Reserve. Multiple snorkeling stops, buffet lunch, and possible dolphin sightings.",
    image: "/img/re8.jpg",
    duration: "9 Hours",
    program: [
      { t: "08:00 AM", a: "Transfer" },
      { t: "10:00 AM", a: "Departure" },
      { t: "12:30 PM", a: "Lunch" },
      { t: "05:00 PM", a: "Return" }
    ],
    prices: { adult: "$28", child: "$15", under5: "FREE" },
    included: ["Lunch", "Soft Drinks", "Guide"],
    notIncluded: ["Gear Rent"],
    needs: ["Passport Copy"],
    additionalInfo: ["Spacious Yacht"]
  },
  9: {
    id: 9,
    title: "Cairo & Pyramids by Bus",
    category: "Historical",
    location: "Cairo",
    description: "Visit the world-famous Giza Pyramids and the Sphinx. Full day historical journey into ancient Egypt.",
    image: "/img/re9.jpg",
    duration: "24 Hours",
    program: [
      { t: "00:30 AM", a: "Departure" },
      { t: "09:00 AM", a: "Museum Tour" },
      { t: "12:00 PM", a: "Pyramids" },
      { t: "01:00 AM", a: "Arrival Back" }
    ],
    prices: { adult: "$55", child: "$50", under5: "FREE ($15 seat)" },
    included: ["Tickets", "Lunch", "Guide", "Transport"],
    notIncluded: ["Nile Boat", "Visa"],
    needs: ["Passport with Visa", "Warm clothes"],
    additionalInfo: ["Toilet on bus", "Daily"]
  },
  10: {
    id: 10,
    title: "Mount Moses & St. Catherine",
    category: "Religious",
    location: "Sinai",
    description: "Climb the holy mountain of Moses at night to catch a breathtaking sunrise, followed by a monastery visit.",
    image: "/img/re10.jpg",
    duration: "17 Hours",
    program: [
      { t: "09:00 PM", a: "Transfer" },
      { t: "01:00 AM", a: "Climb" },
      { t: "05:00 AM", a: "Sunrise" },
      { t: "08:00 AM", a: "Monastery" }
    ],
    prices: { adult: "$24", child: "$12", under5: "N/A" },
    included: ["Transfer", "Guide", "Entry"],
    notIncluded: ["Camel", "Blanket"],
    needs: ["Passport", "Warm clothes"],
    additionalInfo: ["Physical effort needed"]
  },
  11: {
    id: 11,
    title: "Bathyscaphe View",
    category: "Sightseeing",
    location: "Sharm",
    description: "Submarine-style view of the coral reefs. Large panoramic windows show the underwater world in comfort.",
    image: "/img/re12.jpg",
    duration: "2 Hours",
    program: [
      { t: "09:00 AM", a: "Pickup" },
      { t: "10:00 AM", a: "Tour" },
      { t: "11:30 AM", a: "Back" }
    ],
    prices: { adult: "$20", child: "$10", under5: "FREE" },
    included: ["Transfer", "Boarding"],
    notIncluded: ["Photos"],
    needs: ["Camera"],
    additionalInfo: ["Kid friendly"]
  },
  12: {
    id: 12,
    title: "St. Catherine's Monastery",
    category: "History",
    location: "Sinai",
    description: "A day trip dedicated to the oldest working Christian monastery. Visit the Burning Bush and Dahab market.",
    image: "/img/re12.jpg",
    duration: "10 Hours",
    program: [
      { t: "05:30 AM", a: "Pickup" },
      { t: "09:00 AM", a: "Tour" },
      { t: "12:30 PM", a: "Lunch" },
      { t: "04:00 PM", a: "Home" }
    ],
    prices: { adult: "$24", child: "$12", under5: "FREE" },
    included: ["Transfer", "Lunch", "Tickets"],
    notIncluded: ["Drinks"],
    needs: ["Passport", "Modest clothes"],
    additionalInfo: ["Mon/Thu/Sat"]
  },
  13: {
    id: 13,
    title: "Colored Canyon 5 in 1",
    category: "Safari",
    location: "Nuiba",
    description: "Salama Canyon hike, quad biking, and camel ride. A vibrant desert adventure.",
    image: "/img/re13.jpg",
    duration: "11 Hours",
    program: [
      { t: "07:30 AM", a: "Pickup" },
      { t: "10:00 AM", a: "Quad/Camel" },
      { t: "01:00 PM", a: "Canyon Hike" },
      { t: "06:30 PM", a: "Back" }
    ],
    prices: { adult: "$25", child: "$15", under5: "FREE" },
    included: ["Transfer", "Safari", "Lunch"],
    notIncluded: ["Gear"],
    needs: ["Hiking shoes", "Water"],
    additionalInfo: ["Daily"]
  },
  14: {
    id: 14,
    title: "Buggy Safari",
    category: "Adventure",
    location: "Sinai",
    description: "Speed through the desert in a buggy. Camel ride and Bedouin tea included.",
    image: "/img/re14.jpg",
    duration: "2.5 Hours",
    program: [
      { t: "Various", a: "Pickup" },
      { t: "+1h", a: "Ride" },
      { t: "+2h", a: "Tea" }
    ],
    prices: { adult: "$30", child: "N/A", under5: "N/A" },
    included: ["Transfer", "Buggy", "Tea"],
    notIncluded: ["Photos"],
    needs: ["Scarf", "Goggles"],
    additionalInfo: ["Fast paced"]
  },
  15: {
    id: 15,
    title: "Dahab Discovery 4 in 1",
    category: "Daily",
    location: "Dahab",
    description: "Highlights of Dahab: camel ride, snorkeling, canyon walk, and shopping.",
    image: "/img/re15.jpg",
    duration: "10 Hours",
    program: [
      { t: "08:00 AM", a: "Pickup" },
      { t: "10:30 AM", a: "Activity" },
      { t: "06:00 PM", a: "Back" }
    ],
    prices: { adult: "$15", child: "$7", under5: "FREE" },
    included: ["Transfer", "Activity", "Lunch"],
    notIncluded: ["Drinks"],
    needs: ["Passport"],
    additionalInfo: ["No ATV"]
  },
  16: {
    id: 16,
    title: "Cairo by Plane",
    category: "Air Tour",
    location: "Cairo",
    description: "Premium flight tour to Cairo. Maximum time at the Pyramids and Museum with minimum travel time.",
    image: "/img/re16.jpg",
    duration: "17 Hours",
    program: [
      { t: "04:30 AM", a: "Pickup" },
      { t: "06:00 AM", a: "Flight" },
      { t: "05:00 PM", a: "Back" }
    ],
    prices: { adult: "$195", child: "$185", under5: "FREE" },
    included: ["Flights", "Tickets", "Lunch"],
    notIncluded: ["Drinks"],
    needs: ["Passport", "Snacks"],
    additionalInfo: ["Book ahead"]
  },
  17: {
    id: 17,
    title: "Super Safari Dinner",
    category: "Entertainment",
    location: "Desert",
    description: "Evening safari with Bedouin dinner and shows including Belly Dance and Tanoura.",
    image: "/img/re17.jpg",
    duration: "5 Hours",
    program: [
      { t: "04:30 PM", a: "Pickup" },
      { t: "06:00 PM", a: "Safari" },
      { t: "07:30 PM", a: "Dinner/Show" }
    ],
    prices: { adult: "$20", child: "N/A", under5: "N/A" },
    included: ["Transfer", "Safari", "Dinner"],
    notIncluded: ["Drinks"],
    needs: ["Warm clothes"],
    additionalInfo: ["Daily"]
  },
  18: {
    id: 18,
    title: "Albatros Water Park",
    category: "Family",
    location: "Sharm Resort",
    description: "Enjoy 32 water slides, multiple pools and bars at the Albatros Aqua Resort.",
    image: "/img/re18.jpg",
    duration: "7 Hours",
    program: [
      { t: "10:00 AM", a: "Pickup" },
      { t: "05:00 PM", a: "Return" }
    ],
    prices: { adult: "$38", child: "$19", under5: "FREE" },
    included: ["Transfer", "All slides"],
    notIncluded: ["Lunch (+$10)"],
    needs: ["Swimwear", "Towel"],
    additionalInfo: ["No outside food"]
  },
  19: {
    id: 19,
    title: "Luxor Ruins by Plane",
    category: "Historical",
    location: "Luxor",
    description: "Fly to the world's largest open-air museum. Karnak, Valley of Queens, and Hatshepsut Temple.",
    image: "/img/re19.jpg",
    duration: "17 Hours",
    program: [
      { t: "04:00 AM", a: "Pickup" },
      { t: "06:00 AM", a: "Flight" },
      { t: "09:00 PM", a: "Back" }
    ],
    prices: { adult: "$225", child: "$215", under5: "FREE" },
    included: ["Flights", "Tickets", "Lunch"],
    notIncluded: ["Banana Island (+$20)"],
    needs: ["Passport"],
    additionalInfo: ["Non-refundable"]
  },
  20: {
    id: 20,
    title: "Parasailing High",
    category: "Adventure",
    location: "Red Sea",
    description: "Soar above the Red Sea for amazing coastal views. A safe and thrilling experience.",
    image: "/img/re20.jpg",
    duration: "1.5 Hours",
    program: [
      { t: "Various", a: "Pickup" },
      { t: "Boat", a: "Sailing" },
      { t: "Fly", a: "7 mins flight" }
    ],
    prices: { adult: "$20", child: "$20", under5: "N/A" },
    included: ["Transfer", "Safety Gear"],
    notIncluded: ["Photos"],
    needs: ["Swimwear"],
    additionalInfo: ["Weight limit applies"]
  },
  21: {
    id: 21,
    title: "Petra Treasury - Jordan",
    category: "International",
    location: "Jordan",
    description: "One of the New Seven Wonders. Visit the ancient Nabatean city carved in pink rock.",
    image: "/img/re21.jpg",
    duration: "24 Hours",
    program: [
      { t: "01:00 AM", a: "Pickup" },
      { t: "Ferry", a: "Jordan Crossing" },
      { t: "Tour", a: "Petra Treasury" }
    ],
    prices: { adult: "$210", child: "$190", under5: "N/A" },
    included: ["Ferry", "Tickets", "Lunch", "Guide"],
    notIncluded: ["Donkey hire", "Drinks"],
    needs: ["Passport"],
    additionalInfo: ["Visa check needed"]
  },
  22: {
    id: 22,
    title: "Turkish Bath & Spa",
    category: "Wellness",
    location: "Sharm Spa",
    description: "Cleopatra mask, sauna, steam, and full body massage. Ultimate relaxation.",
    image: "/img/re22.jpg",
    duration: "2.5 Hours",
    program: [
      { t: "Various", a: "Pickup" },
      { t: "Spa", a: "Peeling/Mask" },
      { t: "Massage", a: "30 mins oils" }
    ],
    prices: { adult: "$30", child: "$20", under5: "FREE" },
    included: ["Transfer", "All Spa steps", "Massage"],
    notIncluded: ["Fresh Drinks"],
    needs: ["Swimwear"],
    additionalInfo: ["Daily"]
  },
  23: {
    id: 23,
    title: "Dolphinarium Show",
    category: "Family",
    location: "Sharm",
    description: "Watch amazing dolphin tricks and performances. Great for kids and adults alike.",
    image: "/img/re23.jpg",
    duration: "1.5 Hours",
    program: [
      { t: "02:00 PM", a: "Pickup" },
      { t: "03:00 PM", a: "Show" },
      { t: "04:30 PM", a: "Home" }
    ],
    prices: { adult: "$20", child: "$10", under5: "FREE" },
    included: ["Transfer", "Ticket"],
    notIncluded: ["Photos with dolphin"],
    needs: ["Camera"],
    additionalInfo: ["Daily"]
  },
  24: {
    id: 24,
    title: "Swimming with Dolphins",
    category: "Family",
    location: "Dolphin Park",
    description: "An unforgettable encounter. Dance and play with dolphins in the water.",
    image: "/img/re24.jpg",
    duration: "2 Hours",
    program: [
      { t: "Various", a: "Pickup" },
      { t: "15/30m", a: "Swim" }
    ],
    prices: { adult: "$65 (15m)", child: "$65", under5: "N/A", additional: [{label: "30 Mins", price: "$85"}] },
    included: ["Transfer", "Shared Swim"],
    notIncluded: ["Photos"],
    needs: ["Swimwear", "Towel"],
    additionalInfo: ["No loose hair", "No pregnant women"]
  }
};
