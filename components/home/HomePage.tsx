'use client';

import { Component, type CSSProperties } from 'react';
import { getLang, setLang, type Lang } from '@/lib/lang';
import { MarqueeRow, VerticalLoop } from '@/lib/motion';
import HomeView from './HomeView';
import { homeContent } from './content';
import { animateEye } from './eye';
import { CENTER, LABEL_AT, PROVINCES, projectsByProvince } from './map-data';
import './home.css';

type Props = Record<string, never>;
type State = { lang: Lang; hoverProv: string | null };

const flag = (on: boolean) => (on ? 'true' : 'false') as 'true' | 'false';

/** Homepage: language toggle, sliding photo rows, the blinking hero eye and the province map. */
export default class HomePage extends Component<Props, State> {
  state: State = { lang: getLang(), hoverProv: null };

  // photo rows: A = classroom photos (Impact), D = team posters (Team); the About column drifts down
  private rowA = new MarqueeRow(1);
  private rowD = new MarqueeRow(1);
  private column = new VerticalLoop();
  private stopEye: (() => void) | null = null;
  private hoverTimer: ReturnType<typeof setTimeout> | undefined;
  private provHandlers: Record<string, { enter: () => void; leave: () => void }> = {};

  componentWillUnmount() {
    this.stopEye?.();
    this.rowA.stop();
    this.rowD.stop();
    this.column.stop();
    clearTimeout(this.hoverTimer);
  }

  private setEyeEl = (el: Element | null) => {
    this.stopEye?.();
    this.stopEye = el ? animateEye(el) : null;
  };

  private setLanguage = (lang: Lang) => {
    setLang(lang);
    this.setState({ lang });
  };

  // map hover: the project card stays open while the pointer moves from the province onto it
  private hoverOn = (name: string) => {
    clearTimeout(this.hoverTimer);
    if (this.state.hoverProv !== name) this.setState({ hoverProv: name });
  };
  private hoverOff = () => {
    clearTimeout(this.hoverTimer);
    this.hoverTimer = setTimeout(() => this.setState({ hoverProv: null }), 140);
  };
  private cardEnter = () => clearTimeout(this.hoverTimer);
  private cardLeave = () => this.hoverOff();
  private provH(name: string) {
    if (!this.provHandlers[name]) {
      this.provHandlers[name] = { enter: () => this.hoverOn(name), leave: () => this.hoverOff() };
    }
    return this.provHandlers[name];
  }

  private mapVals(lang: Lang) {
    const en = lang === 'en';
    const L = <T,>(e: T, m: T) => (en ? e : m);
    const PROJECTS = projectsByProvince(L);
    const hov = this.state.hoverProv;
    const provinces = PROVINCES.map((p) => {
      const h = this.provH(p.name);
      const projs = PROJECTS[p.name]?.list;
      const on = hov === p.name;
      const at = LABEL_AT[p.name] || [0, 0];
      return {
        d: p.d,
        label: en ? p.name : p.mn,
        lxPct: (at[0] / 13).toFixed(2),
        lyPct: (at[1] / 6.14).toFixed(2),
        fill: on ? 'rgba(139,15,15,0.16)' : 'rgba(0,0,0,0)',
        stroke: on ? '#8B0F0F' : 'none',
        sw: on ? 3 : 0,
        cursor: projs ? 'pointer' : 'default',
        enter: h.enter,
        leave: h.leave,
        click: () => {
          if (projs) window.open(projs[0].url, '_blank', 'noopener');
        },
        on,
      };
    }).sort((x, y) => (x.on ? 1 : 0) - (y.on ? 1 : 0));
    const hovP = PROVINCES.find((p) => p.name === hov);
    const pInfo = hov ? PROJECTS[hov] : null;
    const cardProjects = pInfo ? pInfo.list.map((x) => ({ tag: L('Live', 'Нээлттэй'), ...x })) : [];
    let cardPos: CSSProperties = {};
    if (pInfo && hov) {
      const c = CENTER[hov];
      const xPct = ((c[0] / 1300) * 100).toFixed(2);
      const yPct = ((c[1] / 614) * 100).toFixed(2);
      cardPos =
        pInfo.side === 'right'
          ? { left: 'calc(' + xPct + '% + 12px)' }
          : { right: 'calc(' + (100 - Number(xPct)).toFixed(2) + '% + 12px)' };
      cardPos.top = yPct + '%';
      cardPos.transform = 'translateY(-' + pInfo.vy + '%)';
    }
    return {
      provinces,
      showCard: cardProjects.length > 0,
      cardRegion: hovP ? (en ? hovP.name : hovP.mn) : '',
      cardProjects,
      cardPos,
      cardEnter: this.cardEnter,
      cardLeave: this.cardLeave,
    };
  }

  renderVals() {
    const { lang } = this.state;
    const en = lang === 'en';
    return {
      ...homeContent(lang),
      ...this.mapVals(lang),
      isEn: flag(en),
      isMn: flag(!en),
      enBgD: en ? '#F3EFE6' : 'transparent',
      enFgD: en ? '#0B1528' : '#F3EFE6',
      mnBgD: en ? 'transparent' : '#F3EFE6',
      mnFgD: en ? '#F3EFE6' : '#0B1528',
      setEn: () => this.setLanguage('en'),
      setMn: () => this.setLanguage('mn'),
      setEyeEl: this.setEyeEl,
      setVTrack: this.column.attach,
      vPause: this.column.pause,
      vPlay: this.column.play,
      setTrackA: this.rowA.attach,
      mqPauseA: this.rowA.pause,
      mqPlayA: this.rowA.play,
      mqNextA: this.rowA.next,
      setTrackD: this.rowD.attach,
      mqNextD: this.rowD.next,
    };
  }

  render() {
    return <HomeView v={this.renderVals()} />;
  }
}

export type HomeVals = ReturnType<HomePage['renderVals']>;
