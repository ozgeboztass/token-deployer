export const customRPC = {
    id: 9009,
    name: "RAPID",
    network: "RAPID",
    iconUrl: "/wrapid.png",
    nativeCurrency: {
        decimals: 18,
        name: "RAPID",
        symbol: "RAPID",
    },
    rpcUrls: {
        public: { http: ["https://testnet.rapidrpc.com/"] },
        default: { http: ["https://testnet.rapidrpc.com/"] },
    },
    blockExplorers: {
        etherscan: { name: "rapidscan", url: "https://rapidscan.io/" },
        default: { name: "rapidscan", url: "https://rapidscan.io/" },
    },
};
