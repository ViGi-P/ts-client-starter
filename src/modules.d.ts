declare module "*.css" {
  const content: { readonly [className: string]: string };
  export default content;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    HOST_URL: string;
    NODE_ENV: string;
  }
}
