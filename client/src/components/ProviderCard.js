import React, { useState, useEffect} from 'react'

function ProviderCard({ provider }) {
    const [comic, setComic] = useState('')

    useEffect(() => {
        const id = Math.ceil(Math.random() * 614)
        fetch(`https://xkcd.com/${id}/info.0.json`)
          .then(resp => resp.json())
          .then(data => console.log(data))
    }, [])

    const { picture, name, gender, cell, email, location} = provider

    return (
        <h1>ProviderCard</h1>
    )
}

export default ProviderCard
