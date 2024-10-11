import './App.css';
import ArrayProduct from './ArrayProduct.json';
import ProductItem from './componets/ProductItem';

function App() {
  return (
    <div className="App">
      <ul className="App-section">

      {ArrayProduct.map(({ i, ...item }) => (
        <ProductItem item={item} key={i} />
      ))}

      </ul>
    </div>
  );
}

export default App;
