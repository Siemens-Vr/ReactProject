// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Assurez-vous que l'URL correspond à celle de votre serveur

function Socket() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Écoute des messages du serveur
    socket.on('message', (message) => {
      setChat((prevChat) => [...prevChat, message]);
    });

    // Nettoyage lorsque le composant est démonté
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    // Envoyer un message au serveur
    socket.emit('message', message);
    setMessage(''); // Effacer l'input
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {chat.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Socket;