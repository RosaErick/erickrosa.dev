import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { supabase } from '../db';



export default function Guestbook() {
  const { data: session } = useSession();
  const [message, setMessage] = useState('');


    console.log("SESSION: ", session);
    console.log('supabase: ', supabase)

  async function handleSend() {
    if (session) {
      const { data, error } = await supabase
        .from('messages')
        .insert([{ content: message, user_id: session.user.email }]);
      if (error) console.error('error', error);
    } else {
      signIn();
    }
  }

  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
    >
      <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
      <button onClick={handleSend}>Send Message</button>
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      )}
    </div>
  );
}
