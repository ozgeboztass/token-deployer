import { useAccount } from "wagmi"

export default function TokenCreator(){

    return(
        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex ">
          {/* Token Creator section */}
          <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mx-auto md:ml-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Token Creator
            </h2>
            {/* Token Name */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Token Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-xs text-gray-500 mt-1">
                Choose a name for your token.
              </p>
            </div>
            {/* Token Symbol */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Token Symbol
              </label>
              <input
                type="text"
                id="symnol"
                name="symbol"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-xs text-gray-500 mt-1">
                Choose a symbol for your token
              </p>
            </div>
            {/* Token Decimal */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Token Decimal
              </label>
              <input
                type="number"
                id="decimal"
                name="decimal"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-xs text-gray-500 mt-1">
                Insert the decimal precision of your token.
              </p>
            </div>
            {/* Token Supply */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Token Supply
              </label>
              <input
                type="number"
                id="supply"
                name="supply"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-xs text-gray-500 mt-1">
                Insert the maximum number of tokens available.
              </p>
            </div>
            {/* Button Area */}
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}