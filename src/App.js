import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Header />

      <h1>Hola Tinto</h1>

      <Button colorClass="btn-3">
        <h1>Mi Boton</h1>
      </Button>
    </div>
  );
}

export default App;
