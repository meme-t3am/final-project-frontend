import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Auth from './CustomForms/Auth';
import AuthForm from './CustomForms/AuthForm';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} >
          <Route index element={<AuthForm/>}/>
        </Route>
      </Routes>
    </Router>
  );
}