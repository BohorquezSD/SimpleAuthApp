import React from 'react';

export default function Logout() {
    alert("Ah cerrado su sesión")
    localStorage.removeItem('token');
    window.location.reload()
  return(
    <h2>Adios</h2>
  );
}