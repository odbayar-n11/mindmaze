'use client';

import { Component } from 'react';
import { getLang, setLang, type Lang } from '@/lib/lang';
import CodingView from './CodingView';
import { codingContent } from './content';
import './coding.css';

type Props = Record<string, never>;
type State = { lang: Lang; showSol: boolean };

const flag = (on: boolean) => (on ? 'true' : 'false') as 'true' | 'false';

/** Coding page: language toggle and the "Show a solution" switch of the code puzzle. */
export default class CodingPage extends Component<Props, State> {
  state: State = { lang: getLang(), showSol: false };

  private toggleSol = () => this.setState((s) => ({ showSol: !s.showSol }));

  private setLanguage = (lang: Lang) => {
    setLang(lang);
    this.setState({ lang });
  };

  renderVals() {
    const { lang, showSol } = this.state;
    const en = lang === 'en';
    const L = <T,>(e: T, m: T) => (en ? e : m);
    return {
      ...codingContent(lang),
      showSol,
      solExp: flag(showSol),
      solBtn: showSol ? L('Hide the solution', 'Шийдлийг нуух') : L('Show a solution', 'Шийдлийг харах'),
      toggleSol: this.toggleSol,
      isEn: flag(en),
      isMn: flag(!en),
      enBg: en ? '#F3EFE6' : 'transparent',
      enFg: en ? '#0B1528' : '#F3EFE6',
      mnBg: en ? 'transparent' : '#F3EFE6',
      mnFg: en ? '#F3EFE6' : '#0B1528',
      setEn: () => this.setLanguage('en'),
      setMn: () => this.setLanguage('mn'),
    };
  }

  render() {
    return <CodingView v={this.renderVals()} />;
  }
}

export type CodingVals = ReturnType<CodingPage['renderVals']>;
