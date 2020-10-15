import React from 'react'
import { Link as RouterLink } from "react-router-dom";
const Link = ({text, link}) => {
    return (
        <div className="w-1/2">
            <RouterLink
                to={link}
                className="text-gray-600 text-2xl"
            >
                <small>{text}</small>
            </RouterLink>
        </div>
    )
}

export default Link
