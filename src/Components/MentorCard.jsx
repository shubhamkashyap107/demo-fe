import React from 'react'
import {useNavigate} from "react-router-dom"

const MentorCard = ({image, name, description, rating, id}) => {

  const navigate = useNavigate()

  const truncatedName = name.length > 12 ? name.slice(0,12) + "..." : name
  const truncatedDescription = description.length > 40 ? description.slice(0, 40) + "..." : description;

  return (
    <div onClick={() => {
      navigate(`/profile/${id}`)
    }} className='border p-4 rounded-xl bg-[#f9fcff] hover:cursor-pointer w-[230px] my-5'>
        <img className='rounded-lg' src={image} alt={name} />

        <div className='p-1'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold my-2'>{truncatedName}</h3>
                <span>{rating} / 5 ⭐️</span>
            </div>
            <p className='font-light'>{truncatedDescription}</p>
        </div>
    </div>
  )
}

export default MentorCard
