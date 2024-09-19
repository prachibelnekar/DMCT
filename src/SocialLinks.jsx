import React from 'react';

const SocialLinks = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/37dc475a3f5b463a2805a8c1d48f8c27f31834b22143e3a6c97009df68cc49fb?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc07bf4f91ba075b42ab700c70126c08cdef6b893d5c155dfb1e466f501cd192?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4c1f0ccb3b9a5d13a18a37cfba335a970ddd6c019a76d8655f5e83f6dcfe14?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", alt: "Instagram" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eba27333a616182bf58b6f89024c3e99e7d64350537224ced259d648c7144500?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce", alt: "LinkedIn" }
  ];

  return (
    <>
      <h5 className="mt-7 text-2xl font-bold text-gray-200">Social</h5>
      <div className="flex gap-6 items-center mt-5 min-h-[26px]">
        {socialIcons.map((icon, index) => (
          <a href="#" key={index} aria-label={`Visit our ${icon.alt} page`}>
            <img
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;