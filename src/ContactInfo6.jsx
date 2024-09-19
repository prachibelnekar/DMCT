import React from 'react';

const ContactInfo6 = () => {
  const contactData = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27c7aaf1-e25f-4a46-bb81-6d3050f649f2?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", title: "Contact No:", content: "+91-9833155731" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c4290f1-245c-4a16-911c-211578cbcf0b?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", title: "Mail Us:", content: "drravindrajadhav2@gmail.com" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/146cc4c6-7b78-49e4-952c-a1c47acb2202?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", content: "" }
  ];

  return (
    <>
      {contactData.map((item, index) => (
        <div key={index} className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex gap-3 self-stretch my-auto text-base text-black max-md:mt-10">
            <img loading="lazy" src={item.icon} alt={item.title || "Contact icon"} className="object-contain shrink-0 bg-blue-400 aspect-[0.96] h-[79px] w-[79px]" />
            {item.title && (
              <div className="flex-auto self-end mt-6">
                <span className="text-xl">{item.title}</span>
                <br />
                <span className="text-xl">{item.content}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo6;