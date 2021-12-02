import logo from './logo.svg';
import './App.css';
import Team from './components/Team';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/team" element={<Team/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
