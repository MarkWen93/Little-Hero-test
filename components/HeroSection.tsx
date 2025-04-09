import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function HeroSection() {
  const router = useRouter();

  const handleStartStory = () => {
    // 这里可以添加开始故事的处理逻辑
    console.log("Starting story...");
    // 例如跳转到创建故事的页面
    // router.push('/create-story');
  };

  const handleDemoBook = () => {
    // 这里可以添加查看演示书籍的处理逻辑
    console.log("Viewing demo book...");
    // 例如跳转到演示页面
    // router.push('/demo');
  };

  return (
    <div 
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-b from-blue-900 to-black"
    >
      {/* 添加一个半透明的遮罩层，使文字更容易阅读 */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="max-w-2xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Little Hero
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-6"
        >
          Create Your Own Hero Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-white mb-8"
        >
          Stories where your child is the star — not just a character in someone else's book.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={handleStartStory}
            className="text-lg px-6 py-3 bg-white hover:bg-gray-100 text-blue-700 rounded-xl shadow-md transition-colors duration-200"
          >
            Start Your Story
          </button>
          <button 
            onClick={handleDemoBook}
            className="text-lg px-6 py-3 border border-white text-white rounded-xl hover:bg-white/10 transition-colors duration-200"
          >
            See a Demo Book
          </button>
        </motion.div>
      </div>
    </div>
  );
}
