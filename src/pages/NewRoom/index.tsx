import { useState, FormEvent } from 'react';
import {Link, useHistory} from 'react-router-dom'
import illustration from '../../assets/Images/illustration.svg';
import logoImg from '../../assets/Images/logo.svg';
import {Button} from '../../components/Button';
import {useAuth} from '../../hooks/useAuth'
import { database } from '../../services/firebase';
import {AuthContainer, Aside, Main, MainContent} from './styles'

export function NewRoom() {
  const {user} = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    
    if (newRoom.trim() === '')
    {
      return;
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input type="text" placeholder="Nome da sala" onChange={event => setNewRoom(event.target.value)} value={newRoom}/>
            <Button type="submit">
                Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </MainContent>
      </Main>
    </AuthContainer>
  )
}
