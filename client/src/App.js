import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import { LoginForm } from './Login/LoginForm';
import { Loader } from './components/Loader';
import { Dashboard } from './Dashboard';
import { Payroll } from './Dashboard/Payroll';
import { Settings } from './Dashboard/Settings';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="payroll" element={<Payroll />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;


const Login = ({ }) => {
  return <LoginContainer>
    <LoginForm />
  </LoginContainer>
}

const LoginContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`