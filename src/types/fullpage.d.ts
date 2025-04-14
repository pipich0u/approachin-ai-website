declare module 'fullpage.js' {
  interface FullPageOptions {
    scrollingSpeed?: number;
    navigation?: boolean;
    navigationPosition?: 'left' | 'right';
    slidesNavigation?: boolean;
    slidesNavPosition?: 'top' | 'bottom';
    onLeave?: (origin: any, destination: any, direction: string) => void;
    afterRender?: () => void;
    [key: string]: any;
  }

  class Fullpage {
    constructor(selector: string, options?: FullPageOptions);
    destroy(type?: string): void;
    moveTo(section: number, slide?: number): void;
    silentMoveTo(section: number, slide?: number): void;
    moveSlideRight(): void;
    moveSlideLeft(): void;
    setAllowScrolling(value: boolean): void;
  }

  export = Fullpage;
} 