import './App.css';
import Navbar from './Components/Navbar';
import data from './data'
import List from './Components/List'

function App() {
  const cards = data.map((item) => {
    return <List key={item.key} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
      </div>
   
  );
}

export default App;
