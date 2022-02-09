import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBhim from "../../assets/Images/bhim.png";
import ob1 from "../../assets/Images/ob1.png";
import ob2 from "../../assets/Images/ob2.png";
import ob6 from "../../assets/Images/ob6.png";
import ob5 from "../../assets/Images/ob5.png";

const OnBoarding = () => {
  const [lang, setLang] = useState(0);
  const [step, setStep] = useState(1);
  const content = [
    [
      {
        text: "Dr Bhimrao Ramji Ambedkar, popularly known as Babasaheb, is a unique identity for constitutional morality.",
        image: ob1,
      },
      {
        text: "Ambedkar’s vision for India is to cast out economic challenges and socio-cultural oppressions of the marginalised communities and is never against any religion or community as a whole.",
        image: ob2,
      },
      {
        text: "He was a visionary who believed in achieving social justice through liberty, equality and fraternity. Even after several decades, his works and ideals are still relevant in modern India and undoubtedly a valuable tool in our nation building endeavour.",
        image: ob1,
      },
      {
        text: "Ambedkar’s vision for India is to cast out economic challenges and socio-cultural oppressions of the downtrodden and the marginalised communities but not against any religion or community as a whole.",
        image: ob2,
      },
      {
        text: "To make Babasaheb’s dream of social justice a reality and to eradicate all forms of discrimination from our society, as responsible citizens of this country, let’s embark on the historic journey of this decade ‘BHIM BATA’",
        image: ob5,
      },
      {
        text: "'Our lives begin to end the day we become silent about things that matter.' - Martin Luther King Jr. Inspired by these words of a great leader, let us all break our silence and give voice to the stories that would never see the light of the world",
        image: ob6,
      },
      {
        text: "As we travel forward in this BHIM BATA, we will be recording stories of atrocities against women and exploitation of SCs, STs, BCs, religious minorities and other economically weaker sections across Telangana. These recordings will be submitted  to Dr. R.S. Praveen Kumar, the torchbearer of BHIM-BATA, for necessary resolution, whose missionary work entails and leads us in this passage for self-reliance & prosperity in Telangana.",
        image: logoBhim,
      },
      {
        text: "Let us give ourselves ONE CHANCE to redefine the purpose of the society we want to see! YOUR SUPPORT is OUR IMPACT! Come, together we shall start our journey along BHIM-BATA and together we shall witness the change!",
        image: ob5,
      },
    ],
    [
      {
        text: "డా. భీం రావ్‌ రామ్‌జీ అంబేద్కర్‌ గారిని ప్రజలు ఎక్కువగా ‘‘బాబాసాహెబ్‌’’ అని పిలుస్తుంటారు. ప్రపంచంలోనే అతి పెద్ద రాజ్యాంగమయిన ‘‘భారత దేశ రాజ్యాంగ నిర్మాతగా  వీరు ప్రపంచానికి సుపరిచితులు.",
        image: ob1,
      },
      {
        text: "సమాజంలో  ఉన్న అంటరానితనం మరియు కుల వివక్షలను నిర్మూలించడం ద్వారానే  సామాజిక-ఆర్థిక అభివృద్ధి సాధ్యమవుతుందనే  సిద్థాంతాన్ని బాబాసాహెబ్‌ అంబేద్కర్‌ బలంగా నమ్మారు.",
        image: ob2,
      },
      {
        text: " డాక్టర్‌ బాబాసాహెబ్‌ అంబేద్కర్‌ గారి భావజాలాన్ని కేవలం దళితులకే పరిమితం చేయడం సరికాదు. ",
        image: ob1,
      },
      {
        text: "భారతదేశంలో అణగారిన, అట్టడుగు వర్గాల ఆర్థిక సవాళ్లను మరియు సామాజిక-సాంస్కఅతిక అణచివేతలను తరిమికొట్టాలనేదే  అంబేద్కర్‌ గారి ఆలోచన. అంతే కానీ వారు ఏ మతానికి లేదా వర్గానికీ  వ్యతిరేకంగా  కాదు.",
        image: ob2,
      },
      {
        text: "సమాజంలో ఉన్న వివిధ రకాల వివక్షలకు వ్యతిరేకంగా గళం విప్పి, సామాజిక-ఆర్థిక శ్రేయస్సు హక్కులను సాధించుకోవడమే  ‘BHIM-BATA’ లక్ష్యం.   ‘‘మీరు - మేము’’ మనందరం  కలిసి  ‘BHIM-BATA’ వేదికగా  ఈ దశాబ్దపు చారిత్రాత్మక ప్రయాణాన్ని ప్రారంభించడానికి అడుగులేద్దాం రండి.",
        image: ob5,
      },
      {
        text: "మా BHIM-BATA ఉద్యమ ప్రస్థానంలో  తెలంగాణ వ్యాప్తంగా మహిళలపై అఘాయిత్యాలు, అత్యాచారాలు మరియు ఎస్సీ, ఎస్టీ, బీసీలు, మత మైనారిటీలు మరియు ఇతర ఆర్థికంగా బలహీన వర్గాల భూములను దోచుకోవడం, వనరులను దోపిడీ చేస్తున్న కథనాలను కోకొల్లలుగా మా దృష్టికి వస్తున్నాయి.",
        image: ob6,
      },
      {
        text: "ఈ సమస్యలన్నింటినీ మా BHIM-BATA వాలంటీర్లు నమోదు చేసుకొని, బహుజన వర్గాల ఆశాజ్యోతి, BHIM-BATA మార్గదర్శకులు, లక్షలాది మంది విద్యార్థుల జీవితాల్లో వెలుగులు నింపిన, తెలంగాణ ప్రజల ఆశాకిరణం అయిన డా. ఆర్‌.ఎస్‌. ప్రవీణ్‌ కుమార్‌ గారికి  నివేదిస్తాము.",
        image: logoBhim,
      },
      {
        text: "మనం కోరుకున్న సమాజాన్ని పునర్నించుకోవడానికి మనకు మనం ఒక అవకాశం ఇచ్చుకుందాం! మీ మద్దతు -  మాకు వెయ్యేనుగుల బలం! రండి, మనమందరం కలిసి ‘‘భీమ్‌-బాటా’’తో కలిసి పనిచేసి, అద్భుతమయిన జ్ఞాన సమాజ నిర్మాణానికి సాక్షులమవుదాం !!",
        image: ob5,
      },
    ],
    [
      {
        text: "बाबासाहेब के नाम से मशहूर डॉ भीमराव रामजी अंबेडकर संवैधानिक नैतिकता की एक अनूठी पहचान हैं।",
        image: ob1,
      },
      {
        text: "भारत के लिए अम्बेडकर का दृष्टिकोण हाशिए के समुदायों की आर्थिक चुनौतियों और सामाजिक-सांस्कृतिक उत्पीड़न को दूर करना है और कभी भी किसी भी धर्म या समुदाय के खिलाफ नहीं है।",
        image: ob2,
      },
      {
        text: "वह एक दूरदर्शी व्यक्ति थे जो स्वतंत्रता, समानता और बंधुत्व के माध्यम से सामाजिक न्याय प्राप्त करने में विश्वास करते थे। कई दशकों के बाद भी, उनके कार्य और आदर्श आधुनिक भारत में आज भी प्रासंगिक हैं और निस्संदेह हमारे राष्ट्र निर्माण के प्रयास में एक मूल्यवान उपकरण हैं।",
        image: ob1,
      },
      {
        text: "भारत के लिए अम्बेडकर की दृष्टि दलित और हाशिए के समुदायों की आर्थिक चुनौतियों और सामाजिक-सांस्कृतिक उत्पीड़न को खत्म करना है, लेकिन किसी भी धर्म या समुदाय के खिलाफ नहीं है।",
        image: ob2,
      },
      {
        text: "बाबासाहेब के सामाजिक न्याय के सपने को साकार करने के लिए और हमारे समाज से सभी प्रकार के भेदभाव को मिटाने के लिए, इस देश के जिम्मेदार नागरिक के रूप में, आइए इस दशक की ऐतिहासिक यात्रा 'भीम बाटा' की शुरुआत करें।",
        image: ob5,
      },
      {
        text: "'हमारा जीवन उस दिन समाप्त होना शुरू हो जाता है जिस दिन हम महत्वपूर्ण चीजों के बारे में चुप हो जाते हैं।' - मार्टिन लूथर किंग जूनियर, एक महान नेता के इन शब्दों से प्रेरित होकर, आइए हम सब अपनी चुप्पी तोड़ें और उन कहानियों को आवाज दें जो कभी दुनिया की रोशनी नहीं देख पाएंगी।",
        image: ob6,
      },
      {
        text: "जैसे ही हम इस भीम बाटा में आगे बढ़ते हैं, हम तेलंगाना में महिलाओं के खिलाफ अत्याचार और एससी, एसटी, बीसी, धार्मिक अल्पसंख्यकों और अन्य आर्थिक रूप से कमजोर वर्गों के शोषण की कहानियां रिकॉर्ड करेंगे। ये रिकॉर्डिंग डॉ. आर.एस. आवश्यक समाधान के लिए भीम-बाटा के पथ प्रदर्शक प्रवीण कुमार, जिनका मिशनरी कार्य तेलंगाना में आत्मनिर्भरता और समृद्धि के लिए हमें इस मार्ग पर ले जाता है।",
        image: logoBhim,
      },
      {
        text: "आइए हम अपने आप को उस समाज के उद्देश्य को फिर से परिभाषित करने का एक मौका दें जिसे हम देखना चाहते हैं! आपका समर्थन हमारा प्रभाव है! आओ, हम एक साथ भीम-बाटा के साथ अपनी यात्रा शुरू करेंगे और साथ में हम बदलाव देखेंगे!",
        image: ob5,
      },
    ],
  ];
  const LanguageSelect = () => {
    return (
      <div className="bgsite min100vh d-flex flex-column align-items-center">
        <img className="w-25 my-4" src={logoBhim} />
        <h3 className="text-white text-center">
          Select Your <br />
          Language
        </h3>
        <div className="my-5 py-3 d-flex flex-column align-items-center">
          <h3
            onClick={() => setLang(0)}
            className={lang === 0 ? "my-3 sitebtn bg-white" : "text-white my-3"}
          >
            English
          </h3>
          <h3
            onClick={() => setLang(2)}
            className={lang === 2 ? "my-3 sitebtn bg-white" : "text-white my-3"}
          >
            हिन्दी
          </h3>
          <h3
            onClick={() => setLang(1)}
            className={lang === 1 ? "my-3 sitebtn bg-white" : "text-white my-3"}
          >
            తెలుగు
          </h3>
        </div>
        <div onClick={() => setStep(2)} className="sitebtn">
          Next
        </div>
      </div>
    );
  };
  const OnboardOne = () => {
    return (
      <div className="min100vh p-4 d-flex flex-column align-items-center justify-content-between">
        <img className="w-75" src={content[lang][0].image} />
        <div className="d-flex flex-column align-items-center">
          <h5 className="my-4" style={{ fontSize: "25px", fontWeight: "800" }}>
            Why BHIM BATA?
          </h5>
          <h5
            className="text-center"
            style={{ fontSize: "24px", letterSpacing: "2px" }}
          >
            {content[lang][0].text}
          </h5>
        </div>

        <div className="sitebtnInv" onClick={() => setStep(step + 1)}>
          Next
        </div>
      </div>
    );
  };
  const OnboardRest = () => {
    return (
      <div className="min100vh p-4 d-flex position-relative flex-column align-items-center justify-content-between">
        <h5
          className="text-center"
          style={{ fontSize: "24px", letterSpacing: "2px" }}
        >
          {content[lang][step - 2].text}
        </h5>
        <div className="sitebtnInv" onClick={() => setStep(step + 1)}>
          Next
        </div>
        <img
          src={content[lang][step - 2].image}
          className="w-100"
          style={{ position: "absolute", bottom: 0, zIndex: -10 }}
        />
      </div>
    );
  };

  const FinalScreen = () => {
    return (
      <div className="min100vh d-flex flex-column justify-content-center align-items-center">
        <img className="my-4" src={logoBhim} />
        <h3 className="my-4">Let's Begin the Journey</h3>
        <Link to="/signup" className="sitebtnInv">
          START
        </Link>
      </div>
    );
  };
  switch (step) {
    case 1:
      return <LanguageSelect />;
    case 2:
      return <OnboardOne />;
    case 10:
      return <FinalScreen />;
    default:
      return <OnboardRest />;
  }
};

export default OnBoarding;
