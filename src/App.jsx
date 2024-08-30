import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';

function App() {
  const [count, setCount] = useState(0)

  return (

    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/1QvVS5xfpKQTHGjpSctjfAl-p5x5Wn13"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />

          { /* Your app's components go here, nested within the context providers. */}
          {/* <div>Hello there</div> */}
          
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App
