import React, { useEffect, useState } from 'react'
import MentorCard from './MentorCard'

const AllMentors = () => {

    const[mentorsData, setMentorsData] = useState([])


    useEffect(() => {
        const getData = async () => {

            const res = await fetch("http://localhost:8080/mentors")
            const data = await res.json()

            setMentorsData(data)
            console.log(data)

        }

        getData()
    }, [])


  return (
    <div className='mt-24 w-[90%] mx-auto'>

        <h1 className='font-bold text-3xl mx-5'>Some random heading</h1>

        <div className='flex flex-wrap justify-evenly mt-5'>

            {mentorsData && mentorsData.map((item) => {
                return <MentorCard id={item.id} rating={item.rating} name={item.name} image={item.portrait} description={item.bio} />
            })}

        </div>
    </div>
  )
}

export default AllMentors