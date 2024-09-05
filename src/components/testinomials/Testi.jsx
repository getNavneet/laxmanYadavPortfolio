import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card bg-white p-6 rounded-lg shadow-md text-center">
      {/* <div className="avatar mb-4">
        <img 
          src={testimonial.photo} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full mx-auto object-cover" 
        />
      </div> */}
      <p className="text-gray-700 italic mb-4">"{testimonial.message}"</p>
      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
      <p className="text-sm text-gray-500">{testimonial.role}</p>
    </div>
  );
};

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials-container py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Peoples View On "प्रोफेसर की डेयरी"</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

// Example usage of Testimonials component
const Testo = () => {
  const testimonialsData = [
    {
      name: "Amet vickram",
      role: "23 August 2024",
      message: "Such type of book comes once in a life..tells the reality of the academic institution..just superb and I have no words how to describe this book..i can just say go for it..👌👌👌👌",
      photo: "link_to_photo.jpg"
    },
    {
      name: "Amet vickram",
      role: "23 August 2024",
      message: `यह किताब डायरी, नोट्स और टिप्पणियों की शैली में अपने समय की तफ्तीश करती है। इसमें समाज और राजनीति की बड़ी परिघटनाएं हैं तो इसके बीच बनते हुए एक प्रबुद्ध नौजवान की कहानी भी है। यह आज़मगढ़ के पिछड़े किसान परिवार में पैदा होता है। इलाहाबाद और दिल्ली विश्वविद्यालय से पढ़ायी करता है। दशक भर से ज़्यादा दिल्ली के एक कॉलेज में अध्यापन करता है। उसके कंधों पर गरीब परिवार की अपेक्षाओं और अपने सपनों का वज़न है। वह अकेला है। वह असमंजस, असुरक्षा और अनिश्चितता से घिरा हुआ है। वह डरा हुआ है। मगर वह किताबों को नौकरी पाने का जरिया नहीं बनाता, उनसे अपने समाज को समझने का नज़रिया हासिल करता है। सत्ताएँ उसे डराती हैं तो वह डरने की बजाय दुस्साहसी होता जाता है। धीरे-धीरे उसकी समझ, दायित्वबोध और लोकप्रियता का दायरा बढ़ता जाता है। वह क्लास के छात्रों से सुदूर ग्रामीण लोगों तक का प्रोफ़ेसर बन जाता है। यह फिक्शनल है, क्योंकि इसमें संज्ञाएँ बदल दी गयी हैं. यह नॉनफ़िक्शन है, क्योंकि शैक्षणिक संस्थानों की स्थिति, सामाजिक-राजनीतिक परिस्थितियाँ रत्ती-रत्ती सही हैं। इसमें इसमें कथा, संवाद और सटायर है तो वक्तृता और विश्लेषण की चमक भी। इसमें वह सब है, जो एक पठनीय किताब में होना चाहिए `
,
      photo: "link_to_photo.jpg"
    },
    {
      name: "ankush Yadav",
      role: "",
      message: `अग्रज @drlaxman_yadav बधाई के पात्र हैं !

दो बैठकों में #प्रोफेसर_की_डायरी पढ़कर मानो डीयू के एक एडहॉक प्रोफेसर की जिंदगी जी गया हूं ...

रोहित वेमुला जैसे विचारों से मुलाकात कराने वाली ये डायरी जहाँ एक ओर उच्च शिक्षा में पिछड़ों दलित आदिवासी शोषित वांछित समाज से आये पहली पीढ़ी के युवाओं के सामने आने वाली समस्याओं से रूबरू कराती है.. वहीं दूसरी ओर उच्च शिक्षण संस्थानों में शिक्षण और प्रशासन की पहेलियों को सुलझाते हुए कमियों को आइना दिखती है.....✍️

आप सभी को मेरी तरफ से ये किताब मोस्ट रिकोमेंडिड है समय मिले तो अवश्य पीढ़ियेगा ।`,
      photo: "link_to_photo.jpg"
    },
    {
      name: "Hindustan books",
      role: "23 August 2024",
      message:`नमस्ते बनारस,

अनबाउंड स्क्रिप्ट प्रकाशन से प्रकाशित पुस्तक "प्रोफेसर की डायरी" अब आपके शहर बनारस में मात्र 60 मिनट के भीतर डिलवरी के लिए @hindisthan_books पर उपलब्ध हैं।

साथ ही देश के किसी भी हिस्से में डिलवरी फ्री है और सभी पुस्तकें एक साथ मंगवाने पर विशेष छूट भी है। 

पुस्तकें ऑर्डर करने के लिए बायो में दिए लिंक पर जाएँ। यहाँ इंस्टग्राम पेज पर भी इनबॉक्स में मैसेज कर सकते हैं। सीधे व्हाट्सप्प करना चाह रहे हैं तो 9462082934 पर मैसेज भेजें।

@hindisthan_books की शुरुआत 2023 में इस उद्देश्य से हुई कि हम पाठकों को बेहतर किताबें पढ़ने के लिए न केवल प्रोत्साहित करें बल्कि उनकी रूचि के अनुसार अच्छी किताबें चुनने में भी सहयोग करें। @hindisthan_books पर उपलब्ध सभी किताबें अपने समय की श्रेष्ठ अथवा लोकप्रिय किताब रही हैं साथ ही रोज प्रकाशित हो रही किताबों में से भी बेहतरीन किताब का चुनाव पाठकों के लिए हमारी टीम करती है। 

इसके इतर हम प्रयोग कर रहे हैं कि अन्य वस्तुओं की तरह किताबें भी ऑर्डर करने के 60 मिनट के भीतर आप तक पहुँच सके। बनारस में यह प्रयोग सफल रहा है और वहाँ इस समय यह सुविधा उपलब्ध है।

धन्यवाद।`,
      photo: "link_to_photo.jpg"
    },
    {
      name: "Aarushi",
      role: "23 August 2024",
      message: `लक्ष्मण यादव की यह किताब अकादमिक दायरों की भीतरी सच्चाई की बयानगी के कारण चर्चा में है। किंतु, इस किताब की एक विशेष चर्चा इसलिए भी होनी चाहिए क्योंकि इसमें एक शानदार गद्य की सारी ख़ूबसूरतियाँ मौजूद हैं। यह किताब नौकरी से निकाल दिए गए किसी एड-हॉक शिक्षक के आत्मालाप की तरह नहीं पढ़ी जानी चाहिए, बल्कि इसलिए पढ़ी जानी चाहिए, ताकि विश्वविद्यालयों की उपयोगिता और अहमियत बनाई-बचाई रखी जा सके। धन-पशुओं की गिरफ़्त में चली जा रही दुनिया में शिक्षा को इनसे बचाया जाना बेहद ज़रूरी है। इस किताब की बेचैनी उम्मीद जगाती है। एक शानदार उदाहरण देखिए- "ये दुनिया चिथड़ा होती जा रही है। तुरपाई करके ही हम इसे बचा सकते हैं। अकादमिक दुनिया उघड़ते जा रहे हमारे ख़्वाबों को दर्ज़ी की मानिंद तुरपाई करना सिखाती है। कलम सभ्यता के सृजन की सुई है।"

यह किताब बार-बार पढ़िए। जब पीढ़ियाँ जवाब माँगेंगी, तो याद आएगा-

जिनकी रीढ़ तनी होती है
उनकी बाधाएँ घनी होती हैं।`,
      photo: "link_to_photo.jpg"
    },
   
   
    {
      name: "Mukesh Kumar Yadav",
      role: "27 August 2024",
      message: `I will recommend all Yadavs community must read this book to know the reality of our educational society and their corrupted so learned educationist.`,

    
      photo: "link_to_photo2.jpg"
    },
    {
      name: "dinbandhu Ram Mandavi",
      role: "13 July 2024",
      message: `Everybody can under stood the everyday incidents occurs in Indian institution by this book. These are the facts.`,
      photo: "link_to_photo3.jpg"
    }
  ];

  return (
    <div className="flex justify-center mt-10">
      <Testimonials testimonials={testimonialsData} />
    </div>
  );

};

export default Testo;
