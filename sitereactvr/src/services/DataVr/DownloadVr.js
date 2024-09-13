// DownloadButton.js
import React from 'react';

export default function DownloadButton() {

  const handleDownload = () => {
    fetch('http://localhost:5001/api-dwl')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.blob(); // Convertir la réponse en Blob
      })
      .then(blob => {
        // Créer un lien temporaire pour déclencher le téléchargement
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'EV 70 FPS.apk'; // Nom du fichier à télécharger
        document.body.appendChild(a);
        a.click(); // Simuler le clic sur le lien pour déclencher le téléchargement
        document.body.removeChild(a); // Retirer le lien temporaire
        window.URL.revokeObjectURL(url); // Libérer la mémoire
      })
      .catch(error => {
        console.error('Error during download:', error);
        alert('Failed to download file: ' + error.message); // Afficher un message d'erreur
      });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
}
