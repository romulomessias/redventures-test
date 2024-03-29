declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }

  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT:number;
  }
}

declare module '*.png';