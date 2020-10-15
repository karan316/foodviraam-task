import React from 'react'

const Profile = ({user}) => {
    return (
        <div>
            <div className="text-4xl bold">
               Hello {user.name}!
            </div>
            <div className="text-2xl">
               You are {user.age} years old.
            </div> 
        </div>
    )
}

export default Profile
