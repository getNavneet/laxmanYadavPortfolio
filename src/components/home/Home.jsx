import React from "react";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "../hero/HeroCarousel";
import BookInfo from "../book/book";
import SocialLinks from "../social/Social";
import BookGallery from "../book/InHand";
import YouTubeVideoComponent from "../youtube/YtLatest";
import coverHindi from "../../assets/cover-hi.webp"
import coverEn from "../../assets/cover-en.webp"
import r1 from "../../assets/readers/readers1.jpg"
import r10 from "../../assets/readers/readers10.jpg"
import r11 from "../../assets/readers/readers11.jpg"
import r12 from "../../assets/readers/readers12.jpg"
import r13 from "../../assets/readers/readers13.jpg"
import r14 from "../../assets/readers/readers14.jpg"
import r15 from "../../assets/readers/readers15.jpg"
import h3 from "../../assets/readers/readers3.jpg"
import h4 from "../../assets/readers/readers4.jpg"
import h6 from "../../assets/readers/readers6.jpg"
import h7 from "../../assets/readers/readers7.jpg"
import h8 from "../../assets/readers/readers8.jpg"
import h9 from "../../assets/readers/readers9.jpg"
import SongSection from "../youtube/Song";

import MiniBio from "../intro/Mini";
import TestimonialCarousel from "../testinomials/TestiSlider";
import Headlines from "../testinomials/Inheadlines";
const Home = () => {
  const navigate = useNavigate();


  const goToAbout = () => {
    navigate("/about"); // Navigate to the "/about" page
  };
  const images =[
r10,r11,r12,r13,r14,r15
  ];
  const images2=[
    h4,h6,h9
 ];
  const book = {
    title: `BestSeller "प्रोफेसर की डेयरी" `,
    author: "Dr. Laxman Yadav",
    description: "यह किताब डायरी, नोट्स और टिप्पणियों की शैली में अपने समय की तफ्तीश करती है। इसमें समाज और राजनीति की बड़ी परिघटनाएं हैं तो इसके बीच बनते हुए एक प्रबुद्ध नौजवान की कहानी भी है। यह आज़मगढ़ के पिछड़े किसान परिवार में पैदा होता है। इलाहाबाद और दिल्ली विश्वविद्यालय से पढ़ायी करता है। दशक भर से ज़्यादा दिल्ली के एक कॉलेज में अध्यापन करता है। उसके कंधों पर गरीब परिवार की अपेक्षाओं और अपने सपनों का वज़न है। वह अकेला है। वह असमंजस, असुरक्षा और अनिश्चितता से घिरा हुआ है। वह डरा हुआ है। मगर वह किताबों को नौकरी पाने का जरिया नहीं बनाता, उनसे अपने समाज को समझने का नज़रिया हासिल करता है। सत्ताएँ उसे डराती हैं तो वह डरने की बजाय दुस्साहसी होता जाता है। धीरे-धीरे उसकी समझ, दायित्वबोध और लोकप्रियता का दायरा बढ़ता जाता है। वह क्लास के छात्रों से सुदूर ग्रामीण लोगों तक का प्रोफ़ेसर बन जाता है। यह फिक्शनल है, क्योंकि इसमें संज्ञाएँ बदल दी गयी हैं. यह नॉनफ़िक्शन है, क्योंकि शैक्षणिक संस्थानों की स्थिति, सामाजिक-राजनीतिक परिस्थितियाँ रत्ती-रत्ती सही हैं। इसमें इसमें कथा, संवाद और सटायर है तो वक्तृता और विश्लेषण की चमक भी। इसमें वह सब है, जो एक पठनीय किताब में होना चाहिए।",
    publishDate: "2024",
    genre: "fiction",
    coverImage: coverHindi,
    purchaseLink: "https://amzn.in/d/hBy24jo"
  };
  const book2 = {
    title: `"प्रोफेसर की डेयरी" is now available in English`,
    author: "Dr. Laxman Yadav",
    description: "This book, written in the style of a diary, notes, and observations, investigates the era in which it is set. It covers significant social and political events while also telling the story of a socially conscious young man emerging in the midst of these occurrences. He is born into a backward farming family, with the weight of his family's expectations and his own dreams resting on his shoulders. He does not treat books as mere tools to secure a job; instead, he uses them as a lens to understand society. He transforms from a professor for his students in class to a professor for the common people. The work is fictional because the names have been altered, yet it is nonfiction because the conditions of educational institutions and socio-political circumstances are entirely accurate. It contains narrative, dialogue, and satire, along with the brilliance of oratory and analysis. In short, it has everything that makes for a compelling read.",
    publishDate: "2024",
    genre: "fiction",
    coverImage: coverEn,
    purchaseLink: "https://amzn.in/d/fdMKGeM"
  };
  return (
    <>
      <HeroCarousel />
      <YouTubeVideoComponent/>
      {/* <TwitterFeed /> */}
      <MiniBio />
      <div className="flex justify-center flex-col">
      <BookInfo book={book2} />
      <div className='m-3 border-2 border-white'>
        <h2 className='text-2xl p-6 text-center'>Dr. Laxman is Actively present on major social media </h2>
        <div className='p-4'>
        <SocialLinks/>
        </div>
      </div>
      <BookGallery images={images2} title={`Highlighting texts from "प्रोफेसर की डेयरी"`}/>
      <BookInfo book={book} />
    </div>
      <TestimonialCarousel />
      <Headlines />
      <SongSection/>
      <div className="m-4 max-w-5xl mx-auto">
      <div className="w-full mx-auto bg-gray-100 p-4  rounded-lg shadow-inner ">
            <h2 className="text-lg font-semibold">Table of Contents</h2>
            <nav className="mt-2">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    onClick={goToAbout}
                    className="text-blue-600 hover:underline"
                  >
                    Who is Dr. Laxman Yadav?
                  </a>
                </li>
                <li>
                  <a
                    onClick={goToAbout}
                    className="text-blue-600 hover:underline"
                  >
                    Dr. Laxman Yadav Short Biography (Short Details)
                  </a>
                </li>
                <li>
                  <a
                    onClick={goToAbout}
                    className="text-blue-600 hover:underline"
                  >
                    Dr. Laxman Yadav Social Account
                  </a>
                </li>
                <li>
                  <a
                    onClick={goToAbout}
                    className="text-blue-600 hover:underline"
                  >
                    Dr. Laxman Yadav Biography
                  </a>
                </li>
                <li>
                  <a
                    onClick={goToAbout}
                    className="text-blue-600 hover:underline"
                  >
                    Dr. Laxman Yadav Education
                  </a>
                </li>
                <li>
                  <a
                    onClick={goToAbout}
                    className="text-blue-600 hover:underline"
                  >
                    Some Interesting Facts About Dr. Laxman Yadav
                  </a>
                </li>
                <li>
                  <a
                    onClick={goToAbout}
                    className="text-blue-600 hover:underline"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          </div>
      <BookGallery  images={images} title={"Readers with Laxman Yadav's Book"}/>
    </>
  );
};

export default Home;
