import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "संपर्क करें | Roxymind Digital Creations",
  description:
    "डिजिटल उत्पादों, खरीदारी या सहायता से जुड़े सवालों के लिए Roxymind Digital Creations से संपर्क करें।",
};

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <rect height="16" rx="2" width="20" x="2" y="4" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
      <path d="M9 9a.8.8 0 0 0-1.2.4c-.2.5-.3 1.1.1 1.9a8.5 8.5 0 0 0 3.8 3.8c.8.4 1.4.3 1.9.1a.8.8 0 0 0 .4-1.2l-.7-1a.8.8 0 0 0-1-.3l-.6.3a6 6 0 0 1-2.2-2.2l.3-.6a.8.8 0 0 0-.3-1z" />
    </svg>
  );
}

export default function ContactUsPage() {
  return (
    <main className="bg-[#eef2f6] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8 sm:space-y-10">
        <section className="rounded-3xl border border-[#eadfce] bg-[#fffaf1] px-6 py-12 text-center shadow-[0_24px_70px_-28px_rgba(35,42,54,0.18)] sm:px-12 sm:py-16 lg:px-20">
          <div
            aria-hidden="true"
            className="mx-auto mb-7 h-1 w-16 rounded-full bg-[#f0c27b]"
          />
          <h1 className="text-4xl font-black leading-tight tracking-tight text-[#54232b] sm:text-5xl md:text-6xl">
            संपर्क करें
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-[#51483f] sm:text-lg md:text-xl md:leading-relaxed">
            हम आपकी सहायता के लिए यहाँ हैं! सहायता, खरीदारी से जुड़ी समस्याओं या हमारे
            डिजिटल उत्पादों के बारे में किसी भी सवाल के लिए, कृपया हमसे संपर्क करें।
          </p>
          <div className="mx-auto mt-12 max-w-3xl border-t border-[#eadfce] pt-9">
            <h2 className="text-2xl font-bold tracking-tight text-[#54232b] sm:text-3xl md:text-4xl">
              Roxymind Digital Creations
            </h2>
            <p className="mt-4 text-lg italic leading-8 text-[#8c4b29] sm:text-xl">
              हर डिजिटल उत्पाद के साथ, आपके रोज़मर्रा के जीवन को बेहतर बनाने की दिशा में
              एक कदम।
            </p>
          </div>
        </section>

        <section
          aria-labelledby="contact-details-heading"
          className="rounded-3xl border border-[#eadfce] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-[#54232b] sm:text-4xl"
              id="contact-details-heading"
            >
              हमसे संपर्क करें
            </h2>
            <div className="mt-10 grid gap-6 text-left md:grid-cols-2 md:gap-8">
              <article className="flex h-full flex-col items-center rounded-2xl border border-[#eadfce] bg-[#fffaf1] p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8">
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#8c4b29] shadow-sm"
                >
                  <EmailIcon />
                </div>
                <h3 className="text-xl font-bold text-[#54232b] sm:text-2xl">
                  ईमेल
                </h3>
                <a
                  className="mt-3 break-all text-base leading-7 text-[#51483f] underline decoration-[#d9ad78] underline-offset-4 hover:text-[#8c4b29] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a66c34]"
                  href="mailto:customer.roxymind@gmail.com"
                >
                  customer.roxymind@gmail.com
                </a>
                <a
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#713036] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5f252c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a66c34] sm:w-auto"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=customer.roxymind@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  ईमेल भेजें
                </a>
              </article>

              <article className="flex h-full flex-col items-center rounded-2xl border border-[#eadfce] bg-[#fffaf1] p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8">
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#27804b] shadow-sm"
                >
                  <WhatsAppIcon />
                </div>
                <h3 className="text-xl font-bold text-[#54232b] sm:text-2xl">
                  WhatsApp
                </h3>
                <a
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#27804b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f693d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a66c34] sm:w-auto"
                  href="https://wa.me/918975776118"
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp पर चैट करें
                </a>
              </article>
            </div>
            <p className="mt-10 text-base leading-7 text-[#647084] sm:text-lg">
              हमारी सहायता टीम कार्यदिवसों में 24 घंटे के भीतर जवाब देने का प्रयास करती है।
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
