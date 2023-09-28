import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

import { customRPC } from '../rpc/customRpc'


const { chains, provider, webSocketProvider } = configureChains(
  [customRPC],
  [jsonRpcProvider({
    rpc: (chain) => ({
      http: `https://testnet.rapidrpc.com/`,
    }),
  }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'Application Name',
  projectId: 'Project Id :)) ',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
