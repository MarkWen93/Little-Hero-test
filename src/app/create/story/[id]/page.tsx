// 创建一个单独的 metadata 配置文件
export const metadata = {
  title: 'Creating Your Story - Little Hero',
  description: 'Watch as we create your personalized adventure story.',
};

interface Props {
  params: {
    id: string;
  };
}

// 页面组件
export default async function Page({ params }: Props) {
  const id = params.id;

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-32 w-32 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-8">
              <svg
                className="h-16 w-16 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your {id.replace(/-/g, ' ')} story is being created...
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Please wait while we prepare your amazing adventure!
          </p>
        </div>
      </div>
    </main>
  );
} 