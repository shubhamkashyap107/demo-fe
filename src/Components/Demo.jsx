import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Modal from "react-modal";
import Calendar from "./Calender";  

const Profile = () => {
  const { id } = useParams();
  const [mentorData, setMentorData] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8080/profile?id=${id}`);
      const data = await res.json();
      setMentorData(data);
      setAvailableSlots(data.availableSlots);
      console.log(data.availableSlots);
    };

    getData();
  }, [id]);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return mentorData ? (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white mt-10">
      <div className="flex justify-center items-center pt-10 pb-20"> 
        <div className="w-4/12 flex justify-center items-center">
          <img
            src={mentorData.portrait}
            className="rounded-full shadow-lg w-80 h-80 object-cover" 
            alt="Mentor"
          />
        </div>
        <div className="w-7/12 p-8 flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-semibold text-gray-800">{mentorData.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed tracking-wide w-[85%]">
            I am someone who is deeply passionate about guiding others and helping them unlock their potential. As a mentor, I prioritize creating a supportive and open environment where my mentees feel comfortable to share their challenges and successes. I believe that mentorship is not just about providing advice, but about fostering a relationship based on trust and mutual respect. I make it a point to listen actively and attentively, ensuring that every mentee feels valued and understood. Mentoring is a two-way street, and I learn from each interaction just as much as I hope to teach. It’s about connecting with individuals on a deeper level and helping them realize their full potential, both personally and professionally. I strongly believe that with the right guidance, anyone can overcome their obstacles and achieve their goals, regardless of the challenges they face. I am committed to not only helping them build the necessary skills but also empowering them to believe in their own abilities. I always strive to be patient, understanding, and flexible, acknowledging that everyone’s journey is unique.
            <br /><br />
            I believe in providing constructive feedback that encourages growth while also recognizing strengths. Mentorship is about empowering others to find their own path, and I strive to help my mentees build confidence and self-awareness. It’s not just about solving problems but about instilling a mindset that will serve them throughout their careers and lives. I understand that everyone’s journey is unique, and I approach each individual with patience, empathy, and a commitment to their personal development. My goal is not only to teach but to inspire others to make their own informed decisions and to ultimately feel empowered to succeed. I want my mentees to leave our sessions feeling more capable, confident, and ready to take on any challenge that comes their way. Witnessing the growth and success of those I mentor is the greatest reward in this role, as it’s a testament to the transformative power of guidance, trust, and hard work.
          </p>

          <button
            className="self-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={toggleModal}
          >
            Book a Session
          </button>
        </div>
      </div>


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
          Select your preferred date to schedule a session with {mentorData.name}.
        </p>

     
        <Calendar 
          availableSlots={availableSlots} 
          selectedDate={selectedDate} 
          setSelectedDate={setSelectedDate} 
          className="w-72 mx-auto" 
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
            onClick={() => {
              console.log("Date Confirmed:", selectedDate);
              toggleModal();
            }}
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

