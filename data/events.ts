import type { WorkEvent } from "@/types";

/**
 * SINGLE SOURCE OF TRUTH for "Our Work" events.
 *
 * To add a new event: add an object here with a unique `id`, an ISO `date`,
 * and a `photo` placed in /public/images/our-work/.
 * The page sorts these automatically by date (newest first), so order here
 * does not matter.
 */
const events: WorkEvent[] = [
  {
    id: "art-workshop-mukbadhir-2026",
    title: "Art Workshop at Mukbadhir Vidyalaya",
    titleMr: "कलेच्या रंगांत उमलली अनोखी स्वप्ने!",
    date: "2026-08-01",
    dateLabel: "1 August 2026",
    location: "Mukbadhir Vidyalaya, Tapovan Road, Savedi, Ahilyanagar",
    photo: "/images/our-work/art-workshop-mukbadhir-2026.png",
    photoPosition: "center",
    secondaryPhoto: "/images/gallery/art-workshop-students.png",
    description: [
      "Some journeys truly come full circle. On 1st August 2026, the Sahyog Samarpan team had the privilege of conducting an art workshop for students at a school for children with hearing and speech impairments. Together, we arranged art materials and spent the day encouraging creativity, self-expression, and confidence through art.",
      "One message we shared with the students was that not every emotion needs words—art has the power to express what words often cannot.",
      "This visit was especially meaningful because, before Sahyog Samarpan was formed, we had visited the same school to distribute kites purchased from funds we had collectively raised. Returning years later to give back through art felt like life had come full circle.",
      "Grateful to the school, its teachers, and every Sahyog Samarpan member who made this initiative possible. Small acts, when done together, can create a lasting impact.",
      "२०१६ मध्ये 'मकर संक्रांती'च्या पहिल्या उपक्रमाने याच मूकबधिर विद्यालयातून सुरू झालेला आमचा सामाजिक प्रवास, १० वर्षांची अखंड सेवा आणि फाउंडेशनची अधिकृत नोंदणी पूर्ण करून, आज ११ व्या वर्षात पुनश्च याच ठिकाणी अत्यंत आत्मीयतेने परतला! सहयोग समर्पण सेवा फाउंडेशन तर्फे सावेडी येथील मूकबधिर विद्यालयात आयोजित चित्रकला स्पर्धा अत्यंत उत्साहात पार पडली. हा उपक्रम म्हणजे केवळ एक कार्यक्रम नसून माणुसकी, संवेदनशीलता आणि प्रेरणेचा एक भावुक प्रवास ठरला.",
      "ऐकता किंवा बोलता येत नसले तरी, या बालकलाकारांच्या चित्रांनी त्यांच्या अमर्याद भावना, स्वप्ने आणि अफाट प्रतिभा अतिशय सुंदरपणे रेखाटली. आज आम्ही त्यांना प्रोत्साहन देण्यास गेलो होतो, मात्र त्यांच्या जिद्द आणि सकारात्मकतेने आम्हांलाच जगण्याचा खरा धडा दिला. 'सेवा म्हणजे केवळ मदत नव्हे, तर समाजाशी मनापासून जोडले जाणे' याची प्रचिती पुन्हा एकदा आली.",
      "या स्नेहाच्या उपक्रमास पाठबळ देणारे विद्यालयाचे सर्व शिक्षक, विद्यार्थी आणि फाउंडेशनच्या प्रत्येक सदस्याचे मनःपूर्वक आभार! शब्द नसले तरी रंग बोलतात... आणि आज त्या रंगांनी आमच्या मनावर कायमचा ठसा उमटवला! 💫",
    ],
  },
  {
    id: "maharashtra-day-2026",
    title: "Maharashtra Day Initiative at Anam Prem",
    titleMr: "महाराष्ट्र दिन उपक्रम",
    date: "2026-05-01",
    dateLabel: "1 May 2026",
    location: "Anam Prem, Ahilyanagar",
    photo: "/images/our-work/maharashtra-day-2026.png",
    description: [
      "आज महाराष्ट्र दिन या निमित्ताने सहायोग समर्पण सेवा फाउंडेशन तर्फे अनाम प्रेम संस्था ( अंध व अपंग मुलांसाठी कार्यरत असलेली संस्था ) यांना भेट देऊन, त्यांना किराणा व जीवनावश्यक वस्तू पुरवण्याची सेवा करण्याची संधी मिळाली.",
      "गौरवशाली महाराष्ट्र राज्याच्या स्थापना दिनी, सामाजिक सेवेद्वारे मानवी हितासाठी हातभार लावता आला ही ईश्वर कृपा. 🙏",
      "आपल्या सर्वांच्या पाठिंब्यामुळेच हे सेवाकार्य ह्याच जोमाने पुढे चालू राहील अशी ईश्वर चरणी प्रार्थना. 🙏",
    ],
  },
  {
    id: "diwali-2025-anamprem",
    title: "Diwali Celebration 2025 at Anam Prem",
    titleMr: "दिवाळी उपक्रम 2025 – दुसरा",
    date: "2025-10-20",
    dateLabel: "20 October 2025",
    location: "Anam Prem, Nimblak, Ahilyanagar",
    photo: "/images/our-work/diwali-2025-anamprem.png",
    description: [
      "या वर्षी आमच्या सहायोग समर्पण ग्रुपला १० वर्षे पूर्ण झाली असून, या दशकपूर्तीच्या निमित्ताने दिवाळी साजरी करण्यासाठी एक विशेष सामाजिक उपक्रम राबविण्यात आला.",
      "दिवाळी निमित्त आम्ही आज अनाप्रेम संस्था, निंबळक, अहिल्यानगर येथे भेट दिली. ही संस्था दिव्यांग मुलांसाठी कार्यरत असून, त्यांना शिक्षण, प्रशिक्षण आणि रोजगाराच्या विविध संधी उपलब्ध करून देण्यासाठी अखंड प्रयत्नशील आहे.",
      "या भेटीदरम्यान तेथील विद्यार्थ्यांसाठी धान्य, किराणा सामान, तसेच दैनंदिन वापरातील वस्तू भेट स्वरूपात देण्यात आल्या. यामुळे दिवाळीचा खरा आनंद आम्हा सर्वांसाठी दुगुणित झाला.",
      "तसेच संस्थेमध्ये राबविण्यात येणारे अनेक उपक्रम — Bouquets बनवणे, चप्पल बनवणे, गोशाळा, तसेच स्क्रॅप वस्तूंपासून “टाकाऊ ते टिकाऊ” या संकल्पनेवर आधारित प्रकल्प — हे प्रत्यक्ष पाहण्याची संधी मिळाली.",
      "आजचा हा अनुभव अत्यंत अभूतपूर्व, प्रेरणादायी आणि हर्षदायी ठरला असून, यामुळे समाजसेवेच्या पुढील कार्यात नवचैतन्य आणि उत्साह निर्माण झाला आहे.",
    ],
  },
  {
    id: "diwali-2024-matoshri",
    title: "Diwali Celebration 2024 at Matoshri Vriddhashram",
    titleMr: "दिवाळी उपक्रम 2024 – पहिला",
    date: "2024-10-31",
    dateLabel: "31 October 2024",
    location: "Matoshri Vriddhashram, Viladghat, Ahilyanagar",
    photo: "/images/our-work/diwali-2024-matoshri.png",
    photoFit: "contain",
    photoPosition: "center",
    description: [
      "सहायोग समर्पण ग्रुप गेल्या ९ वर्षांपासून दिवाळीच्या निमित्ताने दुसऱ्यांच्या चेहऱ्यावर आनंद आणणारे उपक्रम राबवत आहे.",
      "या वर्षी मातोश्री वृद्धाश्रम (विळदघाट, अहिल्यानगर) येथे भेट देऊन वृद्ध आजी-आजोबांसोबत दिवाळी साजरी केली. त्यांना किराणा, फळे आणि इतर आवश्यक वस्तू देत त्यांच्या जीवनात थोडासा गोडवा आणण्याचा प्रयत्न केला.",
      "वृद्ध आजी-आजोबांच्या भेटीने आणि त्यांच्या अनुभवांचे विचार ऐकून सर्व सदस्यांना खूप समाधान आणि आनंद वाटले.",
    ],
  },
  {
    id: "diwali-2023-matoshri",
    title: "Diwali Celebration 2023 at Matoshri Vriddhashram",
    titleMr: "दिवाळी उपक्रम 2023",
    date: "2023-11-13",
    dateLabel: "13 November 2023",
    location: "Matoshri Vriddhashram, Viladghat, Ahilyanagar",
    photo: "/images/our-work/diwali-2023-matoshri.png",
    description: [
      "सहायोग समर्पण ग्रुप गेली ८ वर्षांपासून दिवाळी निमित्त दुसऱ्यांच्या चेहऱ्यावर आनंद निर्माण होईल असे कार्यक्रम करत असतो.",
      "या वर्षी सहायोग समर्पण ग्रुपने मातोश्री वृद्धाश्रम (विळदघाट, अहमदनगर) मधील आजी-आजोबांबरोबर दिवाळी साजरी केली. आम्ही त्यांना फराळ, किराणा, वजन काटा, first-aid, फळे आणि इतर सामान दिले.",
      "आम्ही त्यांच्या आयुष्यात दिवाळी निमित्त थोडा गोडवा आणण्याचा प्रयत्न केला याचा सहायोग परिवाराला आनंद आहे. 🙏",
    ],
  },
];

/** Events sorted newest-first by date. */
export const workEvents: WorkEvent[] = [...events].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
