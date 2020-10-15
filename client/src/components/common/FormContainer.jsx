import React from 'react'
import Link from './Link';
const FormContainer = ({children, title, alternateText, alternateLink}) => {
    return (
        <div className="container mx-auto absolute max-w-full h-full w-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-1/4 md:w-1/2 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        {title}
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                      {children}
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <Link text={alternateText} link={alternateLink}/>
                </div>
              </div>
            </div>
          </div>
    )
}

export default FormContainer
