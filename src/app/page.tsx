import Image from "next/image";
import Script from "next/script";

const PAYMENT_URL = "";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const DISPLAY_PRICE = "₹ 30";

const paymentUrl = (() => {
  try {
    const parsedUrl = new URL(PAYMENT_URL);
    return parsedUrl.protocol === "https:" ? parsedUrl.toString() : "";
  } catch {
    return "";
  }
})();

const benefits = [
  {
    number: "०१",
    title: "पाँच दिनों का कैलेंडर",
    description: "दीपावली के पाँच दिनों और उनसे जुड़े प्रमुख अनुष्ठानों का परिचय।",
  },
  {
    number: "०२",
    title: "पूजा-विधि और सामग्री",
    description: "लक्ष्मी-पूजन की विधि, सामग्री और उनके पारंपरिक अर्थ की जानकारी।",
  },
  {
    number: "०३",
    title: "अन्य प्रमुख अनुष्ठान",
    description: "वसु बारस, धनतेरस, नरक चतुर्दशी, गोवर्धन पूजा और भाई दूज।",
  },
  {
    number: "०४",
    title: "क्षेत्रीय परंपराएँ",
    description: "भारत के विभिन्न क्षेत्रों में दीपावली मनाने के अलग-अलग तरीकों का परिचय।",
  },
  {
    number: "०५",
    title: "पकवान, फराळ और उपहार",
    description: "त्योहार के पकवान, फराळ और उपहारों से जुड़े विषय।",
  },
  {
    number: "०६",
    title: "सुरक्षा और पाँच-दिवसीय प्लानर",
    description: "सुरक्षित, पर्यावरण-अनुकूल उत्सव के सुझाव और पाँच दिनों का प्लानर।",
  },
];

const ritualSections = [
  "क्या है?",
  "क्यों करते हैं?",
  "कैसे करें?",
  "सामग्री और उसका अर्थ",
  "पारंपरिक लाभ",
  "क्षेत्रीय भेद",
  "सामान्य गलतियाँ",
  "प्लानिंग",
];

const questions = [
  {
    question: "क्या दीपावली केवल एक दिन का त्योहार है?",
    answer:
      "मुख्य पूजन एक दिन का है, लेकिन पूरा उत्सव सामान्यतः पाँच दिन चलता है। महाराष्ट्र और गुजरात में यह एक या अधिक दिन पहले शुरू हो सकता है।",
  },
  {
    question: "क्या लक्ष्मी-पूजन केवल रात में होता है?",
    answer:
      "मार्गदर्शिका के अनुसार मुख्य पूजन प्रदोष काल, यानी सूर्यास्त के बाद किया जाता है। कुछ व्यापारी परंपराओं में समय अलग हो सकता है; स्थानीय पंचांग देखें।",
  },
  {
    question: "अगर सही समय चूक जाए तो क्या करें?",
    answer: "घबराएँ नहीं। अपने पुरोहित से निकटतम शुभ समय के बारे में पूछें।",
  },
  {
    question: "क्या मूर्ति के बिना पूजा हो सकती है?",
    answer:
      "हाँ। मार्गदर्शिका में चित्र, श्री-यंत्र या प्रतीक-सिक्का रखकर पूजा करने का विकल्प बताया गया है।",
  },
  {
    question: "सोना नहीं खरीद सकते तो धनतेरस पर क्या करें?",
    answer:
      "मार्गदर्शिका में छोटा बर्तन, सिक्का, धनिया-गुड़ या झाड़ू जैसे पारंपरिक विकल्पों का उल्लेख है; अपनी परंपरा और बजट के अनुसार चुनें।",
  },
  {
    question: "घर में शोक हो तो दीपावली कैसे मनाएँ?",
    answer:
      "शोक के समय के नियम परिवारों में अलग हो सकते हैं। अपने बुज़ुर्गों या कुल-पुरोहित से मार्गदर्शन लें।",
  },
  {
    question: "पहली बार पूजा कर रहे हैं, कहाँ से शुरू करें?",
    answer:
      "मार्गदर्शिका की सामग्री-सूची और अनुष्ठान-विधि से शुरुआत करें। अपने परिवार की परंपरा के अनुसार पूजा करें।",
  },
  {
    question: "बच्चों को दीपावली के बारे में कैसे समझाएँ?",
    answer:
      "मार्गदर्शिका में कहानियाँ सुनाने, दीये सजाने, रंगोली में शामिल करने और दान या मिठाई बाँटने में बच्चों को भागीदार बनाने का सुझाव है।",
  },
];

function PurchaseButton({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  if (paymentUrl) {
    return (
      <a
        className={`relative isolate overflow-hidden ${className}`}
        href={paymentUrl}
        target="_blank"
        rel="noreferrer"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent motion-safe:animate-[diwali-shine_5s_ease-in-out_infinite]"
        />
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button
      aria-label={`${children} — खरीद प्रक्रिया अभी सक्रिय नहीं है`}
      className={className}
      disabled
      title="खरीद प्रक्रिया अभी सक्रिय नहीं है"
      type="button"
    >
      {children}
    </button>
  );
}

function WhatsAppChatButton() {
  return (
    <a
      aria-label="WhatsApp पर चैट करें"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#075e54]/30 transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075e54] motion-reduce:transition-none sm:bottom-6 sm:right-6"
      href="https://wa.me/918975776118"
      rel="noreferrer"
      target="_blank"
      title="WhatsApp पर चैट करें"
    >
      <svg
        aria-hidden="true"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.53 0 .18 5.34.18 11.91c0 2.1.55 4.17 1.6 5.98L.08 24l6.27-1.65a11.9 11.9 0 0 0 5.74 1.47h.01c6.57 0 11.92-5.35 11.92-11.92a11.84 11.84 0 0 0-3.5-8.42ZM12.1 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.03c0 5.47-4.46 9.92-9.94 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.22 5.1 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className="sr-only">WhatsApp पर चैट करें</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
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
      <header className="border-b border-[#eadfce] bg-[#fffaf1]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a
            className="text-lg font-bold tracking-tight text-[#54232b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a66c34]"
            href="#home"
          >
            दीपावली मार्गदर्शिका <span className="text-[#a66c34]">२०२६</span>
          </a>
          <nav
            aria-label="मुख्य नेविगेशन"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#594b43]"
          >
            <a
              className="hover:text-[#8b3c3a] focus-visible:outline-2"
              href="#pillars"
            >
              परंपरा
            </a>
            <a
              className="hover:text-[#8b3c3a] focus-visible:outline-2"
              href="#questions"
            >
              प्रश्न
            </a>
            <a
              className="relative isolate overflow-hidden rounded-full bg-[#752f36] px-4 py-2 font-semibold text-white transition hover:bg-[#57222a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a66c34]"
              href="#purchase"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent motion-safe:animate-[diwali-shine_5s_ease-in-out_infinite]"
              />
              <span className="relative z-10">ई-बुक खरीदें</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="home" className="flex-1">
        <section aria-label="दीपावली मार्गदर्शिका २०२६" className="bg-[#3b1721]">
          <Image
            alt="दीपावली मार्गदर्शिका २०२६: पाँच दिनों का संपूर्ण मार्गदर्शन"
            className="h-auto w-full"
            height={1536}
            priority
            sizes="100vw"
            src="/images/Diwali_Landing_Hero.png"
            width={2752}
          />
        </section>

        <section
          className="bg-[#eee7d9] px-5 py-16 sm:px-8 sm:py-20"
          id="pillars"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a622f]">
                दीपावली का भाव
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4d2028] sm:text-4xl">
                दीपावली के तीन स्तंभ
              </h2>
              <p className="mt-4 leading-7 text-[#62544a]">
                पुस्तक में दीपावली को स्वच्छता, प्रकाश और संबंधों से जुड़ा उत्सव बताया गया है।
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "स्वच्छता",
                  description: "घर, मन और हिसाब-किताब की सफाई।",
                  symbol: "शुभ",
                },
                {
                  title: "प्रकाश",
                  description: "दीये, रंगोली और सजावट से उजाला।",
                  symbol: "दीप",
                },
                {
                  title: "संबंध",
                  description:
                    "परिवार, मित्र, पड़ोसी और भाई-बहन के रिश्तों का उत्सव।",
                  symbol: "स्नेह",
                },
              ].map((pillar) => (
                <article
                  className="rounded-2xl border border-[#ded0b7] bg-[#fffdf8] p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  key={pillar.title}
                >
                  <span className="mx-auto inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-[#f1e3c7] px-3 text-sm font-bold text-[#7a4a35]">
                    {pillar.symbol}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[#54232b]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#62544a]">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6eee7] px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a66c34]">
              उपयोगी जानकारी
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4d2028] sm:text-4xl">
              इस मार्गदर्शिका से आपको क्या समझने में मदद मिलेगी?
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                className="rounded-2xl border border-[#eee3d1] bg-white p-6 shadow-[0_8px_30px_rgba(77,32,40,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(77,32,40,0.12)]"
                key={benefit.number}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f6e9cf] font-semibold text-[#875c2e]"
                >
                  {benefit.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#54232b]">
                  {benefit.title}
                </h3>
                <p className="mt-2 leading-7 text-[#62544a]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#54232b] text-[#fffaf1]" id="how-to-use">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e6c787]">
                हर अनुष्ठान का क्रम
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                जानकारी एक ही ढाँचे में
              </h2>
              <p className="mt-4 leading-7 text-[#f1e5d6]">
                पुस्तक में प्रमुख अनुष्ठानों को इन विषयों के क्रम में प्रस्तुत किया गया है।
              </p>
            </div>
            <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ritualSections.map((item, index) => (
                <li
                  className="flex min-h-24 items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-5 leading-7 text-[#f9efdf] transition duration-300 hover:-translate-y-0.5 hover:border-[#d6ad64]/60 hover:bg-white/10"
                  key={item}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6ad64] font-bold text-[#54232b]">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-[#f1e5d6]">
              पुस्तक में पाँच दिनों का प्लानर भी है, जिसे छापकर रसोई या पूजा-घर में रखा जा
              सकता है।
            </p>
          </div>
        </section>

        <section className="bg-[#d9c7a2]" id="purchase">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="purchase-card mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#d8b770] bg-[#fffdf8] shadow-[0_20px_60px_rgba(15,8,8,0.32)]">
              <div className="grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[0.65fr_1.35fr]">
                <Image
                  alt="दीपावली मार्गदर्शिका २०२६ का छोटा पुस्तक-आवरण"
                  className="mx-auto h-auto w-full max-w-52 drop-shadow-xl"
                  height={2033}
                  src="/images/Diwali_Ebook_3D_Mockup_Only.png"
                  width={1352}
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a66c34]">
                    ई-बुक
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#4d2028]">
                    दीपावली मार्गदर्शिका २०२६
                  </h2>
                  <p className="mt-4 leading-7 text-[#62544a]">
                    पाँच दिनों का कैलेंडर, पूजा-विधि, क्षेत्रीय परंपराएँ, तैयारी का प्लानर और
                    जिम्मेदार उत्सव के सुझाव।
                  </p>
                  <p className="mt-5 text-sm font-medium text-[#76675b]">मूल्य</p>
                  <p className="mt-1 text-2xl font-bold text-[#752f36]">
                    {DISPLAY_PRICE}
                  </p>
                  <PurchaseButton className="purchase-cta mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#752f36] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#57222a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a66c34] disabled:cursor-not-allowed disabled:opacity-60">
                    अभी ई-बुक खरीदें
                  </PurchaseButton>
                  {!paymentUrl && (
                    <p
                      className="mt-4 rounded-lg bg-[#f6efe2] px-4 py-3 text-sm leading-6 text-[#62544a]"
                      id="payment-status"
                    >
                      खरीद प्रक्रिया अभी सक्रिय नहीं है। Razorpay भुगतान लिंक जोड़ने के
                      बाद यह बटन उपलब्ध होगा।
                    </p>
                  )}
                  <p className="mt-3 text-xs leading-5 text-[#76675b]">
                    भुगतान, डिलीवरी और अन्य खरीद विवरण लिंक सक्रिय होने पर यहाँ स्पष्ट
                    किए जाएँगे।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-white px-5 py-16 sm:px-8 sm:py-20"
          id="questions"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a66c34]">
              स्पष्ट जानकारी
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4d2028] sm:text-4xl">
              अक्सर पूछे जाने वाले प्रश्न
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {questions.map((item) => (
              <details
                className="group rounded-2xl border border-[#eee3d1] bg-[#fffdf8] p-5 transition-colors duration-200 open:bg-white"
                key={item.question}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold leading-7 text-[#54232b] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a66c34]">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-[#a66c34] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-[#62544a]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#35191f] text-[#f8eddd]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <a
              className="text-xl font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6c787]"
              href="#home"
            >
              दीपावली मार्गदर्शिका २०२६
            </a>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#e2d3c2]">
              दीपावली की परंपराओं, पूजा-विधि और त्योहार की तैयारी के लिए एक सांस्कृतिक एवं
              शैक्षिक मार्गदर्शिका।
            </p>
            <p className="mt-4 max-w-xl text-xs leading-6 text-[#d0bdab]">
              यह पुस्तिका सामान्य सांस्कृतिक और शैक्षिक जानकारी है। तिथियाँ और मुहूर्त शहर,
              पंचांग और परंपरा के अनुसार बदल सकते हैं; स्थानीय पंचांग या पुरोहित से सलाह लें।
              पुस्तिका के चित्र प्रतीकात्मक हैं और एआई की सहायता से बनाए गए हैं। यह
              चिकित्सा, वित्तीय या कानूनी सलाह नहीं है। कुल-परंपरा सर्वोपरि है।
            </p>
          </div>
          <nav
            aria-label="फुटर नेविगेशन"
            className="grid content-start gap-8 sm:grid-cols-2"
          >
            <div>
              <h2 className="mb-4 text-sm font-semibold tracking-wide text-[#e6c787]">
                जानकारी
              </h2>
              <ul className="space-y-3 text-sm text-[#f8eddd]">
                <li>
                  <a
                    className="inline-flex py-1 underline-offset-4 transition-colors hover:text-[#e6c787] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6c787]"
                    href="/about-us"
                  >
                    हमारे बारे में
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex py-1 underline-offset-4 transition-colors hover:text-[#e6c787] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6c787]"
                    href="/contact-us"
                  >
                    संपर्क करें
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold tracking-wide text-[#e6c787]">
                नीतियाँ
              </h2>
              <ul className="space-y-3 text-sm text-[#f8eddd]">
                <li>
                  <a
                    className="inline-flex py-1 underline-offset-4 transition-colors hover:text-[#e6c787] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6c787]"
                    href="/privacy-policy"
                  >
                    गोपनीयता नीति
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex py-1 underline-offset-4 transition-colors hover:text-[#e6c787] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6c787]"
                    href="/terms-and-conditions"
                  >
                    नियम और शर्तें
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex py-1 underline-offset-4 transition-colors hover:text-[#e6c787] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6c787]"
                    href="/refund-policy"
                  >
                    रिफंड और वापसी नीति
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-5 pt-5 pr-20 pb-24 text-xs text-[#d0bdab] sm:px-8 sm:py-5">
            © २०२६ दीपावली मार्गदर्शिका। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </footer>
      <WhatsAppChatButton />
    </>
  );
}

// When Meta Pixel is configured, add ViewContent from a client component when
// the guide or purchase section becomes visible. Fire Purchase on the future
// thank-you page only after payment has been verified by a trusted integration.
