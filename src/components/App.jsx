import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute';
import UserProvider from './Context/UserContext';
import Auth from './CustomForms/Auth';
import AuthForm from './CustomForms/AuthForm';
import MemeForm from './CustomForms/MemeForm';
import './App.css';
import MemeProvider from './Context/MemeContext';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route index element={<AuthForm mode="signin" />} />
            <Route path="signup" element={<AuthForm mode="signup" />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<MemeProvider />}>
              <Route path="meme" element={<MemeForm />} />
            </Route>
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}
