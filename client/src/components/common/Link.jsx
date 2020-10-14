import React from 'react'

const Link = ({text, link}) => {
    return (
        <div className="w-1/2">
            <a
                href={link}
                onClick={e => e.preventDefault()}
                className="text-gray-600 text-2xl"
            >
                <small>{text}</small>
            </a>
        </div>
    )
}

export default Link
