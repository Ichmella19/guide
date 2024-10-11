import React from 'react'

const CityComponent = ({title, id, focusCity, handleCity}) => {
    return (
        <li onClick={()=>handleCity(id)} 
            className={`${id==focusCity ? 'bg-[#7BBCB0] text-white': 'bg-transparent text-black'} px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0] hover:bg-[#7BBCB0] hover:text-white transition-all cursor-pointer`}
        >
            {title}
        </li>
    )
}

export default CityComponent