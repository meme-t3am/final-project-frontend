import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute';
import Test from './Auth/Test';
import UserProvider from './Context/UserContext';
import Auth from './CustomForms/Auth';
import AuthForm from './CustomForms/AuthForm';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Auth />} >
            <Route index element={<AuthForm mode="signin"/>}/>
            <Route path="signup" element={<AuthForm mode="signup"/>}/>
          </Route>
        </Routes>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<Test />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}
