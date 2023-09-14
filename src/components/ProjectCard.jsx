import React from 'react'
import {HashLink} from 'react-router-hash-link'

function ProjectCard({item}) {
  return (
    <>
      <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 lg:grid-cols-1">
        <div classname = "w-1/2">
          <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
              <img src={item.img} alt="" className='w-full' />
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
              </div>
          </div>
        </div>
        <div classname = "w-full pl-16">
          <p className="text-center text-white-500">{item.additionalDescription}</p>
          <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <HashLink smooth to="/aboutmore#aboutmore" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
            More
          </HashLink>
          </div>          
        </div>
      </div>

    {/*
      <div className="flex flex-row items-center py-6">
        <div className="w-1/2">
          <img src={item.img} alt="" className="w-full" />
        </div>
        <div className="w-1/2 pl-4">
          <div>
            <h1 className="font-bold text-3xl">{item.title}</h1>
            <p className="font-bold">{item.description}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{item.additionalDescription}</p>
          </div>
        </div>
      </div>
*/}
    </>

  )
}

export default ProjectCard