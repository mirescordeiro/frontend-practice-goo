import { Route, Routes, Link } from 'react-router-dom';
import Desi from './pages/Desi';
import Lucky from './pages/Lucky';

function App(): JSX.Element {
  return (
    <div>
      <header>
        <h1>Maurene Goo</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/um-lugar-so-nosso">Lucky 📷</Link>
          </li>
          <li>
            <Link to="/isso-que-a-gente-chama-de-amor">Desi Lee 📒</Link>
          </li>
        </ul>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/um-lugar-so-nosso" element={<Lucky />} />
          <Route path="/isso-que-a-gente-chama-de-amor" element={<Desi />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
