import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creating Your Story - Little Hero',
  description: 'Watch as we create your personalized adventure story.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
