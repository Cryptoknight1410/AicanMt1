// import React, { useState ,useRef} from "react";
// import Colors from "../../constants/colors";
// import emailjs from '@emailjs/browser';
// import VisibilitySensor from "react-visibility-sensor";

// let colors = new Colors();

//   return (
//     <div class={`flex   md:my-[150px] my-10`}>
//       <div
//         className={`flex-grow hidden md:block ${colors.BgColor} md:w-[60%]  rounded-br-3xl rounded-tr-3xl lg:pl-20 lg:pr-32 py-20`}
//       >
//         <div className={`flex-col flex`}>
//           <h1
//             className={`w-[50%] mb-8
//             ${colors.textSecondary} text-4xl  font-semibold`}
//           >
//             YOUR FACTORY, OUR EXPERTISE
//           </h1>
//           <div className="h-5"></div>
//           <p className={`${colors.textSecondary} text-base`}>
//             Looking to jump start your digital transformation journey?
//           </p>
//           <div className="h-16"></div>
//           <p className={`${colors.textSecondary} text-base w-[80%] leading-loose`}>
//             Our team of experts are ready to guide you through the process of
//             implementing AICAN's cutting-edge solutions into your manufacturing
//             processes. With a personalized approach and a focus on your specific
//             needs, we'll help you streamline operations and achieve new levels
//             of efficiency.
//           </p>
//           <div className="h-20"></div>
//           <div className={`flex`}>
//             <div className={`flex flex-col`}>
//               <img
//                 src="https://via.placeholder.com/100x100"
//                 alt="Image 1"
//                 class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
//               />
//               <p className={`mt-2 ${colors.textSecondary}`}>Vedant Awasthi</p>
//               <p className={` ${colors.textSecondary}`}>Co-Founder of Aican</p>
//             </div>
//             <div className="w-5"></div>
//             <div className={`flex flex-col`}>
//               <img
//                 src="https://via.placeholder.com/100x100"
//                 alt="Image 1"
//                 class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
//               />
//               <p className={`mt-2 ${colors.textSecondary}`}>Ritwik Dhar</p>
//               <p className={` ${colors.textSecondary}`}>Co-Founder of Aican</p>
//             </div>
//             <img
//               className="relative top-[-80px] "
//               src="../src/assets/Hi.svg"
//             ></img>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`${colors.forms}  my-10 h-[50%] md:-ml-28 rounded-tl-3xl rounded-bl-3xl md:px-32 py-24 px-5  relative mx-auto md:flex-grow font-montserrat `}
//       >
//         <h2 class="text-xl md:text-5xl font-bold mb-4 text-center lg:text-left  ">
//           Talk to our <span class="text-green-700">Experts</span>
//         </h2>
//         <p class="text-gray-600 mb-6 font-medium text-center lg:text-left">
//           Contact us today to learn more and start your journey towards a
//           smarter future.
//         </p>

//         <form ref={form}>
//           <div class=" mb-5 md:mb-8">

//             <input
//               required
//               class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               value={name}
//               onChange={handleChange}
//               type="text"
//               placeholder="Name *"
//             />
//           </div>
//           <div class=" mb-5 md:mb-8">

//             <input
//               required
//               class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Email *"
//               value={email}
//               onChange={handleChange1}
//             />
//           </div>
//           <div class="mb-5 md:mb-8">

//             <input
//               required
//               class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="contact"
//               type="number"
//               placeholder="Contact *"
//               value={phone}
//               onChange={handleChange2}
//             />
//           </div>
//           <div class="mb-12">

//             <input
//               required
//               class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="company"
//               type="text"
//               placeholder="Company Name *"
//               value={companysname}
//               onChange={handleChange3}
//             />
//           </div>
//           <div className="h-5"></div>
//           <input type="submit"
//             onSubmit={handleSubmit}
//             className={` ${colors.textSecondary} cursor-pointer font-bold py-2 px-4 rounded-xl block  focus:outline-none focus:shadow-outline w-full text-center ${colors.buttonColor}`} value="SEND"
//           >

//           </input>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Forms;
// import React, { useState, useRef, useEffect } from "react";
// import Colors from "../../constants/colors";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";

// let colors = new Colors();

// function Forms() {
//   const form = useRef();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [companysname, setCompanyName] = useState("");
//   const [animateCards, setAnimateCards] = useState(false);

//   useEffect(() => {
//     setAnimateCards(true);
//   }, []);

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleChange1 = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChange2 = (e) => {
//     setPhone(e.target.value);
//   };

//   const handleChange3 = (e) => {
//     setCompanyName(e.target.value);
//   };

//   const info = {
//     service_id: "service_l520ych",
//     template_id: "template_llw9kuf",
//     user_id: "lhIFq2tMK2_hQ78VI",
//     templatepar: {
//       Name: name,
//       Phone: phone,
//       Email: email,
//       Companysname: companysname,
//     },
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_l520ych",
//         "template_llw9kuf ",
//         form.current,
//         "lhIFq2tMK2_hQ78VI"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div class={`flex md:my-[150px] my-10`}>
//       <motion.div
//         initial={{ x: -1000 }}
//         animate={{ x: animateCards ? 0 : -1000 }}
//         transition={{ duration: 0.5 }}
//         className={`flex-grow hidden md:block ${colors.BgColor} md:w-[60%]  rounded-br-3xl rounded-tr-3xl lg:pl-20 lg:pr-32 py-20`}
//       >
//           <div
//          className={`flex-grow hidden md:block ${colors.BgColor} md:w-[60%]  rounded-br-3xl rounded-tr-3xl lg:pl-20 lg:pr-32 py-20`}
//        >
//          <div className={`flex-col flex`}>
//           <h1
//              className={`w-[50%] mb-8
//              ${colors.textSecondary} text-4xl  font-semibold`}
//            >
//              YOUR FACTORY, OUR EXPERTISE
//            </h1>
//            <div className="h-5"></div>
//            <p className={`${colors.textSecondary} text-base`}>
//              Looking to jump start your digital transformation journey?
//            </p>
//            <div className="h-16"></div>
//            <p className={`${colors.textSecondary} text-base w-[80%] leading-loose`}>
//              Our team of experts are ready to guide you through the process of
//              implementing AICAN's cutting-edge solutions into your manufacturing
//              processes. With a personalized approach and a focus on your specific
//              needs, we'll help you streamline operations and achieve new levels
//              of efficiency.
//            </p>
//            <div className="h-20"></div>
//            <div className={`flex`}>
//              <div className={`flex flex-col`}>
//                <img
//                  src="https://via.placeholder.com/100x100"
//                  alt="Image 1"
//                  class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
//                />
//                <p className={`mt-2 ${colors.textSecondary}`}>Vedant Awasthi</p>
//                <p className={` ${colors.textSecondary}`}>Co-Founder of Aican</p>
//              </div>
//              <div className="w-5"></div>
//              <div className={`flex flex-col`}>
//                <img
//                  src="https://via.placeholder.com/100x100"
//                  alt="Image 1"
//                  class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
//                />
//                <p className={`mt-2 ${colors.textSecondary}`}>Ritwik Dhar</p>
//                <p className={` ${colors.textSecondary}`}>Co-Founder of Aican</p>
//              </div>
//              <img
//                className="relative top-[-80px] "
//                src="../src/assets/Hi.svg"
//              ></img>
//            </div>
//          </div>
//        </div>
//       </motion.div>

//       <motion.div
//         initial={{ x: 1000 }}
//         animate={{ x: animateCards ? 0 : 1000 }}
//         transition={{ duration: 0.5 }}
//         className={`${colors.forms} my-10 h-[50%] md:-ml-28 rounded-tl-3xl rounded-bl-3xl md:px-32 py-24 px-5  relative mx-auto md:flex-grow font-montserrat `}
//       >
//         <div
//          className={`${colors.forms}  my-10 h-[50%] md:-ml-28 rounded-tl-3xl rounded-bl-3xl md:px-32 py-24 px-5  relative mx-auto md:flex-grow font-montserrat `}
//        >
//          <h2 class="text-xl md:text-5xl font-bold mb-4 text-center lg:text-left  ">
//            Talk to our <span class="text-green-700">Experts</span>
//          </h2>
//          <p class="text-gray-600 mb-6 font-medium text-center lg:text-left">
//            Contact us today to learn more and start your journey towards a
//            smarter future.
//          </p>

//          <form ref={form}>
//            <div class=" mb-5 md:mb-8">

//              <input
//                required
//                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                id="name"
//                value={name}
//                onChange={handleChange}
//                type="text"
//                placeholder="Name *"
//              />
//            </div>
//            <div class=" mb-5 md:mb-8">

//              <input
//                required
//               class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                id="email"
//                type="email"
//                placeholder="Email *"
//                value={email}
//                onChange={handleChange1}
//              />
//            </div>
//            <div class="mb-5 md:mb-8">

//              <input
//                required
//                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                id="contact"
//                type="number"
//                placeholder="Contact *"
//                value={phone}
//                onChange={handleChange2}
//              />
//            </div>
//            <div class="mb-12">

//              <input
//                required
//                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                id="company"
//                type="text"
//                placeholder="Company Name *"
//                value={companysname}
//                onChange={handleChange3}
//              />
//            </div>
//            <div className="h-5"></div>
//            <input type="submit"
//              onSubmit={handleSubmit}
//              className={` ${colors.textSecondary} cursor-pointer font-bold py-2 px-4 rounded-xl block  focus:outline-none focus:shadow-outline w-full text-center ${colors.buttonColor}`} value="SEND"
//            >

//            </input>
//          </form>
//        </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Forms;

import React, { useState, useRef, useEffect } from "react";
import Colors from "../../constants/colors";
import emailjs from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

let colors = new Colors();

function Forms() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setAnimateCards(true);
    }
  };
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companysname, setCompanyName] = useState("");
  const [animateCards, setAnimateCards] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Change this threshold as needed
    };

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       setAnimateCards(true);
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // }, options);

    // observer.observe(form.current);

    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChange1 = (e) => {
    setEmail(e.target.value);
  };

  const handleChange2 = (e) => {
    setPhone(e.target.value);
  };

  const handleChange3 = (e) => {
    setCompanyName(e.target.value);
  };

  const info = {
    service_id: "service_l520ych",
    template_id: "template_llw9kuf",
    user_id: "lhIFq2tMK2_hQ78VI",
    templatepar: {
      Name: name,
      Phone: phone,
      Email: email,
      Companysname: companysname,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l520ych",
        "template_llw9kuf",
        form.current,
        "lhIFq2tMK2_hQ78VI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (animateCards) {
      controls.start({ x: 0 });
    }
  }, [animateCards, controls]);

  return (
    <div class={`flex md:my-[150px] my-10 overflow-hidden`}>
      <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
        {({ isVisible }) => (
          <motion.div
          style={{ width: '70%'}}
            initial={{ x: -1000 }}
            animate={isVisible ? { x: 0 } : { x: -900 }}
            transition={{ duration: 1 }}
          >
            <div
              className={`flex-grow hidden md:block ${colors.BgColor} rounded-br-3xl rounded-tr-3xl lg:pl-20 lg:pr-32 py-28`}
            >
              <div>
                <h1
                  className={` mb-8
            ${colors.textSecondary} text-4xl  font-semibold`}
                >
                  YOUR FACTORY, OUR EXPERTISE
                </h1>
                <div className="h-5"></div>
                <p className={`${colors.textSecondary} text-base`}>
                  Looking to jump start your digital transformation journey?
                </p>
                <div className="h-16"></div>
                <p
                  className={`${colors.textSecondary} text-base w-[80%] leading-loose`}
                >
                  Our team of experts are ready to guide you through the process
                  of implementing AICAN's cutting-edge solutions into your
                  manufacturing processes. With a personalized approach and a
                  focus on your specific needs, we'll help you streamline
                  operations and achieve new levels of efficiency.
                </p>
                <div className="h-20"></div>
                <div className={`flex`}>
                  <div className={`flex flex-col`}>
                    <img
                      src="https://via.placeholder.com/100x100"
                      alt="Image 1"
                      class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
                    />
                    <p className={`mt-2 ${colors.textSecondary}`}>
                      Vedant Awasthi
                    </p>
                    <p className={` ${colors.textSecondary}`}>
                      Co-Founder of Aican
                    </p>
                  </div>
                  <div className="w-5"></div>
                  <div className={`flex flex-col`}>
                    <img
                      src="https://via.placeholder.com/100x100"
                      alt="Image 1"
                      class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
                    />
                    <p className={`mt-2 ${colors.textSecondary}`}>
                      Ritwik Dhar
                    </p>
                    <p className={` ${colors.textSecondary}`}>
                      Co-Founder of Aican
                    </p>
                  </div>
                  <img
                    className="relative top-[-80px] "
                    src="../src/assets/Hi.svg"
                  ></img>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </VisibilitySensor>

      <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
        {({ isVisible }) => (
          <motion.div
            initial={{ x: 1000 }}
            animate={isVisible ? { x: 0 } : { x:500 }}
            transition={{ duration: 1 }}
          >
            <div
              className={`${colors.forms}  my-10 h-auto  md:-ml-28 rounded-tl-3xl rounded-bl-3xl md:px-32 py-24 px-5  relative mx-auto md:flex-grow font-montserrat `}
            >
              <h2 class="text-xl md:text-5xl font-bold mb-4 text-center lg:text-left  ">
                Talk to our <span class="text-green-700">Experts</span>
              </h2>
              <p class="text-gray-600 mb-6 font-medium text-center lg:text-left">
                Contact us today to learn more and start your journey towards a
                smarter future.
              </p>

              <form>
                <div class=" mb-5 md:mb-8">
                  <input
                    required
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Name *"
                  />
                </div>
                <div class=" mb-5 md:mb-8">
                  <input
                    required
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={handleChange1}
                  />
                </div>
                <div class="mb-5 md:mb-8">
                  <input
                    required
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contact"
                    type="number"
                    placeholder="Contact *"
                    value={phone}
                    onChange={handleChange2}
                  />
                </div>
                <div class="mb-12">
                  <input
                    required
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company"
                    type="text"
                    placeholder="Company Name *"
                    value={companysname}
                    onChange={handleChange3}
                  />
                </div>
                <div className="h-5"></div>
                <input
                  type="submit"
                  onSubmit={handleSubmit}
                  className={` ${colors.textSecondary} cursor-pointer font-bold py-2 px-4 rounded-xl block  focus:outline-none focus:shadow-outline w-full text-center ${colors.buttonColor}`}
                  value="SEND"
                ></input>
              </form>
            </div>
          </motion.div>
        )}
      </VisibilitySensor>
    </div>
  );
}

export default Forms;
