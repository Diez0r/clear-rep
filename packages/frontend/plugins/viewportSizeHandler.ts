const grid = require('@/styles/grid-config.json');

export interface ViewportInfo {
  windowWidth: number,
  windowHeight: number,
  documentWidth: number,
  documentHeight: number,
  scrollbarWidth: number,
  breakpoint: string | undefined,
  breakpointGap: string | undefined,
}

export default ({ store }: { store: any }) => {
  // Resize. The reason for iframe usage is window resize event, that doesn't fire if
  // vertical scrollbar appears and this causes problems time after time
  const iframe = document.createElement('iframe');

  iframe.setAttribute('id', '_resizeTrigger');
  iframe.setAttribute('style', 'position: absolute; z-index: -9999; visibility: hidden; width: 100%; min-height: 100%; height: auto; top: 0; border: none;');
  document.body.appendChild(iframe);
  iframe.contentWindow.addEventListener('resize', sizeHandler);


  function sizeHandler() {
    const { offsetWidth, offsetHeight } = document.documentElement as HTMLElement;
    const { innerWidth, innerHeight } = window as Window;
    const scrollbarWidth = innerWidth - offsetWidth;
    const queriesAll = Object.keys(grid.queries);
    const queriesCurrent = queriesAll.filter((query: any) => window.matchMedia(grid.queries[query]).matches);
    const breakpoint = queriesCurrent.find(rule => rule.length <= 3);
    const breakpointGap = queriesCurrent.find(rule => rule.length === 5);

    const viewportInfo: ViewportInfo = {
      windowWidth: innerWidth,
      windowHeight: innerHeight,
      documentWidth: offsetWidth,
      documentHeight: offsetHeight,
      scrollbarWidth,
      breakpoint,
      breakpointGap,
    };

    store.$accessor.ui.updateViewportInfo(viewportInfo);
  }

  sizeHandler();
};
