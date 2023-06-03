import React, { useState } from 'react';

function Temperature({ temperature }) {
  return (
    <div>
      {temperature > 30 ? (
        <p>It's hot!</p>
      ) : temperature > 20 ? (
        <p>It's warm!</p>
      ) : (
        <p>It's cool!</p>
      )}
    </div>
  );
}

function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function DataDisplay({ data }) {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.property1 || '-'}</td>
            <td>{item.property2 || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const data = [
  { property1: 'Value 1', property2: 'Value 2' },
  { property1: 'Value 3', property2: 'Value 4' },
  // Add more data objects as needed
];

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Temperature temperature={25} />
      <FruitList fruits={['apple', 'banana', 'cherry']} />
      <DataDisplay data={data} />
      <Counter />
    </div>
  );
}

export default App;


