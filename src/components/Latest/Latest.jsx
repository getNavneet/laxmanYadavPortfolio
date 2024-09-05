import React,{useRef,useEffect} from "react";
import YouTubeVideoComponent from "../youtube/YtLatest";
import { useLocation } from "react-router-dom";
import BookGallery from "../book/InHand";
import coverEn from "../../assets/cover-en.webp";
import BookInfo from "../book/book";
import Testo from "../testinomials/Testi";
import YouTubeEmbed from "../youtube/Embed";
import h3 from "../../assets/readers/readers3.jpg"
import h4 from "../../assets/readers/readers4.jpg"
import h6 from "../../assets/readers/readers6.jpg"
import h7 from "../../assets/readers/readers7.jpg"
import h8 from "../../assets/readers/readers8.jpg"
import h9 from "../../assets/readers/readers9.jpg"
function Latest() {
    const reviewRef = useRef(null);
    const location = useLocation();
 const images=[
    h3,h4,h6,h7,h8,h9
 ];
    useEffect(() => {
        // Check if the location's hash matches "#reviews"
        if (location.hash === "#reviews") {
          // Scroll to the review section when the component renders
          const elementPosition = reviewRef.current.getBoundingClientRect().top + window.pageYOffset;
          
          // Scroll to 30px above the element to account for the sticky header
          window.scrollTo({
            top: elementPosition - 30,
            behavior: "smooth"
          });
        } else {
          // Scroll to top if navigating to Home without #reviews hash
          window.scrollTo(0, 0);
        }
      }, [location]);
      
  const book = {
    title: `"प्रोफेसर की डेयरी" is now available in English`,
    author: "Dr. Laxman Yadav",
    description:
      "This book, written in the style of a diary, notes, and observations, investigates the era in which it is set. It covers significant social and political events while also telling the story of a socially conscious young man emerging in the midst of these occurrences. He is born into a backward farming family, with the weight of his family's expectations and his own dreams resting on his shoulders. He does not treat books as mere tools to secure a job; instead, he uses them as a lens to understand society. He transforms from a professor for his students in class to a professor for the common people. The work is fictional because the names have been altered, yet it is nonfiction because the conditions of educational institutions and socio-political circumstances are entirely accurate. It contains narrative, dialogue, and satire, along with the brilliance of oratory and analysis. In short, it has everything that makes for a compelling read.",
    publishDate: "2024",
    genre: "fiction",
    coverImage: coverEn,
    purchaseLink: "https://amzn.in/d/fdMKGeM",
  };
  return (
    <div>
      <YouTubeVideoComponent/>
      <div className="bg-white">
        <BookInfo book={book} />
        <YouTubeEmbed
          bgColor="bg-cyan-700"
          videoId="C2VvBrhZ6XM"
          title="Watch Launch Video of English version"
          description={`Launching English version of bestseller प्रोफेसर की डेयरी 
`}
        />
      </div>
      <div className="">
        <YouTubeEmbed
          videoId="uhQ9jxV5n74"
          title="Some of the Top Speeches by Dr. Laxman"
          description={`सामाजिक न्याय पर आधारित वे बातें, जिन्हें समझना बहुत ज़रूरी है || Aligarh Speech || Dr. Laxman Yadav
`}
        />
        <YouTubeEmbed
          videoId="igK81GCUrGs"
          title=""
          description={`Dr. Ambedkar Jayanti Samaroh Speech || Diksha Bhumi, Nagpur, Maharashtra || Dr. Laxman Yadav

`}
        />
      </div>
      <BookGallery images={images} title={"Highlighting some texts from Profedssor ki Dairy"}/>
<div ref={reviewRef}>
    <Testo/>
</div>
    </div>
  );
}

export default Latest;
