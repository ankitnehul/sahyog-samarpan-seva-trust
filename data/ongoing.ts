import type { OngoingEvent } from "@/types";

/**
 * Currently active / featured event shown prominently on the homepage.
 * Set to `null` when there is no ongoing event.
 */
export const ongoingEvent: OngoingEvent | null = {
  id: "chitrakala-spardha-2026",
  title: "Painting Competition at Mukbadhir Vidyalaya",
  titleMr: "चित्रकला स्पर्धा",
  intro: [
    "११ वर्षांच्या समाजसेवेचा प्रवास पूर्ण करत आणि सेवाभावी संस्था म्हणून नव्या वाटचालीची सुरुवात करत आहोत, व याचा आरंभ मूकबधिर विद्यालयातील विद्यार्थ्यांसाठी चित्रकला स्पर्धेचे आयोजन करत आहोत.",
  ],
  dateLabel: "शनिवार, १ ऑगस्ट २०२६",
  timeLabel: "सकाळी १०:०० वाजता",
  location: "मूकबधिर विद्यालय, तपोवन रोड, सावेडी, अहिल्यानगर",
  appeal: [
    "या उपक्रमाद्वारे चिमुकल्या कलाकारांच्या कल्पनाशक्तीला आणि कलागुणांना प्रोत्साहन देण्याचा आमचा छोटासा प्रयत्न आहे.",
    "आपण सर्वांनी या उपक्रमाला शुभेच्छा द्याव्यात आणि शक्य असल्यास उपस्थित राहून विद्यार्थ्यांचा उत्साह वाढवावा, ही नम्र विनंती.",
  ],
  tagline: "सेवा हेच कर्म",
  flyer: "/images/events/chitrakala-spardha-2026.png",
};
