import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SearchProvider } from '../context/SearchContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </SearchProvider>
    </QueryClientProvider>
    
  );
}

export async function getStaticProps() {
  return 
}

export default MyApp
