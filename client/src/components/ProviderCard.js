import React, { useState, useEffect} from 'react'

function ProviderCard({ provider }) {
    const [comic, setComic] = useState('')

    useEffect(() => {
        fetch('/comics/random')
          .then(resp => resp.json())
          .then(data => console.log(data))
    }, [])

    const { picture, name, gender, cell, email, location} = provider

    return (
        <h1>ProviderCard</h1>
    )
}

export default ProviderCard
