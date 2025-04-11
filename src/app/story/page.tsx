'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppError, handleError } from "@/lib/error";
import { useState } from "react";

export default function StoryPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // 这里添加发送邮件的API调用
      // const response = await submitEmail(email);
      
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 成功后的处理
      alert("Thank you! We'll notify you when your story is ready.");
      setEmail("");
    } catch (err) {
      const { error } = handleError(err);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 px-4 py-8">
      <div className="container max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-navy-900">
          Crafting Your Storybook
        </h1>
        <p className="mb-12 text-xl text-gray-700">
          This may take a little while...
        </p>

        <div className="mb-12 flex justify-center">
          <div className="h-16 w-16">
            <svg
              className="h-full w-full animate-spin text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>

        <p className="mb-8 text-xl text-gray-700">
          We'll send you an email notification when it's ready!
        </p>

        <div className="mx-auto max-w-md">
          <Input
            type="email"
            placeholder="Email"
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <Button
            className="w-full"
            size="lg"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </main>
  );
} 