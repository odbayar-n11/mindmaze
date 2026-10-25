import type { Metadata } from 'next';
import CodingPage from '@/components/coding/CodingPage';

export const metadata: Metadata = {
  title: 'Coding',
  description: 'Coding at MindMaze: in-person and online classes where students learn the logic first, then build projects of their own.',
};

export default function Page() {
  return <CodingPage />;
}
