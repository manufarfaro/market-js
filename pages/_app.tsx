import React from 'react';
import { AppProps } from 'next/app'
import { SearchProvider } from '../components/SearchContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SearchProvider>
            <Component {...pageProps} />
        </SearchProvider>
    );
};
