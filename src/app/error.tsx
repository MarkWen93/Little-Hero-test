'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface CustomError extends Error {
  digest?: string;
}

// 错误监控服务集成
const logError = (error: CustomError) => {
  // 这里可以集成 Sentry 或其他错误监控服务
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    digest: error.digest,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
  });
};

export default function Error({ error, reset }: { error: CustomError; reset: () => void }) {
  useEffect(() => {
    logError(error);
  }, [error]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 px-4 py-8"
      role="alert"
      aria-live="assertive"
    >
      <div className="container max-w-2xl text-center">
        <div className="mb-8 text-red-500" aria-hidden="true">
          <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-navy-900">Oops! Something went wrong</h1>
        <p className="mb-8 text-xl text-gray-700">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => reset()} size="lg" aria-label="Try again">
            Try Again
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = '/')}
            aria-label="Go to home page"
          >
            Go Home
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
            <h2 className="text-lg font-semibold mb-2">Error Details:</h2>
            <pre className="text-sm overflow-auto">
              {error.message}
              {error.stack && `\n${error.stack}`}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
