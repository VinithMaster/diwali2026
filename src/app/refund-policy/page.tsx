import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "रिफंड नीति | दीपावली मार्गदर्शिका २०२६",
  description:
    "RoxyMind पर खरीदे गए डिजिटल उत्पादों के रिफंड, रिटर्न, शिपिंग और रद्दीकरण से संबंधित नीति।",
};

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm sm:p-8">
      <h2 className="border-b border-[#f0e6d8] pb-4 text-xl font-bold text-[#54232b] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-[15px] leading-8 text-[#51483f] sm:text-base">
        {children}
      </div>
    </section>
  );
}

function SupportEmail() {
  return (
    <a
      className="font-semibold text-[#8c4b29] underline decoration-[#d9ad78] underline-offset-4 transition hover:text-[#54232b] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a66c34]"
      href="mailto:customer.roxymind@gmail.com"
    >
      customer.roxymind@gmail.com
    </a>
  );
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fffaf1] px-4 py-10 sm:px-6 sm:py-16">
      <article className="mx-auto w-full max-w-4xl">
        <header className="mb-8 rounded-3xl border border-[#eadfce] bg-white px-6 py-8 shadow-sm sm:mb-10 sm:px-10 sm:py-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-[#a66c34]">
            दीपावली मार्गदर्शिका २०२६
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#54232b] sm:text-4xl">
            रिफंड नीति
          </h1>
          <p className="mt-6 text-[15px] leading-8 text-[#51483f] sm:text-base">
            यह रिफंड नीति RoxyMind पर खरीदे गए डिजिटल उत्पादों के रिफंड, रिटर्न, शिपिंग
            और रद्दीकरण से संबंधित हमारी नीतियों और प्रक्रियाओं का विवरण देती है। खरीदारी
            करने से पहले कृपया इस नीति को ध्यानपूर्वक पढ़ें।
          </p>
        </header>

        <div className="space-y-5 sm:space-y-6">
          <PolicySection title="सामान्य रिफंड नीति">
            <p>
              चूँकि RoxyMind ऐसी वस्तुएँ प्रदान करता है जो अमूर्त और अपरिवर्तनीय हैं, इसलिए
              ऑर्डर पूरा होने और उत्पाद डाउनलोड के लिए ईमेल या डाउनलोड के माध्यम से उपलब्ध
              होने के बाद हम रिफंड जारी नहीं करते। डिजिटल मीडिया की प्रकृति ऐसी है कि
              उत्पाद डाउनलोड करने के बाद उसे वास्तव में “वापस” करने का कोई तरीका नहीं
              होता। इसलिए इस वेबसाइट पर किए गए सभी भुगतान नॉन-रिफंडेबल हैं और किसी भी
              अनुरोध या विवाद को बिना किसी संवाद के अस्वीकार कर दिया जाएगा।
            </p>
            <p>
              हमारी वेबसाइट पर कोई भी वस्तु खरीदते समय इसे समझना ग्राहक की जिम्मेदारी है।
              यदि उत्पाद या सेवा डाउनलोड करने योग्य है या वास्तविक समय में ऑनलाइन उपयोग
              की जा सकती है और हमारे रिकॉर्ड दिखाते हैं कि उत्पाद या सेवा को हमारे सिस्टम
              के माध्यम से डाउनलोड या उपयोग किया गया है, तो कोई रिफंड नहीं दिया जाएगा।
            </p>
            <p>
              हम अपने उत्पादों की गुणवत्ता के लिए प्रतिबद्ध हैं और उनसे आपकी संतुष्टि हमारे लिए
              महत्वपूर्ण है। हालाँकि, क्योंकि हमारे उत्पाद इंटरनेट डाउनलोड के माध्यम से दिए
              जाने वाले डिजिटल सामान हैं, इसलिए सामान्यतः हम रिफंड नहीं देते। फिर भी, हम
              समझते हैं कि हमारे द्वारा दिए जाने वाले उत्पाद की प्रकृति से संबंधित असाधारण
              परिस्थितियाँ उत्पन्न हो सकती हैं।
            </p>
          </PolicySection>

          <PolicySection title="डाउनलोड और अनज़िप करने से जुड़ी समस्याएँ">
            <p>
              उत्पाद डाउनलोड करते समय या उसे अनज़िप करते समय समस्याएँ आ सकती हैं। ऐसी
              समस्याओं से संबंधित दावे 24 घंटे के भीतर प्रस्तुत किए जाने चाहिए। यदि आप इस
              अवधि के दौरान हमसे उचित तरीके से संपर्क नहीं करते हैं, तो हम आपकी चुप्पी को
              उत्पाद का सफल डाउनलोड मान सकते हैं। इसके बाद “डाउनलोड समस्या” के आधार पर
              किसी और राहत या रिफंड का अधिकार नहीं रहेगा।
            </p>
            <p>
              यदि आप उत्पाद को अनज़िप नहीं कर पाए हैं, तो कृपया तुरंत हमसे संपर्क करें। हमें
              आपको डाउनलोड के लिए उत्पाद ईमेल करने में खुशी होगी। सहायता के लिए{" "}
              <SupportEmail /> पर संपर्क करें।
            </p>
          </PolicySection>

          <PolicySection title="शिपिंग और रद्दीकरण">
            <p>
              इस वेबसाइट पर शिपिंग लागू नहीं होती, क्योंकि हम केवल डिजिटल उत्पाद बेचते हैं।
              खरीदारी के तुरंत बाद आपके ऑर्डर आपके ईमेल पर भेज दिए जाएँगे। हम WhatsApp पर
              भी एक संदेश भेजेंगे।
            </p>
            <p>
              उत्पादों की प्रकृति के कारण रद्दीकरण और रिफंड लागू नहीं होते। कृपया सहायता के
              लिए हमारे ईमेल <SupportEmail /> पर संपर्क करें; हम 24 घंटे से कम समय में आपके
              प्रश्नों का समाधान करेंगे।
            </p>
          </PolicySection>
        </div>
      </article>
    </main>
  );
}
