/* import styles from "./Login.module.css"; */
import { supabase } from '../../lib/supabaseClient';

type Props = {}

function Login({}: Props) {
    const handleGoogleLogin = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin + '/app'
            }
        });
        (error) && console.error("Error al iniciar sesion: ", error.message);
    };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleGoogleLogin} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Iniciar sesión con Google
      </button>
    </div>
  );
}

export default Login