import './App.css';
import Counter from './Counter/CounterCC';
// import Counter from './Counter/CounterFC';
import Welcome from './Title/TitleCC';
// import Welcome from './Welcome/WelcomeFC';

function App() {
  return (
    <div className="App">

      <Welcome message='Happy Bedtime!' />

      <Counter animal='Sheep' />

    </div>
  );
}

export default App;
