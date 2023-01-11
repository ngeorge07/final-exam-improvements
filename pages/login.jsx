import { Box } from '@chakra-ui/react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useRouter } from 'next/router';

const Login = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  user && router.push('/profile');

  return (
    <Box pt={200} mx={50}>
      <Auth
        redirectTo="https://final-exam-improvements.vercel.app/profile"
        supabaseClient={supabaseClient}
        providers={['google', 'linkedin']}
        socialLayout="horizontal"
        theme="dark"
        view="sign_in"
        appearance={{
          theme: ThemeSupa,
        }}
      />
    </Box>
  );
};

export default Login;
