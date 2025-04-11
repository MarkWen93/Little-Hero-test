import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4 sm:p-8">
      <div className="container max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <Image
            src="/images/logo.png"
            alt="Little Hero"
            width={120}
            height={120}
            className="mx-auto sm:w-40 sm:h-40"
            priority
          />
        </div>

        <h1 className="mb-3 text-4xl sm:text-5xl font-bold text-navy-900">Little Hero</h1>
        <h2 className="mb-6 text-2xl sm:text-4xl font-bold text-gray-900">
          Create Your Own Hero Story
        </h2>
        <p className="mb-8 text-lg sm:text-xl text-gray-700 px-4 sm:px-0">
          Stories where your child is the star — not just a character in someone
          else's book. Build personalized adventures that show them they can dream
          big, lead boldly, and become the hero of their own life.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Link
            href="/create"
            className="transform rounded-2xl bg-[#4361EE] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-[0_8px_16px_rgba(67,97,238,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(67,97,238,0.4)]"
          >
            Start Your Story
          </Link>
          <Link
            href="/demo"
            className="transform rounded-2xl bg-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-gray-900 shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(0,0,0,0.12)]"
          >
            See a Demo Book
          </Link>
        </div>
      </div>
    </main>
  );
}
