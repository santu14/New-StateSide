
import LoginPage from "./Components/Pages/LoginPage"
import AuthState from "./Components/AuthForm/isAuthContext";
import AuthWrapper from "./AuthWrapper";

function App() {
  return (
    <div className="App">
      <AuthState>
        <AuthWrapper/>
     
      </AuthState>
    </div>
  );
}

export default App;
