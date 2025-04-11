import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const adventures = [
  {
    id: 'moon-mission',
    title: 'Moon Mission',
    description: 'Fly to space and save the day',
    image: '/images/adventures/moon-mission.png',
  },
  {
    id: 'arctic-rescue',
    title: 'Arctic Rescue',
    description: 'Help rescue baby penguins',
    image: '/images/adventures/arctic-rescue.png',
  },
  {
    id: 'royal-castle',
    title: 'Royal Castle Escape',
    description: 'Outsmart guards and save the day',
    image: '/images/adventures/royal-castle.png',
  },
  {
    id: 'dino-time',
    title: 'Dino Time',
    description: 'Befriend dinosaurs in a lost world',
    image: '/images/adventures/dino-time.png',
  },
  {
    id: 'fairy-forest',
    title: 'Fairy Forest',
    description: 'Discover enchanted friends and magic',
    image: '/images/adventures/fairy-forest.png',
  },
];

export default function AdventurePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 px-4 py-8">
      <div className="container max-w-2xl">
        <h1 className="mb-4 text-center text-4xl font-bold text-navy-900">
          What kind of world would they love?
        </h1>
        <p className="mb-8 text-center text-xl text-gray-700">
          Pick a magical setting for their hero story.
        </p>

        <div className="space-y-4">
          {adventures.map(adventure => (
            <button
              key={adventure.id}
              className="group w-full overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:flex sm:items-center sm:gap-4"
            >
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-square sm:h-24 sm:w-24">
                <Image src={adventure.image} alt={adventure.title} fill className="object-cover" />
              </div>
              <div className="mt-4 text-left sm:mt-0">
                <h3 className="text-xl font-semibold text-navy-900">{adventure.title}</h3>
                <p className="text-gray-600">{adventure.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="secondary" size="lg">
            <Link href="/create">← Back</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/story">Next → Create Story</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
