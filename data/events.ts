import type { SiteEvent } from "@/types";

/**
 * SINGLE SOURCE OF TRUTH for every event on the site.
 * Home, Our Work, each event page, and the Gallery all read from here.
 *
 * To add an event: add an object with a unique `id`, a `status`, an ISO `date`
 * (not needed for "upcoming"), and a `photo` placed in /public/images/our-work/.
 * Add `photos` for its gallery. Order here does not matter: done and ongoing
 * events are sorted newest-first below.
 */
const events: SiteEvent[] = [
  {
    id: "diwali-balghar-2026",
    status: "done",
    title: "Diwali Celebration 2026 (First Initiative) at Balghar Prakalp",
    titleMr: "बालघर प्रकल्पातील अनाथ मुलांबरोबर आनंदमयी दिवाळी!",
    date: "2026-11-01",
    dateLabel: "1 November 2026",
    location: "Balghar Prakalp, Tapovan Road, Ahilyanagar",
    photo: "/images/our-work/diwali-balghar-2026.jpg",
    photoPosition: "center",
    album: {
      title: "Diwali Celebration 2026 at Balghar Prakalp",
      titleMr: "बालघर प्रकल्पातील अनाथ मुलांबरोबर आनंदमयी दिवाळी!",
    },
    photos: [
      {
        id: "diwali-balghar-children-making",
        src: "/images/gallery/diwali-balghar-children-making.jpg",
        alt: "Children of Balghar Prakalp making paper lanterns for Diwali",
        caption: "Children making lanterns at Balghar Prakalp",
        captionMr: "बालघर प्रकल्पातील मुले आकाशकंदील तयार करताना",
        fit: "contain",
      },
      {
        id: "diwali-balghar-lanterns",
        src: "/images/gallery/diwali-balghar-lanterns.jpg",
        alt: "Colourful paper lanterns handmade by the children",
        caption: "Handmade lanterns crafted by the children",
        captionMr: "मुलांनी स्वतःच्या हातांनी तयार केलेले आकाशकंदील",
        fit: "contain",
      },
    ],
    description: [
      "🪔 सहयोग समर्पण सेवा फाउंडेशनतर्फे यंदाची दिवाळी बालघर प्रकल्पातील मुलांसोबत उत्साहात साजरी करण्यात आली. (2026 दिवाळी उपक्रम – पहिला)",
      "या उपक्रमात विद्यार्थ्यांनी स्वतःच्या हातांनी सुंदर आकाशकंदील तयार केले आणि पणत्यांची सजावट केली. त्यांच्या कलाकृती, चेहऱ्यावरील आनंद आणि उत्साहाने दिवाळीचा आनंद द्विगुणित झाला. यावेळी विद्यार्थ्यांना मिठाई आणि अत्यावश्यक सामानचे वाटपही करण्यात आले.",
      "यंदाची दिवाळी केवळ सण साजरा करण्यापुरती मर्यादित नव्हती, तर विद्यार्थ्यांसोबत आनंदाचे क्षण निर्माण करण्याची आणि त्यांच्या आनंदातून खरा आनंद अनुभवण्याची होती. ❤️",
      "कारण, दुसऱ्यांच्या चेहऱ्यावर हसू फुलवण्यातच खरा आनंद दडलेला असतो!",
    ],
  },
  {
    id: "dussehra-balghar-2026",
    status: "done",
    title: "Dussehra colours and sweets at Balghar Prakalp",
    titleMr: "दसऱ्याच्या रंगात उमलला बालघराचा आनंद",
    date: "2026-10-20",
    dateLabel: "20 October 2026",
    location: "Balghar Prakalp, Tapovan Road, Ahilyanagar",
    photo: "/images/our-work/dussehra-balghar-2026.jpg",
    photoPosition: "center",
    album: {
      title: "Dussehra at Balghar Prakalp",
      titleMr: "दसऱ्याच्या रंगात उमलला बालघराचा आनंद",
    },
    photos: [
      {
        id: "dussehra-balghar-group",
        src: "/images/our-work/dussehra-balghar-2026.jpg",
        alt: "Children and volunteers of Balghar Prakalp together for Dussehra",
        caption: "Dussehra with the children of Balghar Prakalp",
        captionMr: "बालघर प्रकल्पातील विद्यार्थ्यांसोबत दसरा",
        fit: "contain",
      },
    ],
    description: [
      "दसऱ्याच्या शुभमुहूर्तावर सहयोग समर्पण सेवा फाउंडेशनतर्फे बालघर प्रकल्पातील विद्यार्थ्यांना प्रोत्साहन देत, पत्रे रंगवण्यासाठी रंग व इतर आवश्यक साहित्य भेट देण्यात आले.",
      "परिसर सजवण्यासाठी फुलांच्या माळा बांधण्यात मदत केली आणि सर्वांना मिठाई वाटून सणाचा आनंद द्विगुणित केला.",
      "छोट्याशा कृतीतून सहकार्याची भावना जपत, आनंद आणि सकारात्मकतेचा संदेश देण्याचा हा एक छोटासा प्रयत्न.",
    ],
  },
  {
    id: "ganpati-workshop-balghar-2026",
    status: "done",
    title: "Thirty-one Ganpatis, symbols of the children's joy",
    titleMr: "३१ बाप्पा — छोट्या कलाकारांच्या आनंदाचे प्रतीक",
    date: "2026-09-09",
    dateLabel: "9 September 2026",
    location: "Balghar Prakalp, Tapovan Road, Ahilyanagar",
    photo: "/images/our-work/ganpati-workshop-balghar-2026.jpg",
    photoPosition: "center",
    hero: {
      src: "/images/hero/balghar-ganpati-hero.jpg",
      position: "center 75%",
    },
    photos: [
      {
        id: "ganpati-workshop-idol",
        src: "/images/gallery/ganpati-workshop-idol.jpg",
        alt: "Shadu-clay Ganpati idol made during the Balghar Prakalp workshop",
        caption: "A shadu-clay Ganpati shaped by a young participant",
        captionMr: "सहभागी मुलाने साकारलेली शाडू मातीची गणपती मूर्ती",
        fit: "contain",
      },
      {
        id: "ganpati-workshop-children",
        src: "/images/gallery/ganpati-workshop-children.jpg",
        alt: "Children of Balghar Prakalp with the Ganpati idols they made",
        caption: "Children of Balghar Prakalp with their Ganpati idols",
        captionMr: "बालघर प्रकल्पातील मुले त्यांच्या गणपती मूर्तींसोबत",
        fit: "contain",
      },
      {
        id: "ganpati-workshop-guidance",
        src: "/images/gallery/ganpati-workshop-guidance.jpg",
        alt: "Committee members guiding children as they make Ganpati idols",
        caption: "Committee members guiding the children",
        captionMr: "समिती सदस्य मुलांना मार्गदर्शन करताना",
        fit: "contain",
      },
      {
        id: "ganpati-workshop-idols",
        src: "/images/gallery/ganpati-workshop-idols.jpg",
        alt: "Thirty-one shadu-clay Ganpati idols made at the workshop",
        caption: "Thirty-one Ganpati idols from the workshop",
        captionMr: "कार्यशाळेत साकारलेले ३१ बाप्पा",
        fit: "contain",
      },
    ],
    description: [
      "सहयोग समर्पण सेवा फाउंडेशनतर्फे बालघर प्रकल्प, तापोवन रोड, अहिल्यानगर येथे गणपती मूर्ती बनवण्याची कार्यशाळा उत्साहात संपन्न झाली.",
      "कार्यशाळेचे मार्गदर्शन श्री. अशोक डोळसे सर, अहिल्यानगरमधील उत्कृष्ट व असामान्य कलाकार, यांनी केले.",
      "३१ मुलांनी सहभाग घेतला आणि प्रत्येक मुलाने स्वतःच्या हाताने शाडू मातीची एक गणपती मूर्ती साकारली. मातीला आकार देताना त्यांच्या चेहऱ्यावरचा आनंद, उत्साह आणि आत्मविश्वास पाहणे हा खरा समाधानाचा क्षण होता.",
      "आमच्या स्वयंसेवकांनीही मुलांसोबत प्रत्यक्ष मूर्ती बनवत त्यांना प्रोत्साहन दिले. या उपक्रमातून मुलांना कला, सर्जनशीलता, संयम आणि आत्मविश्वास यांचा सुंदर अनुभव मिळाला.",
      "सर्व सहभागी मुलांना भेटवस्तू देण्यात आल्या, तर उत्कृष्ट कलाकृतींसाठी छोट्या कलाकारांचा पारितोषिक देऊन गौरव करण्यात आला. कार्यक्रमानंतर अल्पोपहाराचीही व्यवस्था करण्यात आली.",
      "मुलांच्या सर्वांगीण विकासासाठी क्रिकेट बॅट-बॉल, बॅडमिंटन रॅकेट आणि फुटबॉल असे क्रीडा साहित्य देण्यात आले, तसेच त्यांच्या सायकलींच्या दुरुस्तीसाठीही मदत करण्यात आली.",
      "३१ बाप्पा म्हणजे केवळ मातीच्या मूर्ती नव्हेत; त्या ३१ छोट्या कलाकारांच्या कल्पनाशक्ती, मेहनत आणि आनंदाचे प्रतीक आहेत! मुलांच्या चेहऱ्यावरचे हास्य आणि डोळ्यांतील चमक हीच आमच्या उपक्रमाची खरी कमाई!",
    ],
  },
  {
    id: "art-workshop-mukbadhir-2026",
    status: "done",
    title: "Art Workshop at Mukbadhir Vidyalaya",
    titleMr: "कलेच्या रंगांत उमलली अनोखी स्वप्ने!",
    date: "2026-08-01",
    dateLabel: "1 August 2026",
    location: "Mukbadhir Vidyalaya, Tapovan Road, Savedi, Ahilyanagar",
    photo: "/images/our-work/art-workshop-mukbadhir-2026.png",
    photoPosition: "center",
    album: {
      title: "Art Workshop at Mukbadhir Vidyalaya",
      titleMr: "चित्रकला कार्यशाळा — मूकबधिर विद्यालय",
    },
    photos: [
      {
        id: "art-workshop-prize-presentation",
        src: "/images/gallery/art-workshop-prize-presentation.png",
        alt: "Prize presentation during the art workshop at Mukbadhir Vidyalaya",
        caption: "Encouraging young artists at the art workshop",
        captionMr: "चित्रकला उपक्रमातील बालकलाकारांना प्रोत्साहन",
      },
      {
        id: "art-workshop-students",
        src: "/images/gallery/art-workshop-students.png",
        alt: "Students creating artwork during the painting competition",
        caption: "Students expressing their creativity through art",
        captionMr: "कलेतून सर्जनशीलता व्यक्त करताना विद्यार्थी",
      },
      {
        id: "art-workshop-team",
        src: "/images/gallery/art-workshop-team.png",
        alt: "Sahayog Samarpan team and teachers at Mukbadhir Vidyalaya",
        caption: "Sahayog Samarpan members with the school team",
        captionMr: "विद्यालयाच्या शिक्षकांसोबत सहयोग समर्पण परिवार",
      },
      {
        id: "art-materials-presentation",
        src: "/images/gallery/art-materials-presentation.png",
        alt: "Presentation of art materials at Mukbadhir Vidyalaya",
        caption: "Art materials arranged for the young participants",
        captionMr: "बालसहभागींसाठी चित्रकला साहित्य",
      },
      {
        id: "mukbadhir-vidyalaya",
        src: "/images/gallery/mukbadhir-vidyalaya.png",
        alt: "Group photo at Mukbadhir Vidyalaya, Savedi, Ahilyanagar",
        caption: "Visit to Mukbadhir Vidyalaya, Savedi, Ahilyanagar",
        captionMr: "मूकबधिर विद्यालय, सावेडी, अहिल्यानगर येथील भेट",
      },
    ],
    description: [
      "२०१६ मध्ये 'मकर संक्रांती'च्या पहिल्या उपक्रमाने याच मूकबधिर विद्यालयातून सुरू झालेला आमचा सामाजिक प्रवास, १० वर्षांची अखंड सेवा आणि फाउंडेशनची अधिकृत नोंदणी पूर्ण करून, आज ११ व्या वर्षात पुनश्च याच ठिकाणी अत्यंत आत्मीयतेने परतला! सहयोग समर्पण सेवा फाउंडेशन तर्फे सावेडी येथील मूकबधिर विद्यालयात आयोजित चित्रकला स्पर्धा अत्यंत उत्साहात पार पडली. हा उपक्रम म्हणजे केवळ एक कार्यक्रम नसून माणुसकी, संवेदनशीलता आणि प्रेरणेचा एक भावुक प्रवास ठरला.",
      "ऐकता किंवा बोलता येत नसले तरी, या बालकलाकारांच्या चित्रांनी त्यांच्या अमर्याद भावना, स्वप्ने आणि अफाट प्रतिभा अतिशय सुंदरपणे रेखाटली. आज आम्ही त्यांना प्रोत्साहन देण्यास गेलो होतो, मात्र त्यांच्या जिद्द आणि सकारात्मकतेने आम्हांलाच जगण्याचा खरा धडा दिला. 'सेवा म्हणजे केवळ मदत नव्हे, तर समाजाशी मनापासून जोडले जाणे' याची प्रचिती पुन्हा एकदा आली.",
      "या स्नेहाच्या उपक्रमास पाठबळ देणारे विद्यालयाचे सर्व शिक्षक, विद्यार्थी आणि फाउंडेशनच्या प्रत्येक सदस्याचे मनःपूर्वक आभार! शब्द नसले तरी रंग बोलतात... आणि आज त्या रंगांनी आमच्या मनावर कायमचा ठसा उमटवला! 💫",
    ],
  },
  {
    id: "maharashtra-day-2026",
    status: "done",
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
    status: "done",
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
    status: "done",
    title: "Diwali Celebration 2024 at Matoshri Vriddhashram",
    titleMr: "दिवाळी उपक्रम 2024 – पहिला",
    date: "2024-10-31",
    dateLabel: "31 October 2024",
    location: "Matoshri Vriddhashram, Viladghat, Ahilyanagar",
    photo: "/images/our-work/diwali-2024-matoshri.jpg",
    photoPosition: "center",
    description: [
      "सहायोग समर्पण ग्रुप गेल्या ९ वर्षांपासून दिवाळीच्या निमित्ताने दुसऱ्यांच्या चेहऱ्यावर आनंद आणणारे उपक्रम राबवत आहे.",
      "या वर्षी मातोश्री वृद्धाश्रम (विळदघाट, अहिल्यानगर) येथे भेट देऊन वृद्ध आजी-आजोबांसोबत दिवाळी साजरी केली. त्यांना किराणा, फळे आणि इतर आवश्यक वस्तू देत त्यांच्या जीवनात थोडासा गोडवा आणण्याचा प्रयत्न केला.",
      "वृद्ध आजी-आजोबांच्या भेटीने आणि त्यांच्या अनुभवांचे विचार ऐकून सर्व सदस्यांना खूप समाधान आणि आनंद वाटले.",
    ],
  },
  {
    id: "diwali-2023-matoshri",
    status: "done",
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
  {
    id: "ustod-kamgar-seva",
    status: "upcoming",
    title: "Support for Sugarcane Harvest Workers (Ustod Kamgar)",
    titleMr: "ऊसतोड कामगारांसाठी सेवा उपक्रम",
    dateLabel: "Coming soon",
    summary:
      "A seva initiative for sugarcane harvest workers and their families, who leave home every season to work in the fields and live in temporary settlements. The foundation plans to reach out to these families with essential supplies and care, and to spend time with their children. Date and venue will be announced soon.",
    summaryMr:
      "ऊसतोडीच्या हंगामात आपले घर सोडून शेतांमध्ये राबणाऱ्या आणि तात्पुरत्या वस्तीत राहणाऱ्या ऊसतोड कामगारांच्या कुटुंबांसाठी सहयोग समर्पण सेवा फाउंडेशनतर्फे हा उपक्रम राबवला जात आहे. या कुटुंबांना आवश्यक वस्तूंची मदत देऊन, त्यांच्या मुलांसोबत वेळ घालवून आणि त्यांच्या कष्टाबद्दल कृतज्ञता व्यक्त करून त्यांच्या आयुष्यात थोडा आनंद आणण्याचा आमचा प्रयत्न आहे. उपक्रमाची तारीख व ठिकाण लवकरच कळवले जाईल. 🙏",
    description: [],
  },
  {
    id: "rainwater-harvesting-awareness",
    status: "upcoming",
    title: "Rainwater Harvesting Awareness",
    titleMr: "जलसंधारण जनजागृती",
    dateLabel: "Coming soon",
    summary:
      "An awareness initiative to educate citizens about the importance of saving water through rainwater harvesting. The program will highlight simple, practical methods to collect and conserve rainwater at homes and in the community. Together, we can recharge groundwater and build a more sustainable future for Ahilyanagar.",
    summaryMr:
      "पावसाचे पाणी जतन करून जलसंधारण करण्याच्या महत्त्वाबद्दल जनजागृती करण्यासाठी हा उपक्रम राबवला जात आहे. घरगुती व सामुदायिक पातळीवर पाणी साठवण्याच्या सोप्या व प्रभावी पद्धतींबद्दल माहिती दिली जाईल. यामुळे भूजल पुनर्भरण आणि शाश्वत भविष्य घडवण्यास मदत होईल.",
    description: [],
  },
];

const byDateDesc = (a: SiteEvent, b: SiteEvent) =>
  new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime();

/** Events that have a story: done and ongoing, newest first. Each has its own page. */
export const workEvents: SiteEvent[] = events
  .filter((event) => event.status !== "upcoming")
  .sort(byDateDesc);

/** The event happening now, if any. */
export const ongoingEvent: SiteEvent | undefined = workEvents.find(
  (event) => event.status === "ongoing",
);

/** Planned events, in the order written above. */
export const upcomingEvents: SiteEvent[] = events.filter((event) => event.status === "upcoming");
