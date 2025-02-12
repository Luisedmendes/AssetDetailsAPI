declare namespace NodeJS {
  export interface ProcessEnv {
    readonly PORT: string;
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}
