import React, { useState } from 'react'

const Add = () => {

    const [query, setQuery] = useState('')

    const onChange = (e) =>{
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-wrapper'>
                        <input
                        value={query}
                        onChange={onChange}
                        type='text' placeholder='Search for a movie'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add