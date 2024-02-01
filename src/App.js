import './App.css';
import Counter from './Counter/CounterCC';
// import Counter from './Counter/CounterFC';
import Welcome from './Welcome/WelcomeCC';
// import Welcome from './Welcome/WelcomeFC';

function App() {
  const handleIncrement = () => {
    console.log('Incremented!');
  }

  return (
    <div className="App">

      <Welcome message='Happy Bedtime!' />

      <Counter animal='Sheep' onIncrement={handleIncrement} />

    </div>
  );
}

export default App;
