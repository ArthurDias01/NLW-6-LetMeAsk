import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import logoImg from '../assets/images/logo.svg';
import logoDarkImg from '../assets/images/logo_dark.svg';

import '../styles/auth.scss'
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';



export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const { theme } = useTheme();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
    history.push(`/rooms/${firebaseRoom.key}`)
  }


  return (
    <div id="page-auth" className={theme}>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          {theme === 'light' ? (
            <img src={logoImg} alt='LetMeAsk' />
          ) : (
            <img src={logoDarkImg} alt='LetMeAsk' />
          )
          }
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar na Sala
            </Button>
          </form>
          <p> Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link> </p>
        </div>
      </main>
    </div>
  )
}
