
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://nodeapplication.s.relevatetechops.com')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>PersonID</th>
            <th>FirstName</th>
            <th>LastName</th>
	    <th>Address</th>
	    <th>City</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.PersonID}>
	      <td>{item.PersonID}</td>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.Address}</td>
	      <td>{item.City}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
