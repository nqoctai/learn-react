import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MyComponent from './component/MyComponent';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Word
        <MyComponent></MyComponent>
      </div>

    );
  }
}


// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();


//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Hello Word with Ngoc Tai
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// }

export default App;
