import React, { useEffect, useState } from "react";
import classNames from "classnames";

const Example = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <div
        className={classNames("snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-2xl", {
          "opacity-0": isScrolled,
          "opacity-100": !isScrolled,
          "transition-opacity duration-500": true,
        })}
      >
        1
        he Certificate and Diploma have been superseded by the Professional Development Award in Applications of ICT in Libraries at levels 7 and 8 (English and Welsh levels 4 and 5). They consist of much the same content as the certificate and diploma but the PDAs include two new units:

Digital Culture: Online Communication: In this unit you will focus on the “new literacies” created by digital technologies. You will consider Web 2.0 tools, including social networks, online publishing, online collaboration and virtual worlds.
Digital Culture: Online Collaboration: This unit considers the sociology and operation of virtual communities. You will discuss the uses of Web 2.0 and online collaboration tools within your workplace.
To achieve the level 7 award you must complete three mandatory units:

⋅Locating Information on Behalf of Clients ⋅Using ICT in Library Practice & Professional Development ⋅Supporting Clients in the safe & Legal use of ICT

and one of:

⋅Supporting Reader Development ⋅Digital Culture: Online Communication
      </div>
      <div
        className={classNames("snap-start bg-pink-200 w-screen h-screen flex items-center justify-center text-8xl", {
          "opacity-0": isScrolled,
          "opacity-100": !isScrolled,
          "transition-opacity duration-500": true,
        })}
      >
        2
      </div>
      <div
        className={classNames("snap-start bg-grays-200 w-screen h-screen flex items-center justify-center text-8xl", {
          "opacity-0": isScrolled,
          "opacity-100": !isScrolled,
          "transition-opacity duration-500": true,
        })}
      >
        3
      </div>
    </div>
  );
};

export default Example;