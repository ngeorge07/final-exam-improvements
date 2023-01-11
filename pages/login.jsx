import { Box } from '@chakra-ui/react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useRouter } from 'next/router';

const Login = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  // useEffect(() => {
  //   user && router.push('/profile');
  // }, [user, router]);

  return (
    <Box pt={200} mx={50}>
      <Auth
        redirectTo="http://localhost:3000/profile"
        supabaseClient={supabaseClient}
        providers={['google', 'linkedin']}
        socialLayout="horizontal"
        theme="dark"
        view="sign_up"
        appearance={{
          theme: ThemeSupa,
        }}
      />
    </Box>
  );
};

export default Login;
