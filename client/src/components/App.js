import '../App.css';
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
      {providerCards}
    </div>
  );
}

export default App;
