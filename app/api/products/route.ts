import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { id: 1, image: "/img/hero-bg.jpg", name: " Daily", price: "Ras Mohammed By Yacht", title: "Sharm El-Shaikh", hourse: "9 Hours" },
    { id: 2, image: "/img/hero-bg.jpg", name: " Daily", price: "Quad Bike Safari + Camel Sharm El Sheikh", title: "Sharm El-Shaikh", hourse: "2.5 Hours" },
    { id: 3, image: "/img/hero-bg.jpg", name: " Daily", price: "Super Dahab Discovery 5 In 1", title: "Sharm El-Shaikh", hourse: "9 Hours" },
    { id: 4, image: "/img/hero-bg.jpg", name: " Daily", price: "VIP Evening Cruise on a Pirate Ship", title: "Sharm El-Shaikh", hourse: "5 Hour" },
    { id: 5, image: "/img/hero-bg.jpg", name: " Daily", price: "Shore diving at Naama Bay", title: "Sharm El-Shaikh", hourse: "1.5 Hours" },
    { id: 6, image: "/img/hero-bg.jpg", name: " Daily", price: "Ras Mohammed by bus", title: "Sharm El-Shaikh", hourse: "6 Hours" },
  ];
  
  return NextResponse.json(data);
}