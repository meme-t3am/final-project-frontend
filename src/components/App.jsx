import { 
  Route,
  BrowserRouter as Router,
  Routes, 
} from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute';
import UserProvider from './Context/UserContext';
import Auth from './CustomForms/Auth';
import AuthForm from './CustomForms/AuthForm';
import MemeForm from './CustomForms/MemeForm';
import './App.css';
import MemeProvider from './Context/MemeContext';
import Layout from './CustomForms/Header/Layout';
import About from './CustomForms/About';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Auth />}>
              <Route index element={<AuthForm mode="signin" />} />
              <Route path="signup" element={<AuthForm mode="signup" />} />
              <Route path="about" element={<About/>}/>
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route element={<MemeProvider />}>
                <Route path="meme" element={<MemeForm />} />
              </Route>
            </Route>
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
}
