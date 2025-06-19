// custom.d.ts

// CSS files
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

// Image and media files
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.webp';

// Font files
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';
