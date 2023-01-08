import '@fontsource/mohave/400.css';
import '@fontsource/mohave/500.css';
import '@fontsource/mohave/600.css';
import '@fontsource/mohave/700.css';
import '@fontsource/roboto-slab/400.css';
import '@fontsource/roboto-slab/600.css';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';
import theme from '../theme/index';

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
