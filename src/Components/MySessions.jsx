import React from 'react'
import { useSelector } from 'react-redux'

const MySessions = () => {
    const storeData = useSelector((store) => {
        return store.Session
    })

    console.log(storeData)

    return (
        <div className="mt-20 px-4 py-10 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">My Sessions</h2>
            {storeData.length === 0 ? (
                <p className="text-xl text-gray-500 text-center">No sessions available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {storeData.map((session, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex flex-col space-y-3">
                                <div className="font-semibold text-xl text-gray-800">
                                    <strong>Mentor:</strong> {session.mentor}
                                </div>
                                <div className="text-gray-600">
                                    <strong>Date:</strong> {new Date(session.date).toLocaleDateString()}
                                </div>
                                <div className="text-gray-600">
                                    <strong>Time Slot:</strong> {session.timeSlot}
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200">
                                    Join Session
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MySessions
