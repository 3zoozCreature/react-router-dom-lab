import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const initialMailboxes = [
  { id: 1, boxOwner: 'Alex', boxSize: 'Small' },
  { id: 2, boxOwner: 'Taylor', boxSize: 'Medium' },
  { id: 3, boxOwner: 'Jordan', boxSize: 'Large' },
];

const Home = () => (
  <main>
    <h1 className="page-title">Mailbox App</h1>
    <p className="home-copy">
      Browse the mailbox list, open any box to see its details, or create a new
      mailbox from the form.
    </p>
  </main>
);

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialMailboxes);

  const addBox = (newMailboxData) => {
    setMailboxes((prevMailboxes) => [
      ...prevMailboxes,
      {
        ...newMailboxData,
        id: prevMailboxes.length + 1,
      },
    ]);
  };

  return (
    <div className="app-shell">
      <div className="panel">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mailboxes"
            element={<MailboxList mailboxes={mailboxes} />}
          />
          <Route
            path="/new-mailbox"
            element={<MailboxForm addBox={addBox} />}
          />
          <Route
            path="/mailboxes/:mailboxId"
            element={<MailboxDetails mailboxes={mailboxes} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
