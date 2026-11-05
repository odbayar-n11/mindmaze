/**
 * One light/dark setting for the whole site (homepage, /puzzles, /coding).
 * The theme lives as data-theme on <html>; each page's CSS reads it. With no saved choice the
 * site follows the system setting. Kept free of 'use client' so the server layout can import it.
 */
export const THEME_KEY = 'mindmaze-theme';

/** Runs in <head> before the first paint, so a saved choice never flashes the other theme. */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;}catch(e){}})();`;
