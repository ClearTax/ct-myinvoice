// types/index.d.ts
export type IFrameSrc =
  | 'myinvoice-dev.my.cleartax.com'
  | 'myinvoice.my.cleartax.com'
  | 'myinvoice-sandbox.my.cleartax.com';

export interface ICreateIframeOptions {
  width: string;
  height: string;
  sid: string;
  tin?: string;
  iframeSrc?: IFrameSrc;
  title?: string;
}

export default function createIframe(
  options: ICreateIframeOptions
): HTMLIFrameElement;
