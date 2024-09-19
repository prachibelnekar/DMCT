import React from 'react';

const Footer = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/37dc475a3f5b463a2805a8c1d48f8c27f31834b22143e3a6c97009df68cc49fb?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc07bf4f91ba075b42ab700c70126c08cdef6b893d5c155dfb1e466f501cd192?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4c1f0ccb3b9a5d13a18a37cfba335a970ddd6c019a76d8655f5e83f6dcfe14?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", alt: "Instagram" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eba27333a616182bf58b6f89024c3e99e7d64350537224ced259d648c7144500?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", alt: "LinkedIn" }
  ];

  return (
    <footer className="px-10 pt-10 pb-5 mt-8 w-full max-md:px-5 max-md:max-w-full bg-sky-400">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between items-start max-w-full text-2xl font-bold text-white whitespace-nowrap w-[613px] ">
              <div className="flex gap-2.5 ">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5352a031616c554b9acb6cf41545f3f260642e6b5b1bed2593c20928a44190?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 aspect-[1.23] w-[42px]" />
                <h3 className="self-start mt-3.5">Address</h3>
              </div>
              <div className="flex gap-2.5 mt-2">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aa5c3ef34987e7d0da15688bbc8581018a472d7349d535b1c7cf49b9a85b2b1?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 w-9 aspect-[1.06]" />
                <h3 className="my-auto">Email</h3>
              </div>
            </div>
            <div className="mt-3 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                  <address className="text-xl text-white max-md:mt-10">
                    DMCT Oldage Hospital,New Rachana Park Shopping Centre,Near Gun Gopal Temple Ground,Near Chakkinaka Chowk,Chakkinaka, Kalyan (E),Dist.-Thane - 421306
                  </address>
                </div>
                <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start w-full max-md:mt-10">
                    <div className="self-stretch text-xl text-white">
                      <a href="mailto:drravindrajadhav2@gmail.com">drravindrajadhav2@gmail.com</a>
                      <br />
                      <a href="mailto:dmct103@gmail.com">dmct103@gmail.com</a>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-slate-50">Social</h3>
                    <div className="flex gap-6 items-center mt-5 min-h-[26px]">
                      {socialIcons.map((icon, index) => (
                        <a key={index} href="#" aria-label={icon.alt}>
                          <img loading="lazy" src={icon.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-10 items-start max-w-full text-2xl font-bold text-white whitespace-nowrap w-[461px]">
              <div className="flex flex-1 gap-3 mt-1.5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e074948ae69853ebdd8d16cbb46f43b1f9b190c2cac28bee0d4332bbf8a1be00?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 aspect-square w-[29px]" />
                <h3 className="self-start mt-2.5">Contact</h3>
              </div>
              <div className="flex flex-1 gap-2.5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6253be164aa772807eecd860a8d39d050f1c3052ad13433f0d01564558bb5d1b?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 aspect-[1.1] w-[33px]" />
                <h3 className="my-auto">Location</h3>
              </div>
            </div>
            <div className="w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                  <div className="self-stretch my-auto text-xl text-white max-md:mt-10">
                    <a href="tel:+917738530370">+91-7738530370</a>
                    <br />
                    <a href="tel:+919833155731">+91-9833155731</a>
                    <br />
                    <a href="tel:+917977211807">+91-7977211807</a>
                    <br />
                    <a href="tel:+917021651887">+91-7021651887</a>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/50c4f388d8f8b9fe74574386204bf502df7e51eb1ee024beb886635884c93fd8?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Location map" className="object-contain grow gap-2 w-full rounded-2xl aspect-[1.74] min-h-[144px] max-md:mt-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;