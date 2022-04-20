import React, { useState, useEffect } from 'react'
import ProviderCard from './ProviderCard';

function App() {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(resp => resp.json())
      .then(data => setProviders(data.results))
  }, [])

  const providerCards = providers.map(provider => {
    return <ProviderCard key={provider.phone} provider={provider} />
  })

  return (
    <div className="App">
      <h1>Doctective</h1>
      <p>Results</p>
      <div className='grid-wrap'>
        <div className='grid'>
          {providerCards}
        </div>
      </div>
    </div>
  );
}

export default App;
