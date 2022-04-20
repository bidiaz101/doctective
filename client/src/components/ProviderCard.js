import React, { useState, useEffect} from 'react'

function ProviderCard({ provider }) {
    const [comic, setComic] = useState({
        img: '',
        title: ''
    })
    const [status, setStatus] = useState('idle')

    useEffect(() => {
        setStatus('loading')
        fetch('/comics/random')
          .then(resp => resp.json())
          .then(data => {
              const { title, img } = data
              setComic({
                  title: title,
                  img: img
              })
              setStatus('idle')
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
        <div className='card'>
            <div className='info-wrap'>
                <div>
                    <img src={picture.medium} alt={formatName(name)} />
                </div>
                <div>
                    <h2>{formatName(name)}</h2>
                    <p>Gender: {gender}</p>
                    <p>Email: {email}</p>
                    <p>Address: {formatLocation(location)}</p>
                    <p>Favorite XKCD comic: {
                        status === 'loading' ? 
                            <p>Loading...</p> 
                        : 
                            <a href={comic.img} target="_blank" rel="noreferrer noopener">{comic.title}</a>
                    }</p>
                </div>
            </div>
            <div>
                <p className='phone' >☎️ {cell}</p>
            </div>
        </div>
    )
}

export default ProviderCard
