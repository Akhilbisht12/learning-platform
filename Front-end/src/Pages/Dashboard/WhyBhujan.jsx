import React from "react";
import { useState } from "react";

const WhyBhujan = () => {
  const [lang, setLang] = useState(0);
  const data = [
    {
      title: "Who are Bahujanas?",
      desc: `Gauthama Buddha expounded that the Bahujan, i.e., the majority of the people in a society must be happy. Respectable Kanshiram said that most of the people, that is almost eighty five percent.

      Those over whom there is high handedness of feudal lords; those who have been pushed away from exercising power by the very few families of the ruling class; 
      
      those who are being treated as slaves in each and every village across the country even today, in the name of caste and religion; those who are being labelled as minorities and shown open disgust, 
      
      an action that is significantly against the spirit of the Constitution; these are the Bahujans people. Their sorrows are the nation's sorrow; their progress is the nation's progress; their contributions are the nation's pride. 
      
      The Bahujan people comprise almost 85% of the population and include all marginalised sections of society, such as ST, SC, BC, other sub-castes and religious minorities. In unification, they are capable of single handedly ruling the nation. 
      
      They have been foundational to the evolution of the Indian nation.
      `,
    },
    {
      title: "బహుజనులు అంటే ఎవరు!?",
      desc: `
      గుప్పెడు మంది పెత్తందారుల, జమీందారుల కబంద హస్తాల కింద, పిడికెడు మంది పాలకవర్గ కుటుంబాల వల్ల అధికారానికి దూరం చేయబడి, కులం పేరునో, మతం పేరునో ఈనాటికి గ్రామ గ్రామాన బానిసలుగా చిన్న చూపు చూడబడుతూ, విసిరి వెదజల్లబడిన సబ్బండ కులాల ప్రజానీకం, భారత రాజ్యాంగ స్ఫూర్తికి వ్యతిరేకంగా మతం పేరున మైనారీటీలంటూ ఈసడింపులకు గురి చేయబడుతున్నవారు. బహుజనుల బాధలే ఈ భారత దేశ బాధలు, బహుజనుల పురోగతే, ఈ దేశ పురోగతి. వీరు చేసే ఉత్పత్తే ఈ దేశ నికర విలువలు. బహుజనులు అంటే భారతదేశాన అత్యధికంగా 85% జనాభా కలిగిన వెనుకబడిన తరగతులవారు బీసీలు, షెడ్యుల్డ్ కులాలు, తెగల వారు, మతపరమైన అల్పసంఖ్యాకులు, అందరూ కలిస్తే ఈ దేశాన్ని ఏలే సామర్థ్యము ఉన్న వారు, మూలవాసులు, ఈ దేశానికి ఆదివాసులు ఈ దేశ నిర్మాణంలో భాగమైన పని మంతులు.`,
    },
    {
      title: "बहुजन कौन हैं?",
      desc: `जिन पर सामंतों का दबदबा है; जिन्हें शासक वर्ग के बहुत कम परिवारों ने सत्ता के प्रयोग से दूर धकेल दिया है; जिन्हें आज भी देश के हर गांव में जाति और धर्म के नाम पर गुलाम माना जा रहा है। जिन पर अल्पसंख्यक का ठप्पा लगाया जा रहा है और खुली घृणा दिखाई जा रही है, यह एक ऐसी कार्रवाई है जो संविधान की भावना के खिलाफ है; ये हैं बहुजन लोग। उनके दुख देश के दुख हैं; उनकी प्रगति देश की प्रगति है; उनका योगदान देश का गौरव है। बहुजन लोगों में 85% आबादी शामिल है और इसमें समाज के सभी हाशिए पर रहने वाले वर्ग, जैसे एसटी, एससी, बीसी, अन्य उप-जातियां और धार्मिक अल्पसंख्यक शामिल हैं। एकीकरण में, वे अकेले ही राष्ट्र पर शासन करने में सक्षम हैं। वे भारतीय राष्ट्र के विकास के लिए आधारशिला रहे हैं।`,
    },
  ];
  return (
    <div className="d-flex flex-column align-items-center my-3">
      <h4>{data[lang].title}</h4>
      <div className="d-flex">
        <div
          onClick={() => setLang(0)}
          className="badge bgsite text-white mx-2"
        >
          English
        </div>
        <div
          onClick={() => setLang(2)}
          className="badge bgsite text-white mx-2"
        >
          हिन्दी
        </div>
        <div
          onClick={() => setLang(1)}
          className="badge bgsite text-white mx-2"
        >
          తెలుగు
        </div>
      </div>
      <div className="text-wrap text-center p-4">{data[lang].desc}</div>
    </div>
  );
};

export default WhyBhujan;
