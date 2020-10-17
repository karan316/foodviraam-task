import React from 'react'

const Button = ({buttonText, type, disabled}) => {
    return (
        <div className="text-center mt-6">
          <button
          disabled={disabled}
            className="bg-indigo-700 text-white active:bg-indigo-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            type={type}
            style={{ transition: "all .15s ease" }}
          >
            {buttonText}
          </button>
        </div>
    )
}

export default Button
