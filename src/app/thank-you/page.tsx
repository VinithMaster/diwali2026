import type { Metadata } from "next";
import Script from "next/script";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export const metadata: Metadata = {
  title: "खरीदारी के लिए धन्यवाद | RoxyMind",
  description:
    "आपका ऑर्डर सफलतापूर्वक प्राप्त हुआ। अपना डिजिटल उत्पाद यहाँ से डाउनलोड करें।",
};

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

export default function ThankYouPage() {
  return (
    <>
      {META_PIXEL_ID && (
        <Script id="meta-pixel-thank-you" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${JSON.stringify(META_PIXEL_ID)});
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      <main className="flex min-h-screen items-center justify-center bg-[#eef2f6] px-4 py-12 sm:px-6">
        <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white text-center shadow-[0_24px_70px_-28px_rgba(35,42,54,0.28)]">
          <div className="h-1.5 bg-[#7b302d]" />
          <div className="px-6 py-10 sm:px-12 sm:py-14">
            <header className="-mx-6 -mt-10 bg-[#54232b] px-6 py-10 sm:-mx-12 sm:-mt-14 sm:px-12 sm:py-12">
              <div
                aria-hidden="true"
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#f0c27b] ring-1 ring-white/20"
              >
                <svg
                  aria-hidden="true"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f0c27b]">
                RoxyMind
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                आपकी खरीदारी के लिए धन्यवाद!
              </h1>
              <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
                आपका ऑर्डर सफलतापूर्वक प्राप्त हो गया है।
              </p>
            </header>

            <div className="mt-9 rounded-2xl border border-[#e8edf3] bg-[#f7f9fc] p-5 sm:p-7">
              <a
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#713036] px-6 py-4 text-base font-semibold text-white shadow-[0_8px_20px_-8px_rgba(113,48,54,0.65)] transition hover:bg-[#5f252c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a66c34] sm:w-auto sm:min-w-72"
                href="https://drive.google.com/uc?export=download&id=1wxpDYF6S-Pv-jMrPDeenlKAdYjvxpu6k"
                rel="noreferrer"
                target="_blank"
              >
                <DownloadIcon />
                अपना उत्पाद डाउनलोड करें
              </a>
            </div>

            <div className="my-8 h-px bg-[#e8edf3]" />

            <footer>
              <h2 className="text-lg font-bold text-[#35303a]">RoxyMind</h2>
              <p className="mt-2 text-sm text-[#748094]">
                © 2025 RoxyMind. सर्वाधिकार सुरक्षित।
              </p>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
