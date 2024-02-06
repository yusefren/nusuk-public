import Header from './components/Header';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
       <div className="bg-white rounded-lg">
        <Tabs />
        <Body />
        </div>

      <NavBar />
    </div>
  );
}

export default App;
