import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array2 = ['Tomar café', 'Caminhar', 'Estudar', 'Almoçar', 'Aula Trybe'];

function App() {
  return array2.map((task) => Task(task));
}

export default App;
