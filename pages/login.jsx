import { Box } from '@chakra-ui/react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useEffect, useState } from 'react';

const LoginPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('test').select('*');
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  return (
    <Box pt={200} mx={50}>
      {!user ? (
        <Auth
          redirectTo="http://localhost:3000/"
          supabaseClient={supabaseClient}
          providers={['google', 'github']}
          socialLayout="horizontal"
          appearance={{
            theme: ThemeSupa,
            style: {
              container: {},
            },
          }}
        />
      ) : (
        <>
          <button onClick={() => supabaseClient.auth.signOut()}>
            Sign out
          </button>
          <p>user:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <p>client-side data fetching with RLS</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </Box>
  );
};

export default LoginPage;
