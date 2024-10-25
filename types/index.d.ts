// types/index.d.ts
export type EnvironmentType = 'development' | 'sandbox' | 'production';

export interface ICreateIframeOptions {
  token: string;
  width?: string;
  height?: string;
  tin?: string;
  environment?: EnvironmentType;
  title?: string;
  style?: { [key: string]: string }; // Optional inline style object
}

export default function createIframe(
  options: ICreateIframeOptions
): HTMLIFrameElement;
