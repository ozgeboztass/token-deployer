export default function Navbar (){

    return(
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="w-10 h-10" src="logo.webp"/>
        <span className="ml-3 text-xl">Deployer</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href="/" >Token Creator</a>
      <a className="mr-5 hover:text-gray-900" href="/nftcreator" >Nft Creator</a>
      </nav>
      <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none text-white bg-purple-500 hover:bg-purple-600  rounded text-base mt-4 md:mt-0">
        Connect Wallet
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
    )
}