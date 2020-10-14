import React from 'react'

const Input = ({placeholder, label, type}) => {
    return (
        <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          {label}
                        </label>
                        <input class="px-3 py-3 bg-white rounded shadow border border-gray-400 focus:outline-none focus:border-indigo-500 w-full text-base px-4 py-2 mb-4" style={{ transition: "all .15s ease" }} placeholder={placeholder} type={type}/>
                      </div>
    )
}

export default Input
