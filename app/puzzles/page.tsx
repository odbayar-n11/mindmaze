import type { Metadata } from 'next';
import PuzzlesPage from '@/components/puzzles/PuzzlesPage';

export const metadata: Metadata = {
  title: 'Puzzles',
  description: 'Traditional Mongolian puzzles: assemble a six-piece wooden burr, meet the games our ancestors played and see our partner schools.',
};

export default function Page() {
  return <PuzzlesPage />;
}
