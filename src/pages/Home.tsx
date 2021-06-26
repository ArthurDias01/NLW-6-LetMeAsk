import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import logoImg from '../assets/images/logo.svg';
import logoDarkImg from '../assets/images/logo_dark.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import lightThemeImg from '../assets/images/sun-color.svg';
import darkThemeImg from '../assets/images/dark-mode.svg';


import { database } from '../services/firebase';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../hooks/useTheme';
import '../styles/auth.scss';


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const { theme, toggleTheme } = useTheme();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();
    if (roomCode.trim() === '') {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get();
    if (!roomRef.exists()) {
      toast.error(`Room doesn't not exists.`);
      return;
    }

    if (roomRef.val().endedAt) {
      toast.error(`Room already closed.`);
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth" className={theme}>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </aside>
      <main>
        <div className="main-content">
          {theme === 'light' ? (
            <img src={logoImg} alt='LetMeAsk' />
          ) : (
            <img src={logoDarkImg} alt='LetMeAsk' />
          )
          }
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua Sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na Sala
            </Button>
          </form>
        </div>
        <Button className="ButtonThemeToggle" onClick={toggleTheme}>
          {theme === 'light' ? (
            <img src={darkThemeImg} alt="Alterar tema para dark" />
          ) : (
            <img src={lightThemeImg} alt="Alterar tema para light" />
          )}

        </Button>
      </main>
    </div>
  )
}
