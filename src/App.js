import './App.css';
import Counter from './Counter/CounterCC';
// import Counter from './Counter/CounterFC';
import Title from './Title/TitleCC';
// import Title from './Title/TitleFC';

function App() {
  const handleIncrement = () => {
    console.log('Incremented!');
  }

  return (
    <div className="App">

      <Title message='Happy Bedtime!' />

      <Counter animal='Sheep' onIncrement={handleIncrement} />

    </div>
  );
}

export default App;
