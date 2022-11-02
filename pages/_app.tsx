import type { AppProps } from 'next/app'
import '../styles/globals.css'

import {
  ConnectKitButton,
  ConnectKitProvider,
  getDefaultClient,
} from 'connectkit'
import { createClient, WagmiConfig } from 'wagmi'

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID

const client = createClient(
  getDefaultClient({
    appName: 'Your App Name',
    infuraId,
  })
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Component {...pageProps} />
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
