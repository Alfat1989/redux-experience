import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
