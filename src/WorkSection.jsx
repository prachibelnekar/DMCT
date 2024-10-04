import React from 'react';

function WorkSection() {
  const workItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7cd69aff8699297b71dbeba34a033e44f9d15f7c71181a11012e6821a7ada63?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce",
      title: "Private Rooms",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/972879496b6cd71c5690a98759cfd0431f492a2b8cfff4c9f4ec3d0ec82e661f?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce",
      title: "Semi- Private Rooms",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <section className="flex flex-col self-center mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl">
        some Work done{" "}
      </h2>
      <div className="flex flex-wrap gap-6 items-start mt-10 max-md:max-w-full">
        {workItems.map((item, index) => (
          <div key={index} className="flex flex-col min-w-[240px] w-[608px] max-md:max-w-full">
            <img loading="lazy" src={item.image} alt={item.title} className="object-contain max-w-full aspect-[1.9] w-[608px]" />
            <div className="flex flex-col mt-6 max-w-full w-[575px]">
              <div className="flex flex-col w-full">
                <h3 className="text-2xl font-semibold text-green-900">{item.title}</h3>
                <p className="mt-5 text-sm leading-5 text-zinc-600 max-md:max-w-full">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkSection;

// import React from 'react';

// import Footer from './Footer.jsx';

// const OurGallery = () => {
//   return (
//     <>
//       <div className="flex flex-col overflow-hidden bg-white">
        

//         {/* Grid for images */}
//         <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
//           {/* Image 1 */}
//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/501e9b46bba1eaadf772d408c6874dd7f5cbc7e63359721f479d8a2226d4d9dc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Facility"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           {/* Image 2 */}
//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8134dc08ac54291ce062e22fc0e3937f727deffbc8d0931bc1041c08787b6ba?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Services"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           {/* Add more images in a similar way */}
//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/501e9b46bba1eaadf772d408c6874dd7f5cbc7e63359721f479d8a2226d4d9dc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Facility"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8134dc08ac54291ce062e22fc0e3937f727deffbc8d0931bc1041c08787b6ba?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Services"
//               className="object-cover w-full h-60"
//             />
//           </div>
//                     {/* Image 1 */}
//                     <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/501e9b46bba1eaadf772d408c6874dd7f5cbc7e63359721f479d8a2226d4d9dc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Facility"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           {/* Image 2 */}
//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8134dc08ac54291ce062e22fc0e3937f727deffbc8d0931bc1041c08787b6ba?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Services"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           {/* Add more images in a similar way */}
//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/501e9b46bba1eaadf772d408c6874dd7f5cbc7e63359721f479d8a2226d4d9dc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Facility"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8134dc08ac54291ce062e22fc0e3937f727deffbc8d0931bc1041c08787b6ba?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Services"
//               className="object-cover w-full h-60"
//             />
//           </div>
//                     {/* Image 1 */}
//                     <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/501e9b46bba1eaadf772d408c6874dd7f5cbc7e63359721f479d8a2226d4d9dc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Facility"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           {/* Image 2 */}
//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8134dc08ac54291ce062e22fc0e3937f727deffbc8d0931bc1041c08787b6ba?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Services"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           {/* Add more images in a similar way */}
//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/501e9b46bba1eaadf772d408c6874dd7f5cbc7e63359721f479d8a2226d4d9dc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Facility"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8134dc08ac54291ce062e22fc0e3937f727deffbc8d0931bc1041c08787b6ba?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//               alt="Hospital Services"
//               className="object-cover w-full h-60"
//             />
//           </div>

//           {/* Repeat the above block for additional images to fill the grid */}
//         </div>

//         {/* Scroll to top button */}
//         <a href="#top" aria-label="Scroll to top">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/b616506102a7720a0663482c099578abc01ab3bcf202b5483eaef863b9cf6a48?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//             alt="Scroll to top"
//             className="object-contain self-end mr-11 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mr-2.5"
//           />
//         </a>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default OurGallery;
