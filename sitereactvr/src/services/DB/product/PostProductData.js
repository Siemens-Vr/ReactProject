import React, { useState } from 'react';
import {post} from '../../axios';

function PostProductData() {
  // Créez des états distincts pour chaque champ
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoyer les données au serveur Node.js
      const response = await post('/api-database/product', { name, price });
      console.log('Réponse du serveur:', response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Prix:
          <input type="text" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default PostProductData;
