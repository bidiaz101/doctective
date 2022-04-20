import React, { useState, useEffect} from 'react'

function ProviderCard({ provider }) {
    const [comic, setComic] = useState({
        img: '',
        title: ''
    })

    useEffect(() => {
        fetch('/comics/random')
          .then(resp => resp.json())
          .then(data => {
              const { title, img } = data
              setComic({
                  title: title,
                  img: img
              })
          })
    }, [])

    const { picture, name, gender, cell, email, location} = provider

    function formatName(nameObj){
        const {title, first, last} = nameObj
        return `${title}. ${first} ${last}`
    }

    function formatLocation(locationObj){
        const { street, city, state, country, postcode } = locationObj
        return `${street.number} ${street.name}, ${city}, ${state}, ${postcode}, ${country}`
    }

    return (
        <div>
            <img src={picture.medium} alt={formatName(name)} />
            <h2>{formatName(name)}</h2>
            <p>{gender}</p>
            <p>{cell}</p>
            <p>{email}</p>
            <p>{formatLocation(location)}</p>
        </div>
    )
}

export default ProviderCard
