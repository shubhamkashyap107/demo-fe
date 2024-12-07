import React, { useEffect, useState } from 'react'
import MentorCard from './MentorCard'
import { Link } from 'react-router-dom'

const Mentors = () => {

    const[codingMentors, setCodingMentors] = useState([])

    useEffect(() => {

        fetch("https://demo-be-x9vd.onrender.com/mentors?num=6")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setCodingMentors(data)
        })


    }, [])

  return (
    <div className='mt-24'>

        <div className=''>
            <div className='flex items-center gap-3'>
                <h3 className='ml-12 text-3xl w-fit'>Interview Prep</h3>
                <Link to={"/allmentors"} className='text-2xl text-blue-500 underline'>See all</Link>
            </div>
            <div className='flex justify-evenly mt-2'>
                {codingMentors && codingMentors.map((item) => {
                    return <MentorCard id={item.id} rating={item.rating} name={item.name} image={item.portrait} description={item.bio} />
                })}
            </div>
        </div>

        <div className='mt-16'>
            <div className='flex items-center gap-3'>
                <h3 className='ml-12 text-3xl w-fit'>Hot Sellers</h3>
                <Link to={"/allmentors"} className='text-2xl text-blue-500 underline'>See all</Link>
            </div>
            <div className='flex justify-evenly mt-2'>
                {codingMentors && codingMentors.map((item) => {
                    return <MentorCard id={item.id} rating={item.rating} name={item.name} image={item.portrait} description={item.bio} />
                })}
            </div>
        </div>

        <div className='mt-16'>
            <div className='flex items-center gap-3'>
                <h3 className='ml-12 text-3xl w-fit'>Mock Interview</h3>
                <Link to={"/allmentors"} className='text-2xl text-blue-500 underline'>See all</Link>
            </div>
            <div className='flex justify-evenly mt-2'>
                {codingMentors && codingMentors.map((item) => {
                    return <MentorCard id={item.id} rating={item.rating} name={item.name} image={item.portrait} description={item.bio} />
                })}
            </div>
        </div>

        <div className='mt-16'>
            <div className='flex items-center gap-3'>
                <h3 className='ml-12 text-3xl w-fit'>Resume Review</h3>
                <Link to={"/allmentors"} className='text-2xl text-blue-500 underline'>See all</Link>
            </div>
            <div className='flex justify-evenly mt-2'>
                {codingMentors && codingMentors.map((item) => {
                    return <MentorCard id={item.id} rating={item.rating} name={item.name} image={item.portrait} description={item.bio} />
                })}
            </div>
        </div>

        
      
    </div>
  )
}

export default Mentors