import Colors from "../../constants/colors";
import { Link } from "react-router-dom";
function DropDown({ items }) {
  const colors = new Colors();
  let array2 = Object.values(items);
  return (
    <div>
      {array2.map((item) => {
        return (
          <div
            key={1}
            className={` shadow-2xl flex flex-row flex-wrap justify-around w-full z-50 left-[-1px] ${colors.bgWhite} absolute mt-10 py-16 px-5`}
          >
            <div className="flex flex-col justify-center w-72">
              <p className={`${colors.NavBarcolor} font-semibold text-base`}>
                <Link to="/">{Object.keys(item[0])}</Link>
              </p>

              <p className={`${colors.NavBarcolor} text-sm `}>
                {Object.values(item[0])}
              </p>
              <div className="h-5"> </div>
              <div className={`${colors.textGreenColor}`}>Learn More &gt;</div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-center w-72">
                <Link to={`/${Object.keys(item[0])}/${Object.keys(item[1]).toString().replace(" ","")}`}>
                  <p
                    className={`${colors.NavBarcolor} font-semibold text-base`}
                  >
                    {Object.keys(item[1])}
                  </p>
                  <p className={`${colors.NavBarcolor} text-sm `}>
                    {Object.values(item[1])}
                  </p>
                  <div className="h-3"> </div>
                  <div className={`${colors.textGreenColor}`}>
                    Learn More &gt;
                  </div>
                </Link>
              </div>
              <div className={`h-5`}></div>
              <div className="flex flex-col justify-center w-72">
                <Link to={`/${Object.keys(item[0])}/${Object.keys(item[2]).toString().replace(" ","")}`}>
                  <p
                    className={`${colors.NavBarcolor} font-semibold text-base`}
                  >
                    {Object.keys(item[2])}
                  </p>
                  <p className={`${colors.NavBarcolor} text-sm `}>
                    {Object.values(item[2])}
                  </p>
                  <div className="h-5"> </div>
                  <div className={`${colors.textGreenColor}`}>
                    Learn More &gt;
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-center w-72">
                <Link to={`/${Object.keys(item[0])}/${Object.keys(item[3]).toString().replace(" ","")}`}>
                  <p
                    className={`${colors.NavBarcolor} font-semibold text-base`}
                  >
                    {Object.keys(item[3])}
                  </p>
                  <p className={`${colors.NavBarcolor} text-sm `}>
                    {Object.values(item[3])}
                  </p>
                  <div className="h-3"> </div>
                  <div className={`${colors.textGreenColor}`}>
                    Learn More &gt;
                  </div>
                </Link>
              </div>
              <div className={`h-5`}></div>
              <div className="flex flex-col justify-center w-72">
                <Link
                  to={`/${Object.keys(item[0])}/${Object.keys(item[4])
                    .toString()
                    .replace(" ", "")}`}
                >
                  <p
                    className={`${colors.NavBarcolor} font-semibold text-base`}
                  >
                    {Object.keys(item[4])}
                  </p>
                  <p className={`${colors.NavBarcolor} text-sm `}>
                    {Object.values(item[4])}
                  </p>
                  <div className="h-5"> </div>
                  <div className={`${colors.textGreenColor}`}>
                    Learn More &gt;
                  </div>
                </Link>
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
