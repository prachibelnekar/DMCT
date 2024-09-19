import React from 'react';

const ContactInfo = () => {
  const contactDetails = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/083f1451-45c7-41b0-a468-1d1ba5c2b354?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", title: "Contact No:-", content: "+91-9833155731" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7eeb874b-065c-4342-88bb-33e3509667cd?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", title: "Mail Us:-", content: "drravindrajadhav2@gmail.com" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f35f42e-f570-4d2a-8b31-1f6376cc56fc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", content: "", isImage: true }
  ];

  return (
    <>
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          {detail.isImage ? (
            <img loading="lazy" src={detail.icon} alt="Contact information" className="object-contain shrink-0 self-stretch m-auto max-w-full bg-white aspect-[3.1] w-[220px] max-md:mt-10" />
          ) : (
            <div className="flex gap-2 self-stretch my-auto text-base text-black max-md:mt-10">
              <img loading="lazy" src={detail.icon} alt="" className="object-contain shrink-0 bg-blue-400 aspect-[0.96] h-[79px] w-[79px]" />
              <div className="my-auto">
                <span className="text-xl">{detail.title}</span>
                <br />
                <span className="text-xl">{detail.content}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ContactInfo;