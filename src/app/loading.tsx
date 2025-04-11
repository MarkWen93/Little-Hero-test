export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 px-4 py-8">
      <div className="container max-w-2xl text-center">
        <div className="mb-8">
          <div className="h-16 w-16 mx-auto">
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
        <h1 className="mb-4 text-4xl font-bold text-navy-900">Loading...</h1>
        <p className="text-xl text-gray-700">
          Please wait while we prepare your content.
        </p>
      </div>
    </main>
  );
} 