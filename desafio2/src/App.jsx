import { useState } from 'react'
import { FaStar } from "react-icons/fa6";

function App() {
  const [list, setList] = useState([{
    nome: 'kassio',
    email: "kkkk@kkk.com",
    comentario: 'kkkkkkkkkkkkk',
    nota: <FaStar/>
  }])
  const [newComent, setNewComent] = useState({
    nome: 'kassio',
    email: "kkkk@kkk.com",
    comentario: 'kkkkkkkkkkkkk',
    nota: '1'
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setList(anterio => [...anterio, newComent])
    
  }

  const generatorStar = (nota) => {
    const starNote = []
    for (let i = 0; i < Number(nota); i++ ) {
      starNote.push(<FaStar key={Math.random}/>)
    }
    return starNote
  }

  const handleChance = (e) => {
    const {value, name} = e.target;
    if (name === 'nota') {
     return setNewComent((anterior) => ({...anterior,[name] : generatorStar(value)}))
    }
    return setNewComent((anterior) => ({...anterior,[name] : value}))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label htmlFor="inputName">
          <input type="text" id="inputName" name="nome"
          onChange={handleChance} 
          placeholder="nome"/>
        </label>
        <label htmlFor="inputEmail">
          <input type="text" id="inputEmail" name="email"
          onChange={handleChance} 
          placeholder="apelido@email.algumacoisa" />
        </label>
        <label htmlFor="inputComents">
          <textarea rows='4' type="" id="inputComents" name="comentario"
          onChange={handleChance} 
          placeholder="comente...."/>
        </label>
        <select 
        onChange={handleChance} 
        name="nota">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">submit</button>
      </form>
      <section>
        {list.map((value) => (
          <div key={Math.random}>
            {value.nome}
            <br />
            { value.nota}
            <br />
            {value.comentario}
            </div>
          ))}
      </section>
    </>
  )
}

export default App
