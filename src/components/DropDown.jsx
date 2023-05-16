import Colors from "../constants/colors";
function DropDown({ items }) {
  const colors = new Colors();

  let array2 = Object.values(items);

  return (
    <div>
      {array2.map((item) => {
        console.log(item);
        return (
          <div
            className={` shadow-2xl flex flex-row flex-wrap justify-around w-full z-40 left-[-1px] ${colors.bgWhite} absolute mt-14 py-16 px-20`}
          >
            <div className="flex flex-col justify-center w-96">
              <p className={`${colors.NavBarcolor} font-semibold text-lg`}>
                {Object.keys(item[0])}
              </p>

              <p className={`${colors.NavBarcolor} text-base `}>
                {Object.values(item[0])}
              </p>
              <div className="h-5"> </div>
              <div className={`${colors.textGreenColor}`}>Learn More &gt;</div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-center w-96">
                <p className={`${colors.NavBarcolor} font-semibold text-lg`}>
                  {Object.keys(item[1])}
                </p>
                <p className={`${colors.NavBarcolor} text-base `}>
                  {Object.values(item[1])}
                </p>
                <div className="h-3"> </div>
                <div className={`${colors.textGreenColor}`}>
                  Learn More &gt;
                </div>
              </div>
              <div className={`h-5`}></div>
              <div className="flex flex-col justify-center w-96">
                <p className={`${colors.NavBarcolor} font-semibold text-lg`}>
                  {Object.keys(item[2])}
                </p>
                <p className={`${colors.NavBarcolor} text-base `}>
                  {Object.values(item[2])}
                </p>
                <div className="h-5"> </div>
                <div className={`${colors.textGreenColor}`}>
                  Learn More &gt;
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-center w-96">
                <p className={`${colors.NavBarcolor} font-semibold text-lg`}>
                  {Object.keys(item[3])}
                </p>
                <p className={`${colors.NavBarcolor} text-base `}>
                  {Object.values(item[3])}
                </p>
                <div className="h-3"> </div>
                <div className={`${colors.textGreenColor}`}>Learn More &gt;</div>
              </div>
              <div className={`h-5`}></div>
              <div className="flex flex-col justify-center w-96">
                <p className={`${colors.NavBarcolor} font-semibold text-lg`}>
                  {Object.keys(item[4])}
                </p>
                <p className={`${colors.NavBarcolor} text-base `}>
                  {Object.values(item[4])}
                </p>
                <div className="h-5"> </div>
                <div className={`${colors.textGreenColor}`}>Learn More &gt;</div>
              </div>
            </div>

            <div className="flex flex-col">
              <p>Whats New</p>
              <img src="http://via.placeholder.com/300x200"></img>

              <h1>How to calculate OEE in Excel Video</h1>
              <h1 className={`${colors.textGreenColor}`}>Read More &gt;</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DropDown;
