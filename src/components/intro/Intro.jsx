import React, { useRef } from "react";
import about1 from "../../assets/about.jpg";
const LaxmanYadavBiography = () => {
  const whoIs = useRef(null);
  const shortBio = useRef(null);
  const socialAcc = useRef(null);
  const bio = useRef(null);
  const edu = useRef(null);
  const facts = useRef(null);
  const faq = useRef(null);
  // Function to scroll to a specific section with offset
  const scrollToSection = (sectionRef) => {
    const offset = 40; // Offset for sticky header
    const elementPosition =
      sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg lg:p-8  overflow-x-hidden">
      <div className="lg:max-w-5xl  mx-auto">
        <header className="mb-3 p-4">
          <h1 className="text-3xl font-bold  text-gray-900">
            Dr. Laxman Yadav Biography
          </h1>
          <div className="mt-2 text-gray-500">
            {/* <span className="block">Updated on April 6, 2024</span> */}
            <span>Published on September 4, 2024 </span>
          </div>
        </header>

        <div className="mx-auto lg:p-8 p-5 prose">
          <p>
            An Expelled Ad-hoc Assistant Professor of University of Delhi.
            Passion for writing, reading and speaking on social, cultural and
            political issues. As punishment, my DU job was taken away. Its story
            has been recorded in the best seller book 'Professor's Diary'.
            Influenced by the ideology of Social Justice. A dreamer of a world
            of love based on equality and justice.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg shadow-inner m-6">
            <h2 className="text-lg font-semibold">Table of Contents</h2>
            <nav className="mt-2">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    onClick={() => scrollToSection(whoIs)}
                    className="text-blue-600 hover:underline"
                  >
                    Who is Dr. Laxman Yadav?
                  </a>
                </li>
                <li onClick={() => scrollToSection(shortBio)}>
                  <a className="text-blue-600 hover:underline">
                    Dr. Laxman Yadav Short Biography (Short Details)
                  </a>
                </li>
                <li onClick={() => scrollToSection(socialAcc)}>
                  <a className="text-blue-600 hover:underline">
                    Dr. Laxman Yadav Social Account
                  </a>
                </li>
                <li onClick={() => scrollToSection(bio)}>
                  <a className="text-blue-600 hover:underline">
                    Dr. Laxman Yadav Biography
                  </a>
                </li>
                <li onClick={() => scrollToSection(bio)}>
                  <a className="text-blue-600 hover:underline">
                    Dr. Laxman Yadav Education
                  </a>
                </li>
                <li onClick={() => scrollToSection(bio)}>
                  <a className="text-blue-600 hover:underline">
                    Some Interesting Facts About Dr. Laxman Yadav
                  </a>
                </li>
                <li onClick={() => scrollToSection(bio)}>
                  <a className="text-blue-600 hover:underline">FAQ</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 ref={whoIs} className="text-2xl font-semibold text-gray-800">
            Who is Dr. Laxman Yadav?
          </h2>
          <p>
            Dr. Laxman Yadav is a champion for those often overlooked in
            society, like the Dalits and tribal groups in India. He raises his
            voice against injustice and fights for their rights, especially when
            they face difficulties.
          </p>
          <p>
            Dr. Yadav is not only passionate about social equality but also
            actively works to protect and improve education. He believes that
            education is a powerful tool for change and works tirelessly to
            ensure that everyone has the opportunity to learn and grow. Inspired
            by the visions of renowned leaders like Ambedkar, Phule, and
            Periyar, he is dedicated to building an India where equality and
            fairness are realities for all, and education is accessible to
            everyone.
          </p>

          <figure className="my-6 flex justify-center content-center flex-col">
            <img
              className="rounded-lg shadow-md"
              src={about1}
              alt="Dr. Laxman Yadav"
              width="642"
              height="807"
            />
            <figcaption className="text-sm text-gray-500">
              Dr. Laxman Yadav Photo
            </figcaption>
          </figure>

          <h2 ref={shortBio} className="text-2xl font-semibold text-gray-800">
            Dr. Laxman Yadav Short Biography (Short Details)
          </h2>

          <div className="overflow-x-hidden  mx-auto p-8 ">
            <table className="table-auto w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 border border-gray-300">
                    Attributes Name
                  </th>
                  <th className="p-4 border border-gray-300">Short Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-300">Full Name</td>
                  <td className="p-4 border border-gray-300">
                    Dr. Laxman Yadav
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Date of Birth</td>
                  <td className="p-4 border border-gray-300">8 August 1988</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Age</td>
                  <td className="p-4 border border-gray-300">36 Years</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Profession</td>
                  <td className="p-4 border border-gray-300">
                    Writer, Social Activist, Professor, Political Analyst,
                    Blogger, YouTuber, Dalit and Education Hero
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">
                    Height (Approx)
                  </td>
                  <td className="p-4 border border-gray-300">162 cm</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">
                    Weight (Approx)
                  </td>
                  <td className="p-4 border border-gray-300">81kg</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Eye Colour</td>
                  <td className="p-4 border border-gray-300">Black</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Hair Colour</td>
                  <td className="p-4 border border-gray-300">Black</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Education</td>
                  <td className="p-4 border border-gray-300">
                    MA from Allahabad University In 2003 <br />
                    Ph.D. From Delhi University (2010 – 2013)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Hobbies</td>
                  <td className="p-4 border border-gray-300">Cricket</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Home Town</td>
                  <td className="p-4 border border-gray-300">
                    Mubarakpur, Azamgarh, Uttar Pradesh
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Nationality</td>
                  <td className="p-4 border border-gray-300">Indian</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Caste</td>
                  <td className="p-4 border border-gray-300">Yadav</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Religion</td>
                  <td className="p-4 border border-gray-300">Hindu</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Father Name</td>
                  <td className="p-4 border border-gray-300">
                    Comrade Shivanarayan Yadav
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Mother Name</td>
                  <td className="p-4 border border-gray-300">Durgawati Devi</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Siblings</td>
                  <td className="p-4 border border-gray-300">
                    Sister: Chanda Devi Yadav
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Marital Status</td>
                  <td className="p-4 border border-gray-300">Married</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300">Wife Name</td>
                  <td className="p-4 border border-gray-300">Prabha Yadav</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" mx-auto p-8">
            <h1 ref={socialAcc} className="text-4xl font-bold mb-8">
              Dr. Laxman Yadav Social Media
            </h1>
            <section className="p-2">
              <table className="table-auto w-full text-left border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-300">YouTube</td>
                    <td className="p-4 border border-gray-300">
                      <a
                        className="text-blue-500"
                        href="https://www.youtube.com/c/DrLaxmanYadav"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DrLaxmanYadav
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300">Twitter</td>
                    <td className="p-4 border border-gray-300">
                      <a
                        className="text-blue-500"
                        href="https://twitter.com/DrLaxman_Yadav"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DrLaxman_Yadav
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300">Instagram</td>
                    <td className="p-4 border border-gray-300">
                      <a
                        className="text-blue-500"
                        href="https://www.instagram.com/drlaxman_yadav"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @drlaxman_yadav
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300">Facebook</td>
                    <td className="p-4 border border-gray-300">
                      <a
                        className="text-blue-500"
                        href="https://www.facebook.com/Dr.Laxman.Yadav.1988"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dr.Laxman.Yadav.1988
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <h1 ref={bio} className="text-4xl font-bold mb-8">
              Dr. Laxman Yadav Biography
            </h1>

            <section className="mb-8">
              <p className="text-lg mb-4">
                Laxman Yadav was born on August 8, 1988, in a small place called
                Mubarakpur in Uttar Pradesh, India. His dad, Shivnarayan Yadav,
                was from a shepherd family. When Laxman was a kid, he helped
                with farming, took care of cows and buffaloes, and did other
                jobs like that.
              </p>
              <p className="text-lg mb-4">
                He went to local government schools for his early education.
                Laxman was good in his studies and really liked cricket. Even
                though he was into cricket, he still did well in school. After
                finishing school, he decided to go to Allahabad University for
                further studies.
              </p>
              <p className="text-lg mb-4">
                In 2003, he got his Bachelor of Arts degree from Allahabad
                University. Then he thought, why not study more? So he did his
                Masters in Hindi and finished it in 2007. After that, he passed
                a tough exam (UGC NET JRF Hindi) and went on to do a PhD at
                Delhi University. The cool thing was that his PhD only cost
                ₹5000.
              </p>
              <p className="text-lg mb-4">
                Once he finished his PhD, people started calling him Dr. Laxman
                Yadav. He got a job as an Assistant Professor at Delhi
                University, thanks to India’s laws and the Mandal Commission. In
                2010, he began teaching Hindi literature at Zakir Hussain Delhi
                College. He explained things in a special way that showed how
                important education really is. That’s when he moved to Delhi.
                For 12 years, he taught at different colleges.
              </p>
              <p className="text-lg">
                Dr. Yadav is known as a young leader who fights for the rights
                of Dalits and other groups who don’t always get heard. He’s
                really passionate about protecting education and speaks up
                loudly for the rights of these communities.
              </p>
            </section>

            <section className="mb-8">
              <h2 ref={edu} className="text-3xl font-bold mb-4">
                Dr. Laxman Yadav Education
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>BA from Allahabad University (2003 – 2006)</li>
                <li>MA Hindi, Allahabad University (2007 – 2008)</li>
                <li>UGC NET-JRF Qualified “Hindi Literature”</li>
                <li>
                  Ph.D. Hindi Literature (Tulsidas), Delhi University
                  (2010-2013)
                </li>
              </ul>
            </section>

            <section ref={facts} className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Some Interesting Facts About Dr. Laxman Yadav
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Dr. Laxman Yadav's Date of Birth is 8 August 1988.</li>
                <li>Dr. Laxman Yadav is 36 years old.</li>
                <li>
                  He is a Writer, Social Activist, Professor, Political Analyst,
                  Blogger, YouTuber, and a Dalit and Education Hero.
                </li>
                <li>
                  He is available on YouTube, Twitter, Instagram, and Facebook.
                  All the important links are above.
                </li>
              </ul>
            </section>

            <section ref={faq} className="mb-8">
              <h2 className="text-3xl font-bold mb-4">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">
                    Que: What is Dr. Laxman Yadav's Age?
                  </p>
                  <p>36 Years Old</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Que: What is the Date of Birth of Dr. Laxman Yadav?
                  </p>
                  <p>8 August 1988</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Que: Dr. Laxman Yadav's Wife Name?
                  </p>
                  <p>Prabha Yadav</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaxmanYadavBiography;
