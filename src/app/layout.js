"use client"
import { PersistGate } from 'redux-persist/integration/react';
import Header from "./_components/header";
import { Providers } from "./store/providers";
import { persistor } from './store/store';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <PersistGate loading={null} persistor={persistor}>
            <Header/>
            {children}
          </PersistGate>
        </Providers>
      </body>
    </html>
  );
}
