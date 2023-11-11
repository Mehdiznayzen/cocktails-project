import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="error-page grid items-center justify-center my-20">
            <div className="info-container grid items-center justify-center gap-6">
                <h1 className='text-3xl font-bold tracking-widest'>Oops ! It's A Dead End</h1>
                <button className='bg-green-900 text-white h-[40px] rounded-lg font-semibold tracking-widest'><Link to={'/'}>Back Home</Link></button>
            </div>
        </div>
    )
}

export default Error