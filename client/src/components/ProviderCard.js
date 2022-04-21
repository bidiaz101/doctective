import React, { useState, useEffect } from 'react'

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

    const { picture, name, gender, cell, email, location } = provider

    function formatTitle(nameObj, gender){
        const { title, first, last } = nameObj
        return `${title}. ${first} ${last} ${gender === 'female' ? '♀️' : '♂️'}`
    }

    function formatLocation(locationObj){
        const { street, city, state, country, postcode } = locationObj
        return `${street.number} ${street.name}, ${city}, ${state}, ${postcode}, ${country}`
    }

    return (
        <div className='card'>
            <div className='info-wrap'>
                <div>
                    <img src={picture.medium} alt={formatTitle(name, gender)} />
                </div>
                <div>
                    <h2>{formatTitle(name, gender)}</h2>
                    <p>📧 {email}</p>
                    <p>{formatLocation(location)}</p>
                    <p>Favorite XKCD comic: {
                        status === 'loading' ? 
                            <span>Loading...</span> 
                        : 
                            <a href={comic.img} target="_blank" rel="noreferrer noopener">{comic.title}</a>
                    }</p>
                </div>
            </div>
            <div>
                <div className='phone'>
                    <span>☎️ {cell}</span>
                </div>
            </div>
        </div>
    )
}

export default ProviderCard
