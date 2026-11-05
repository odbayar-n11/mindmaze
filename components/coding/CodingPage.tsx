'use client';

import { Component } from 'react';
import { getLang, setLang, type Lang } from '@/lib/lang';
import CodingView from './CodingView';
import { codingContent } from './content';
import './coding.css';

type Props = Record<string, never>;
type State = { lang: Lang; showSol: boolean; open: number };

const flag = (on: boolean) => (on ? 'true' : 'false') as 'true' | 'false';

/** Coding page: language toggle, the "Show a solution" switch and the questions accordion. */
export default class CodingPage extends Component<Props, State> {
  state: State = { lang: getLang(), showSol: false, open: 0 };

  private toggleSol = () => this.setState((s) => ({ showSol: !s.showSol }));

  private toggleQuestion = (i: number) => this.setState((s) => ({ open: s.open === i ? -1 : i }));

  private setLanguage = (lang: Lang) => {
    setLang(lang);
    this.setState({ lang });
  };

  renderVals() {
    const { lang, showSol, open } = this.state;
    const en = lang === 'en';
    const content = codingContent(lang);
    return {
      ...content,
      showSol,
      solExp: flag(showSol),
      solBtn: showSol ? content.t.solHide : content.t.solShow,
      toggleSol: this.toggleSol,
      open,
      toggleQuestion: this.toggleQuestion,
      isEn: flag(en),
      isMn: flag(!en),
      setEn: () => this.setLanguage('en'),
      setMn: () => this.setLanguage('mn'),
    };
  }

  render() {
    return <CodingView v={this.renderVals()} />;
  }
}

export type CodingVals = ReturnType<CodingPage['renderVals']>;
