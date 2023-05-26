import React from 'react';
import Accordion from '../../common/Accordian';
import Colors from "../../../constants/colors";

const colors = new Colors();
const Faqs = () => {
  const faqs = [
    {
      title: 'How can the use of predictive maintenance through the software help automobile spare parts manufacturers reduce the risk of equipment failure and associated downtime?',
      content: 'By analyzing data on machine performance in real-time, the software can predict when maintenance will be needed and meet production goals effeciently',
    },
    {
      title: 'How can the use of data analytics through the software help automobile spare parts manufacturers optimize inventory management and reduce the risk of stockouts?',
      content: 'By using data analytics to track inventory levels in real-time, the software can provide accurate and up-to-date information on stock levels This can help manufacturers and distributors better manage their inventory, ensuring that the right parts and components are available when needed. With improved inventory management, manufacturers can reduce the risk of stockouts, minimize the need for excess inventory, and improve overall efficiency',
    },
  {
      title: 'How can the use of machine learning algorithms through the software help automobile spare parts manufacturers predict demand for certain products and components?',
      content: ' By analyzing historical data on sales and inventory levels, machine learning algorithms can predict future demand for certain products and components. This can help manufacturers and distributors optimize their inventory management, ensuring that the right parts and components are available when needed. With improved inventory management, automobile spare parts manufacturers can reduce the risk of stockouts, minimize the need for excess inventory, and improve overall efficiency.',
    },
  {
      title: 'How can the use of real-time data monitoring through the software help automobile spare parts manufacturers identify areas for process improvement and optimization?',
      content: ' By monitoring machine performance and inventory levels in real-time, the software can provide insights into production processes and identify areas for improvement. This can help manufacturers and distributors optimize their production processes, reduce downtime, and improve overall efficiency. With improved optimization, automobile spare parts manufacturers can increase profitability and compete more effectively in the marketplace.',
    },
   
  ];


    return (
        <div className="flex flex-col justify-center items-center mt-16 ">
          <div
            className={`bg-[#E3E9F7] p-5 flex-col flex my-9 rounded-3xl w-4/5 box-border`}
          >
            <div className="p-0 flex flex-col md:flex-row items-center justify-center flex-wrap ">
              <div className="px-0 py-4 text-center  w-4/5 ">
                <h3 className={`${colors.headingColor}  text-base font-bold`}>
                  FAQS
                </h3>
                <div className="h-4"></div>
    
                <h2
                  className={`text-lg lg:text-3xl ${colors.subheadingColor} sm:text-lg font-bold mb-10`}
                >
                 Solution For All Your Questions
                </h2>
                <div>
    
      {faqs.map((faq, index) => (
         <Accordion key={index} title={faq.title} content={faq.content} />
   ))}
     </div>
              </div>
            </div>
    
           
          </div>
        </div>
      );
  
};

export default Faqs;