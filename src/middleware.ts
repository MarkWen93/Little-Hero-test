import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 安全相关的响应头
const securityHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

// 简化中间件逻辑，只做基本的路由检查
export function middleware(request: NextRequest) {
  // 获取请求的路径
  const path = request.nextUrl.pathname;

  // 安全检查
  if (path.includes('..') || path.includes('//')) {
    return new NextResponse(null, { status: 400 });
  }

  // 创建响应
  const response = NextResponse.next();

  // 添加安全头
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

// 只匹配故事创建页面
export const config = {
  matcher: ['/create/story/:path*', '/api/:path*', '/:path*'],
};
