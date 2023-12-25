"use client";
// Install necessary packages: npm install next chakra-ui react-query react-query/devtools

// pages/index.js
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
