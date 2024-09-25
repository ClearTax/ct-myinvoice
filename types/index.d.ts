// types/index.d.ts
export type IFrameSrc =
  | 'myinvoice-dev.my.cleartax.com'
  | 'myinvoice.my.cleartax.com'
  | 'myinvoice-sandbox.my.cleartax.com';

export interface ICreateIframeOptions {
  token: string;
  width?: string;
  height?: string;
  tin?: string;
  iframeSrc?: IFrameSrc;
  title?: string;
  style?: { [key: string]: string }; // Optional inline style object
}

export default function createIframe(
  options: ICreateIframeOptions
): HTMLIFrameElement;
