import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import './styles/globals.css'
import './styles/fonts.css'

function App() {
 return (
    <AuthProvider>
    <Routes />
  </AuthProvider>
 );
}

export default App;