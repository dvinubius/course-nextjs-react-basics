import './App.css';
import Counter from './Counter/CounterCC';
import GradientBorder from './GradientBorder/GradientBorder';
// import Counter from './Counter/CounterFC';
import Title from './Title/TitleCC';
// import Title from './Title/TitleFC';

function App() {
  return (
    <div className="App">

      {/* <Title message='Happy Bedtime!' /> */}
      <GradientBorder />

      <Counter animal='Sheep' />

    </div>
  );
}

export default App;
