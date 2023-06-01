import React, { useState ,useRef} from "react";
import Colors from "../../constants/colors";
import emailjs from '@emailjs/browser';


let colors = new Colors();
function Forms() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companysname, setCompanyName] = useState("");

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
  console.log(name);

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

    emailjs.sendForm('service_l520ych', 'template_llw9kuf ',form.current,'lhIFq2tMK2_hQ78VI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div class={`flex   md:my-[150px] my-10`}>
      <div
        className={`flex-grow hidden md:block ${colors.BgColor} md:w-[60%]  rounded-br-3xl rounded-tr-3xl lg:pl-20 lg:pr-32 py-20`}
      >
        <div className={`flex-col flex`}>
          <h1
            className={`w-[50%] mb-8
            ${colors.textSecondary} text-4xl  font-semibold`}
          >
            YOUR FACTORY, OUR EXPERTISE
          </h1>
          <div className="h-5"></div>
          <p className={`${colors.textSecondary} text-base`}>
            Looking to jump start your digital transformation journey?
          </p>
          <div className="h-16"></div>
          <p className={`${colors.textSecondary} text-base w-full`}>
            Our team of experts are ready to guide you through the process of
            implementing AICAN's cutting-edge solutions into your manufacturing
            processes. With a personalized approach and a focus on your specific
            needs, we'll help you streamline operations and achieve new levels
            of efficiency.
          </p>
          <div className="h-20"></div>
          <div className={`flex`}>
            <div className={`flex flex-col`}>
              <img
                src="https://via.placeholder.com/100x100"
                alt="Image 1"
                class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
              />
              <p className={`mt-2 ${colors.textSecondary}`}>Vedant Awasthi</p>
              <p className={` ${colors.textSecondary}`}>Co-Founder of Aican</p>
            </div>
            <div className="w-5"></div>
            <div className={`flex flex-col`}>
              <img
                src="https://via.placeholder.com/100x100"
                alt="Image 1"
                class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
              />
              <p className={`mt-2 ${colors.textSecondary}`}>Ritwik Dhar</p>
              <p className={` ${colors.textSecondary}`}>Co-Founder of Aican</p>
            </div>
            <img
              className="relative top-[-80px] "
              src="../src/assets/Hi.svg"
            ></img>
          </div>
        </div>
      </div>

      <div
        className={`${colors.card1}  my-10 h-[50%] md:-ml-28 rounded-tl-3xl rounded-bl-3xl md:px-32 py-24 px-5  relative mx-auto md:flex-grow`}
      >
        <h2 class="text-xl md:text-5xl font-bold mb-4 text-center lg:text-left">
          Talk to our <span class="text-green-700">Experts</span>
        </h2>
        <p class="text-gray-600 mb-6 font-medium text-center lg:text-left">
          Contact us today to learn more and start your journey towards a
          smarter future.
        </p>

        <form ref={form}>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              required
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              value={name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              required
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange1}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="contact">
              Contact
            </label>
            <input
              required
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="number"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handleChange2}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="company">
              Company
            </label>
            <input
              required
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              type="text"
              placeholder="Enter your company name"
              value={companysname}
              onChange={handleChange3}
            />
          </div>
          <div className="h-5"></div>
          <input type="submit"
            onSubmit={handleSubmit}
            className={` ${colors.textSecondary} font-bold py-2 px-4 rounded-xl block  focus:outline-none focus:shadow-outline w-full text-center ${colors.buttonColor}`} value="Submit"
          >
            
          </input>
        </form>
      </div>
    </div>
  );
}

export default Forms;
