import copyImg from '../../assets/Images/copy.svg';
import {RoomCodeButton} from './styles'

type RoomCodeProps = {
  code: string;
}

export default function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <RoomCodeButton className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </RoomCodeButton>
  )
}
