declare module "@emailjs/browser" {
  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    publicKey: string
  ): Promise<{ status: number; text: string }>;

  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, any>,
    publicKey: string
  ): Promise<{ status: number; text: string }>;

  const emailjs: { sendForm: typeof sendForm; send: typeof send };
  export default emailjs;
}

declare module "react-hot-toast" {
  const toast: any;
  export default toast;
  export const Toaster: any;
}
