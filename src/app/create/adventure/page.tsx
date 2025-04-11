"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const adventures = [
  {
    id: "moon-mission",
    title: "Moon Mission",
    description: "Fly to space and save the day",
    image: "/images/adventures/moon-mission.png"
  },
  {
    id: "arctic-rescue",
    title: "Arctic Rescue",
    description: "Help rescue baby penguins",
    image: "/images/adventures/arctic-rescue.png"
  },
  {
    id: "royal-castle",
    title: "Royal Castle Escape",
    description: "Outsmart guards and save the day",
    image: "/images/adventures/royal-castle.png"
  },
  {
    id: "dino-time",
    title: "Dino Time",
    description: "Befriend dinosaurs in a lost world",
    image: "/images/adventures/dino-time.png"
  },
  {
    id: "fairy-forest",
    title: "Fairy Forest",
    description: "Discover enchanted friends and magic",
    image: "/images/adventures/fairy-forest.png"
  }
];

export default function AdventurePage() {
  const [selectedAdventure, setSelectedAdventure] = useState<string | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (selectedAdventure) {
      router.push(`/story/${selectedAdventure}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="w-full max-w-2xl">
        <h1 className="mb-4 text-center text-5xl font-bold text-navy-900">
          Choose Your Adventure
        </h1>
        <p className="mb-12 text-center text-xl text-gray-700">
          Pick a magical story to begin your journey
        </p>

        <div className="space-y-4">
          {adventures.map((adventure) => (
            <button
              key={adventure.id}
              onClick={() => setSelectedAdventure(adventure.id)}
              className={`group block w-full transform overflow-hidden rounded-2xl bg-white p-4 text-left transition-all hover:-translate-y-1 hover:shadow-xl ${
                selectedAdventure === adventure.id 
                  ? 'ring-2 ring-[#4361EE] shadow-lg' 
                  : 'shadow-md hover:shadow-xl'
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="relative h-32 w-48 overflow-hidden rounded-xl">
                  <Image
                    src={adventure.image}
                    alt={adventure.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className={`text-2xl font-semibold ${
                    selectedAdventure === adventure.id 
                      ? 'text-[#4361EE]' 
                      : 'text-gray-900 group-hover:text-[#4361EE]'
                  }`}>
                    {adventure.title}
                  </h2>
                  <p className="mt-1 text-lg text-gray-600">
                    {adventure.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <Link
            href="/create"
            className="rounded-xl bg-gray-100 px-6 py-3 text-lg font-medium text-gray-600 hover:bg-gray-200"
          >
            ← Back
          </Link>
          <button
            onClick={handleContinue}
            disabled={!selectedAdventure}
            className={`rounded-xl px-6 py-3 text-lg font-medium ${
              selectedAdventure
                ? 'bg-[#4361EE] text-white hover:bg-[#3651DE] cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue →
          </button>
        </div>
      </div>
    </main>
  );
} 