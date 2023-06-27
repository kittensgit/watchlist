import React, { useState } from 'react'

const Add = () => {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c59f2a1dc44f5f52bf7cb6a99c494f39&langauge=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }

    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-wrapper'>
                        <input
                            value={query}
                            onChange={onChange}
                            type='text' placeholder='Search for a movie'
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map(movie=>(
                                <li>
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add