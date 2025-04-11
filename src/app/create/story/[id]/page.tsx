'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

// 魔法星星组件
const MagicStars = () => (
  <div className="relative h-32 w-32">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <svg className="h-16 w-16 animate-spin text-blue-500" viewBox="0 0 24 24">
          <path
            className="opacity-20"
            fill="currentColor"
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-blue-200 animate-ping"></div>
        </div>
      </div>
    </div>
    {/* 装饰小星星 */}
    <div className="absolute -left-6 top-1/2 h-6 w-6 animate-twinkle">
      <svg className="h-full w-full text-blue-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    </div>
    <div className="absolute -right-4 top-1/3 h-4 w-4 animate-twinkle-delayed">
      <svg className="h-full w-full text-blue-200" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    </div>
  </div>
);

// 成功提示组件
const SuccessToast = ({ t }: { t: any }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* 背景遮罩 */}
    <div
      className="absolute inset-0 bg-blue-950/20 backdrop-blur-sm"
      onClick={() => toast.dismiss(t.id)}
    />

    {/* 弹窗内容 */}
    <div className="relative transform rounded-3xl bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all max-w-md mx-4 animate-float">
      <div className="flex flex-col items-center text-center gap-6">
        {/* 图标 */}
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
          <span className="text-3xl">🎉</span>
        </div>

        {/* 文字内容 */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-blue-900">Thank you!</h3>
          <p className="text-lg text-blue-700">
            We'll send your magical story to your inbox as soon as it's ready.
          </p>
        </div>

        {/* 按钮 */}
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0"
        >
          Got it!
        </button>
      </div>
    </div>
  </div>
);

export default function StoryPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast.custom(
        t => (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 py-4 border border-blue-100 text-center text-blue-900 max-w-sm z-50">
            <p className="font-semibold text-blue-900">🎉 Storybook is on its way!</p>
            <p className="text-sm mt-1">
              We'll send your magical story to your inbox as soon as it's ready.
            </p>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                router.push('/');
              }}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors"
            >
              Got it!
            </button>
          </div>
        ),
        {
          duration: Infinity,
        }
      );
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.', {
        style: {
          borderRadius: '16px',
          background: '#fff',
          color: '#1e3a8a',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50/50 to-white px-4 py-12">
      {/* 魔法背景 */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-magic-gradient"></div>
        <div className="absolute left-1/4 top-1/4 text-4xl animate-twinkle">✨</div>
        <div className="absolute right-1/4 bottom-1/4 text-4xl animate-twinkle-delayed">✨</div>
        <div className="absolute right-1/3 top-1/3 text-2xl animate-twinkle delay-1000">⭐</div>
      </div>

      <div className="relative mx-auto max-w-lg text-center">
        <h1 className="mb-6 text-5xl font-bold text-blue-900">Creating Your Magical Story</h1>
        <p className="mb-12 text-lg text-blue-700/80">
          Leave your email below, and we'll notify you as soon as your story is ready to read.
        </p>

        {/* 魔法星星动画 */}
        <div className="mb-16 flex justify-center">
          <MagicStars />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="group relative">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              className="w-full rounded-2xl border-2 border-blue-100 bg-white px-6 py-4 text-lg text-blue-900 placeholder-blue-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-all duration-300 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 group-hover:border-blue-200 disabled:cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted || email.length === 0}
            className={`relative w-full transform overflow-hidden rounded-2xl px-6 py-4 text-lg font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 active:translate-y-0 ${
              isSubmitting || isSubmitted || email.length === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200 hover:translate-y-0 hover:shadow-md'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Saving your email...
              </span>
            ) : isSubmitted ? (
              <span className="flex items-center justify-center gap-2">📬 Submitted</span>
            ) : (
              'Notify me when ready'
            )}
          </button>
        </form>
      </div>

      <Toaster />
    </main>
  );
}
