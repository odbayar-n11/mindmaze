'use client';

import { Component } from 'react';
import { getLang, setLang, type Lang } from '@/lib/lang';
import { holdReveal } from '@/lib/pageReady';
import PuzzlesView from './PuzzlesView';
import { puzzlesText } from './content';
import './puzzles.css';

type Props = Record<string, never>;
type Section = 'puzzles' | 'games' | 'edu' | 'impact';
type State = { lang: Lang; active: string };

const flag = (on: boolean) => (on ? 'true' : 'false') as 'true' | 'false';

/**
 * MindMaze puzzle site: the scroll-assembled 3D burr (three.js), the nav that follows the
 * section in view, and the language toggle.
 */
export default class PuzzlesPage extends Component<Props, State> {
  state: State = { lang: getLang(), active: 'puzzles' };

  private off: (() => void)[] = [];
  private mountId = 0; // guards the async three.js start against a mount/unmount in between

  componentDidMount() {
    const id = ++this.mountId;
    // highlight the nav link of the section in the middle of the screen
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) this.setState({ active: e.target.id });
        }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    document.querySelectorAll('.page-puzzles main section').forEach((s) => io.observe(s));
    this.off.push(() => io.disconnect());
    // keep the page-transition cover up until the 3D burr has drawn its first frame
    const ready = holdReveal();
    this.off.push(ready);
    void this.startBurr(id).finally(ready);
  }

  componentWillUnmount() {
    this.mountId++;
    this.off.forEach((f) => f());
    this.off = [];
  }

  private async startBurr(id: number) {
    const { startBurr } = await import('./burr'); // three.js loads only on this page
    const byId = (id: string) => document.getElementById(id);
    const canvas = byId('burr');
    const section = byId('puzzles');
    const floor = byId('floor');
    const count = byId('count');
    const bar = byId('progress');
    if (id !== this.mountId || !(canvas instanceof HTMLCanvasElement) || !section || !floor || !count || !bar) return;
    this.off.push(startBurr({ canvas, section, floor, count, bar }));
  }

  private setLanguage = (lang: Lang) => {
    setLang(lang);
    this.setState({ lang });
  };

  renderVals() {
    const { lang, active } = this.state;
    const mn = lang === 'mn';
    const nav = {} as Record<Section, string>;
    (['puzzles', 'games', 'edu', 'impact'] as const).forEach((k) => {
      nav[k] = active === k ? 'active' : '';
    });
    return {
      t: puzzlesText(lang),
      nav,
      enP: flag(!mn),
      mnP: flag(mn),
      setEn: () => this.setLanguage('en'),
      setMn: () => this.setLanguage('mn'),
      // the 3D stage is pinned while you scroll through Part 01
      puzzlesCls: 'pin',
    };
  }

  render() {
    return <PuzzlesView v={this.renderVals()} />;
  }
}

export type PuzzlesVals = ReturnType<PuzzlesPage['renderVals']>;
