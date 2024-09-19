import React from 'react';

function ContactInfo4() {
  const contactDetails = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8092b53-91cc-4411-8f29-4e082963681c?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", title: "Contact No:-", content: "+91-9833155731" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1863c8e7-4dd6-414a-9049-90a913c8ff0f?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", title: "Mail Us:-", content: "drravindrajadhav2@gmail.com" }
  ];

  return (
    <>
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex gap-3 self-stretch my-auto text-base text-black max-md:mt-10">
            <img loading="lazy" src={detail.icon} alt={detail.title} className="object-contain shrink-0 bg-blue-400 aspect-[0.96] h-[79px] w-[79px]" />
            <div className="flex-auto self-end mt-6">
              <span className="text-xl">{detail.title}</span>
              <br />
              <span className="text-xl">{detail.content}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContactInfo4;