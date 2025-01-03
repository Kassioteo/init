import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCompromisso = {
      name,
      descricao,
      // date: Date(startDate) 
      date: `${(startDate.getMonth() + 1)} - ${startDate.getDate()} - ${startDate.getFullYear()}`
    }
    console.log(newCompromisso)
    setName('')
    setDescricao('')
    setStartDate(new Date())
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input_name">
        <input
          type="text"
          value={name}
          onChange={(input_date) => setName(input_date.target.value)}
          id="input_name"
          placeholder="kassio..."
        />
      </label>
      <label htmlFor="textarea_descricao">
        <textarea
          type="text"
          value={descricao}
          onChange={(input_date) => setDescricao(input_date.target.value)}
          id="textarea_descricao"
          placeholder="reuniao do serviço..."
        />
      </label>
      <label htmlFor="input_date">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="data"
        />
        </label>
        <button type="submit">submit</button>
    </form>
  );
}

export default App;
