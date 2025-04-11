"use client";

import { useState } from "react";

export default function LoadingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // TODO: 实现邮件提交逻辑
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <h1 className="mb-4 text-5xl font-bold text-navy-900">
          Crafting Your<br />Storybook
        </h1>
        <p className="mb-16 text-2xl text-gray-700">
          This may take a little while...
        </p>

        {/* Loading 动画 */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            <div className="relative h-24 w-24">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-3 w-3 animate-[loading_1.2s_linear_infinite]"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${i * 30}deg) translate(0, -150%)`,
                    opacity: 1 - (i * 0.08),
                    animationDelay: `-${i * 0.1}s`,
                  }}
                >
                  <div className="h-full w-full rounded-full bg-blue-400"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-sm">
          <p className="mb-8 text-xl text-navy-900">
            We'll send you an email<br />
            notification when it's ready!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-6 py-4 text-lg placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full transform rounded-xl px-6 py-4 text-xl font-semibold text-white shadow-lg transition-all ${
                isSubmitted
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-navy-900 hover:scale-105 hover:bg-navy-800"
              }`}
            >
              {isSubmitted ? "Submitted!" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 