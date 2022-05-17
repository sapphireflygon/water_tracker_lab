import { useDarkLightToggle } from './hooks/useDarkLightToggle';
import MainPage from './pages/MainPage';

function App() {

  const darkMode = useDarkLightToggle();

  return (
    <div className={darkMode.isDarkMode ? "dark" : "light"}>
      <button onClick={darkMode.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
