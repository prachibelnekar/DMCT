import React from 'react';

const DonationForm = () => {
  return (
    <section className="flex flex-col items-center self-center mt-20 ml-10 w-full max-w-[1314px] max-md:mt-10 max-md:max-w-full">
      <div className="flex max-w-full text-xl leading-normal text-center whitespace-nowrap w-[397px]">
        <button className="gap-3.5 self-stretch px-16 py-2.5 text-white bg-blue-400 rounded-md border border-black border-solid min-h-[53px] max-md:px-5">
          Money
        </button>
        <button className="gap-4 self-stretch py-2.5 pr-14 pl-24 text-black bg-white rounded-md border border-black border-solid min-h-[53px] max-md:px-5">
          Stuff
        </button>
      </div>
      <div className="flex flex-col justify-center self-start p-24 mt-9 w-full rounded-2xl border border-sky-500 border-solid max-w-[1232px] max-md:px-5 max-md:max-w-full">
        <form className="flex overflow-hidden flex-col w-full rounded-md border border-solid border-zinc-100">
          <div className="flex flex-col gap-2 items-center pt-16 w-full border border-solid bg-slate-50 border-zinc-100 min-h-[500px] max-md:max-w-full">
            <div className="flex flex-col p-3 max-w-full w-[508px]">
              <div className="flex flex-wrap gap-2 items-start max-md:max-w-full">
                <button className="flex overflow-hidden flex-col p-3 bg-white rounded-md border-sky-600 border-solid shadow-sm border-[length:var(--sds-size-stroke-border)] w-[140px]">
                  <div className="flex gap-2 items-start w-4">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/091175f405dcbaea6a2a3e08dfad380dc48cf1760431e7d033339a1b24177234?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain w-4 aspect-square" />
                  </div>
                  <div className="mt-1 text-sm font-semibold tracking-wide leading-none text-sky-600">
                    Card
                  </div>
                </button>
                <button className="flex overflow-hidden flex-col p-3 text-sm font-semibold tracking-wide leading-none bg-white rounded-md border-solid shadow border-[length:var(--sds-size-stroke-border)] border-neutral-200 text-zinc-500 w-[140px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e2891ba06c7be8a24e7379380a85de14242f99dd7283d91b9f6be9ea1e2c65f?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain w-4 aspect-square" />
                  <div className="mt-1">Google Pay</div>
                </button>
                <button className="flex overflow-hidden flex-col p-3 text-sm font-semibold tracking-wide leading-none bg-white rounded-md border-solid shadow border-[length:var(--sds-size-stroke-border)] border-neutral-200 text-zinc-500 w-[140px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed79097686e4319026c00190d170b046b701b80b60be944b1c7e155f81f8d53?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain w-4 aspect-square" />
                  <div className="mt-1">Us bank account</div>
                </button>
                <button className="flex overflow-hidden flex-col justify-center self-stretch p-3 w-10 bg-white rounded-md border-solid shadow border-[length:var(--sds-size-stroke-border)] border-neutral-200">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/de1bc3eb639834b3482bf0820a3ba1660c4f9f13e0d7f300424a01c39d9cae5e?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain w-4 aspect-square" />
                </button>
              </div>
              <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex flex-col w-full max-w-[484px] max-md:max-w-full">
                    <label htmlFor="cardNumber" className="text-base leading-none text-gray-800 max-md:max-w-full">
                      Card number
                    </label>
                    <div className="flex overflow-hidden relative gap-2 items-start p-3 mt-1 w-full bg-white rounded-md border-solid shadow border-[length:var(--sds-size-stroke-border)] border-neutral-200 max-md:max-w-full">
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 1234 1234 1234"
                        className="z-0 flex-1 shrink my-auto text-base leading-none basis-0 text-zinc-500 max-md:max-w-full"
                      />
                      <div className="flex absolute right-3 top-2/4 z-0 gap-1 items-start self-start -translate-y-2/4 translate-x-[0%]">
                        <div className="flex gap-1 items-start">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/56eee3ac0a9496366ab8df3d3bf1462f4d9f84c0a2c375a801525b8de7183231?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 w-6 aspect-[1.5]" />
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea39ccd242918840887278e7038fe79937d096cd4d809aec288e9b592127700?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 w-6 aspect-[1.5]" />
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ddf5776ca0a70d7c832f9ce40523f246b09d8082f621a94ebd523589e4da156?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 w-6 aspect-[1.5]" />
                        </div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/28ffbef9917f1b113114d72723109c0888173948148d25a195a9f50814e8ee2f?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 w-6 aspect-[1.5]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-start mt-3 leading-none max-md:max-w-full">
                  <div className="flex flex-col w-[236px]">
                    <div className="flex flex-col w-full max-w-[236px]">
                      <label htmlFor="expiration" className="text-base text-gray-800">
                        Expiration
                      </label>
                      <input
                        type="text"
                        id="expiration"
                        placeholder="MM / YY"
                        className="overflow-hidden flex-1 shrink gap-2 self-stretch p-3 mt-1 w-full text-base bg-white rounded-md border-solid shadow border-[length:var(--sds-size-stroke-border)] border-neutral-200 text-zinc-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-[236px]">
                    <div className="flex flex-col w-full max-w-[236px]">
                      <label htmlFor="cvc" className="text-base text-gray-800">CVC</label>
                      <div className="flex overflow-hidden relative gap-2 items-start p-3 mt-1 w-full text-base bg-white rounded-md border-solid shadow border-[length:var(--sds-size-stroke-border)] border-neutral-200 text-zinc-500">
                        <input
                          type="text"
                          id="cvc"
                          placeholder="CVC"
                          className="z-0 flex-1 shrink my-auto basis-0"
                        />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61cb0831d22e5a326cf53d96a4d0ea8adacf64ea92fa3164b3dc42459e6aff68?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain absolute right-3 top-2/4 z-0 shrink-0 self-start w-6 h-6 -translate-y-2/4 aspect-square translate-x-[0%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-3 w-full leading-none whitespace-nowrap max-md:max-w-full">
                  <label htmlFor="country" className="text-base text-gray-800 max-md:max-w-full">
                    Country
                  </label>
                  <div className="flex overflow-hidden relative gap-2 items-start p-3 mt-1 w-full text-base bg-white rounded-md border-solid shadow border-[length:var(--sds-size-stroke-border)] border-neutral-200 text-zinc-500 max-md:max-w-full">
                    <select
                      id="country"
                      className="z-0 flex-1 shrink my-auto basis-0 max-md:max-w-full"
                    >
                      <option value="">Select</option>
                    </select>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39a4333dc964d4f4843082e31f7abe37b2702e26739e3cf897dea2a7147dad15?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain absolute right-3 top-2/4 z-0 shrink-0 self-start w-3 -translate-y-2/4 aspect-[0.67] h-[18px] translate-x-[0%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;