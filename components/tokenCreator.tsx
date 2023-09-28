
import { useAccount } from "wagmi"
import { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import { erc20 } from "../modules/erc20";
import { useEffect } from "react";

export default function TokenCreator(){
  const signerWagmi = useSigner();
  const [TokenName, setTokenName] = useState("MyToken");
  const [Symbol, setSymbol] = useState("MYT");
  const [Premint, setPremint] = useState(1);
  const [mintable, setmintable] = useState(true);
  const [burnable, setburnable] = useState(true);
  const [pausable, setpausable] = useState(true);
  const [permit, setpermit] = useState(false);
  const [votes, setvotes] = useState(false);
  const [flashMinting, setflashMinting] = useState(true);
  const [snapshots, setsnapshots] = useState(false);
  const [License, setLicense] = useState("MIT");

  const Features = {
    mintable: mintable,
    burnable: burnable,
    pausable: pausable,
    permit: permit,
    votes: votes,
    flashMinting: flashMinting,
    snapshots: snapshots,
  };

  const [contract, setContract] = useState(
    `
    // SPDX-License-Identifier: MIT
     pragma solidity ^0.8.9;
     
     import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
     
     contract MyToken is ERC20 {
         constructor() ERC20("MyToken", "MTK") {}
     }
    `
  );
  const [ABI, setABI]:any = useState(null);
  const [ByteCode, setByteCode] = useState(null);

  useEffect(() => {
    getCode();
  }, [
    TokenName,
    Symbol,
    Premint,
    mintable,
    burnable,
    pausable,
    permit,
    votes,
    flashMinting,
    snapshots,
    License,
  ]);

  const getCode = async () => {
    const code = await erc20(TokenName, Symbol, Premint, Features, License);
    setContract(code);
  };
  const compile = async () => {
    const res = await axios.get(
      "https://compile.luen.online/compile?code=" + btoa(contract)
    );
    setABI(JSON.stringify(res.data.abi) || null);
    setByteCode(res.data.bytecode || null);
    console.log(res.data);
    
  };

  async function deploy() {
    const provider = new ethers.providers.Web3Provider(signerWagmi);
    const signer = provider.getSigner();
    const contractFactory = new ethers.ContractFactory(ABI, ByteCode, signer);
    try {
      const deployedContract = await contractFactory.deploy();
      console.log("Contract deployed at:", deployedContract.address);
    } catch (error) {
      console.error("Error deploying contract:", error);
    }
  }

  const handleNameChange = (e:any) => {
    const newValue = e.target.value.replace(/\s/g, '');
    setTokenName(newValue);
  };

  const handleSymbolChange = (e:any) => {
    const newValue = e.target.value.replace(/\s/g, '');
    setSymbol(newValue);
  };

  const handleInputChange = (event:any) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      eval(`set${name}(${checked})`);
    } else {
      eval(`set${name}("${value}")`);
    }
  };

  const handlePremintChange =(e:any)=>{
    const newValue = e.target.value;

    if (newValue.startsWith('0') && newValue.length > 1) {
        setPremint(newValue.substring(1));
    } else {
        setPremint(newValue);
    }
  }


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
                value={TokenName}
                onChange={handleNameChange}
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
                onChange={handleSymbolChange}
                value={Symbol}
                type="text"
                id="symnol"
                name="symbol"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-xs text-gray-500 mt-1">
                Choose a symbol for your token
              </p>
            </div>
            {/* Token Decimal 
            
             
            */}
           
            {/* Token Supply */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Token Supply
              </label>
              <input
                onChange={handlePremintChange}
                value={Premint}
                type="number"
                id="supply"
                name="supply"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-xs text-gray-500 mt-1">
                Insert the premint.
              </p>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
               License
              </label>
              <input
                onChange={handleInputChange}
                type="license"
                value={License}
                id="decimal"
                name="decimal"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-xs text-gray-500 mt-1">
                Insert the decimal precision of your token.
              </p>
            </div>
            {/* Button Area */}
            <div className="p-2 w-full">
            {ABI != null ? 
                <button type="button" onClick={deploy} className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Deploy
                </button>
                :
                <button onClick={compile} className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Compile
              </button>
            }
              
            </div>

            <div className="flex justify-normal mt-10">
        <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xs text-right">Button
         <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg> </button>
        <button className="ml-4 inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-xs">Button</button>
      </div>
          </div>
        </div>
      </section>
    )
}