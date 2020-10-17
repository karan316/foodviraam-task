import React from 'react'

const Input = ({field, placeholder, label, type, value, autoComplete, ...props}) => {
  
    return (
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            {label}
          </label>
          <input {...props} {...field} type={type} autoComplete={autoComplete} placeholder={placeholder} className="px-3 py-3 bg-white rounded shadow border border-grfocus:outline-none focus:border-indigo-500 w-full text-base px-4 py-2 mb-4" style={{ transition: "all .15s ease" }}/>
        </div>
    )
}

export default Input
