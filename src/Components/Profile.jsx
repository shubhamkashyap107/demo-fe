import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal'; // Assuming you're using react-modal or similar
import CustomCalendar from './Calender';
import Loader from './Loader';
import { useDispatch } from 'react-redux';
import { addSession } from '../Utils/SessionSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [mentorData, setMentorData] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(''); // New state for the selected time slot
  const [availableSlots, setAvailableSlots] = useState([]); // For storing available slots


  

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://demo-be-x9vd.onrender.com/profile?id=${id}`);
      const data = await res.json();
      setMentorData(data);
      setAvailableSlots(data.availableSlots); // Assuming availableSlots is part of mentor data
    };

    getData();
  }, [id]);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const handleConfirm = () => {
    if (selectedDate && selectedTimeSlot) {
      console.log('Date Confirmed:', selectedDate);
      console.log('Time Slot Confirmed:', selectedTimeSlot);
      dispatch(addSession({ date: selectedDate, timeSlot: selectedTimeSlot, mentor : mentorData.name }));
      toggleModal();
    } else {
      alert('Please select a date and time slot before confirming.');
    }
  };

  return mentorData ? (
    <div className="bg-gray-100 mt-20">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6 sticky top-20">
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/94.jpg"
                  alt="Profile"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                />
                <h1 className="text-xl font-bold">{mentorData?.name}</h1>
                <p className="text-gray-700 text-center">{mentorData?.bio}</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Contact
                  </a>
                  <button
                    onClick={toggleModal}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                  >
                    Book a session
                  </button>
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
              <div className="flex justify-center items-center gap-6 my-6">
                <a
                  className="text-gray-700 hover:text-orange-600"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Booking a Session */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Book a Session"
        className="bg-white w-full max-w-md mx-auto p-6 rounded-3xl shadow-xl relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Book Your Session
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Select your preferred date and time to schedule a session with {mentorData?.name}.
        </p>

        {/* Custom Calendar */}
        <CustomCalendar
          availableSlots={availableSlots}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setSelectedTimeSlot={setSelectedTimeSlot} // Pass down the setter for time slot
        />

        <div className="mt-6 flex justify-center space-x-6">
          <button
            className="px-6 py-3 bg-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-400 transition-all duration-200"
            onClick={toggleModal}
          >
            Cancel
          </button>
          <button
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-200"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  ) : (
    <Loader />
  );
};

export default Profile;
