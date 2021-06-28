import { useEffect } from 'react';
import { useState } from 'react';
import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);

    setShowCopyMessage(true);
  }

  useEffect(() => {
    if (showCopyMessage) {
      setTimeout(() => {setShowCopyMessage(false)}, 2000);
    }
  }, [showCopyMessage]);

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
      <span className="copy-message" style={{opacity: `${showCopyMessage ? '1' : '0'}`}}>
        Código copiado!
      </span>
    </button>
  );
}
