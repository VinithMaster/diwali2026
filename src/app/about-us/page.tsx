import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "हमारे बारे में | Roxymind Digital Creations",
  description:
    "Roxymind Digital Creations के प्रीमियम डिजिटल उत्पादों और हमारे उद्देश्य के बारे में जानें।",
};

export default function AboutUsPage() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center bg-[#eef2f6] px-4 py-14 sm:px-6 sm:py-20">
      <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-[#eadfce] bg-[#fffaf1] px-6 py-12 text-center text-[#51483f] shadow-[0_24px_70px_-28px_rgba(35,42,54,0.22)] sm:px-12 sm:py-16 lg:px-20">
        <div
          aria-hidden="true"
          className="mx-auto mb-7 h-1 w-16 rounded-full bg-[#f0c27b]"
        />
        <h1 className="text-4xl font-black leading-tight tracking-tight text-[#54232b] sm:text-5xl md:text-6xl">
          हमारे बारे में
        </h1>

        <div className="mx-auto mt-8 max-w-4xl space-y-6 text-base leading-8 text-[#51483f] sm:text-lg md:text-xl md:leading-relaxed">
          <p>
            <strong className="font-bold text-[#54232b]">
              Roxymind Digital Creations
            </strong>{" "}
            में आपका स्वागत है — प्रीमियम और उच्च-मूल्य वाले डिजिटल उत्पादों का आपका पसंदीदा
            स्थान, जिन्हें जीवन को सरल, अधिक व्यवस्थित और आनंददायक बनाने के लिए तैयार किया
            गया है।
          </p>
          <p>
            हम प्लानर, टेम्पलेट, गाइड और त्योहारों के विशेष बंडल जैसे उपयोगी और खूबसूरती से
            तैयार किए गए डिजिटल संसाधन बनाते हैं। ये आपका समय बचाने, तनाव कम करने और उन
            बातों पर ध्यान देने में मदद करते हैं जो वास्तव में महत्वपूर्ण हैं।
          </p>
          <p>
            हमारा उद्देश्य ऐसे डिजिटल उत्पाद देना है जो स्पष्टता, सुविधा और वास्तविक परिणाम
            प्रदान करें। हर उत्पाद को सावधानी से और उपयोगकर्ताओं की वास्तविक ज़रूरतों के
            आधार पर तैयार किया जाता है। उत्पाद तुरंत उपलब्ध कराए जाते हैं, ताकि आप उनका
            उपयोग तुरंत शुरू कर सकें।
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-[#eadfce] pt-9">
          <h2 className="text-2xl font-bold tracking-tight text-[#54232b] sm:text-3xl md:text-4xl">
            Roxymind Digital Creations
          </h2>
          <p className="mt-4 text-lg italic leading-8 text-[#8c4b29] sm:text-xl">
            हर डिजिटल उत्पाद के साथ, आपके रोज़मर्रा के जीवन को बेहतर बनाने की दिशा में एक
            कदम।
          </p>
        </div>
      </section>
    </main>
  );
}
