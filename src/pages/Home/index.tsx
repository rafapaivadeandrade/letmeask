import { useHistory } from 'react-router-dom'
import illustration from '../../assets/Images/illustration.svg';
import googleIconImg from '../../assets/Images/google-icon.svg';
import logoImg from '../../assets/Images/logo.svg';
import { Button } from '../../components/Button';
import {useAuth} from '../../hooks/useAuth'
import { FormEvent, useState } from 'react';

import { database } from '../../services/firebase';

import {AuthContainer, Aside, Main, MainContent, CreateRoomButton} from './styles'

export function Home() {
  const {user,signInWithGoogle} = useAuth()
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user)
    {
     await signInWithGoogle();
    }
    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '')
    {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists())
    {
      alert('Room does not exist.')
      return
    }

    if (roomRef.val().endedAt)
    {
      alert('Room already closed.')
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <AuthContainer>
      <Aside>
        <img src={illustration} alt="Illustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>
      <Main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <CreateRoomButton onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com Google
          </CreateRoomButton>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form onSubmit={handleJoinRoom}>
            <input type="text" placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)} value={roomCode}/>
            <Button type="submit">
                Entrar na sala
            </Button>
          </form>
        </MainContent>
      </Main>
    </AuthContainer>
  )
}
