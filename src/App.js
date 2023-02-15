import api from './api';
import './App.css';

function App() {
  const placeholder = "Search here"
  function ok() {
    const data = api(placeholder);
    console.log(data);
  }
  return (
    <div className="App">
      <input placeholder={placeholder} />
      <button onSubmit={ok()}/>
      <div className = "data">
          
      </div>
    </div>
  );
}

export default App;
