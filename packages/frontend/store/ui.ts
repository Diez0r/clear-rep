import * as bowser from 'bowser';
import { getterTree, mutationTree } from 'nuxt-typed-vuex';
import { ViewportInfo } from '@/plugins/viewportSizeHandler';


export const state = () => ({
  bowser: {} as bowser.Parser.ParsedResult,
  windowWidth: null as ViewportInfo['windowWidth'],
  windowHeight: null as ViewportInfo['windowHeight'],
  documentWidth: null as ViewportInfo['documentWidth'],
  documentHeight: null as ViewportInfo['documentHeight'],
  scrollbarWidth: null as ViewportInfo['scrollbarWidth'],
  breakpoint: null as ViewportInfo['breakpoint'],
  breakpointGap: null as ViewportInfo['breakpointGap'],
});

export const mutations = mutationTree(state, {
  getBowserInfo(state): void {
    state.bowser = bowser.parse(window.navigator.userAgent);
  },
  updateViewportInfo(state, payload: ViewportInfo) {
    state.windowWidth = payload.windowWidth;
    state.windowHeight = payload.windowHeight;
    state.documentWidth = payload.documentWidth;
    state.documentHeight = payload.documentHeight;
    state.scrollbarWidth = payload.scrollbarWidth;
    state.breakpoint = payload.breakpoint;
  },
});

export const getters = getterTree(state, {
  isMobile(state): boolean {
    return state.windowWidth <= 767;
  },
  isDesktop(state): boolean {
    return state.windowWidth >= 1023;
  },
  isTablet(state): boolean {
    return state.windowWidth >= 768 && state.windowWidth <= 1023;
  },
});
