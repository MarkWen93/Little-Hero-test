'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CreatePage() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      router.push('/create/adventure');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="w-full max-w-lg">
        {/* 标题区域 */}
        <h1 className="mb-4 text-center text-5xl font-bold text-navy-900">
          Let's Meet Your
          <br />
          Little Hero!
        </h1>
        <p className="mb-12 text-center text-xl text-gray-700">
          This is the star of the story — your child!
        </p>

        {/* 表单区域 */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* 名字输入区域 */}
          <div className="space-y-2">
            <label htmlFor="childName" className="block text-2xl font-semibold text-gray-900">
              Child's Name
            </label>
            <input
              type="text"
              id="childName"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="First name"
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-xl placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <p className="text-gray-600">This name will appear in the story</p>
          </div>

          {/* 照片上传区域 */}
          <div className="space-y-4">
            <label className="block text-2xl font-semibold text-gray-900">Upload a photo</label>
            <div className="flex flex-col items-center space-y-6">
              {/* 头像预览区域 */}
              <div className="relative h-32 w-32">
                <div className="group flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
                  {photo ? (
                    <Image
                      src={URL.createObjectURL(photo)}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-50">
                      <svg
                        className="h-16 w-16 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                  {/* 装饰性星星 */}
                  <div className="absolute -right-1 -top-1 text-yellow-400">✨</div>
                  <div className="absolute -bottom-1 -left-1 text-yellow-400">✨</div>
                </div>
              </div>

              {/* 上传按钮 */}
              <label className="flex cursor-pointer items-center space-x-2 rounded-xl bg-white px-6 py-3 text-lg text-gray-900 shadow-md hover:bg-gray-50">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Upload or Take Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) setPhoto(file);
                  }}
                />
              </label>
              <p className="text-gray-600">You can skip this step if you prefer.</p>
            </div>
          </div>

          {/* 下一步按钮 */}
          <button
            type="submit"
            className={`mt-8 block w-full transform rounded-xl bg-[#4361EE] px-8 py-4 text-center text-xl font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${
              !name.trim() ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#3651DE]'
            }`}
            disabled={!name.trim()}
          >
            Next → Choose Adventure
          </button>
        </form>
      </div>
    </main>
  );
}
