import './App.css';
import Navbar from './components/Nav';
import Bio from './components/Bio';
import World from './components/World';
import Author from './components/Author';
import Characters from './components/Characters';
import Title from './components/Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './images/background.svg';

function App() {
  return (
    <main>
      <img src={Background} className="background-2" alt="" />
      <Navbar/>
      <Title/>
      <Bio/>
      <World/>
      <Characters/>
      <Author/>
    </main>
  );
}

export default App;
