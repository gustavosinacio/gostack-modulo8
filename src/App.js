import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const storagedTechs = JSON.parse(localStorage.getItem('techs'));

    if (storagedTechs) {
      setTech([...storagedTechs]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  const handleAdd = useCallback(() => {
    setTech([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  return (
    <>
      <ol>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ol>
      <strong>You added {techSize} tecnologies</strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={event => setNewTech(event.target.value)}
      />
      <br />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
