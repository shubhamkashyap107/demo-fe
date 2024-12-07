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
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit doloremque laborum recusandae ipsam fugit animi quis esse soluta enim minus corrupti ea praesentium facere illo eum doloribus odio veniam error suscipit nisi, quas sed reiciendis unde fugiat. Sed ea earum placeat veritatis facere fugiat, tempora minus a unde perferendis quos hic aperiam? Autem ut exercitationem earum error nostrum. Maiores culpa commodi est? Cupiditate quaerat atque voluptatibus rem dignissimos provident, eligendi tempora, esse accusamus cum beatae modi odio aut natus dolores, recusandae temporibus! Cum voluptates natus iure incidunt unde eveniet recusandae at optio earum, libero eius deleniti sapiente nesciunt aliquid, dolorum non ipsa odit ut. Tempora, illo ipsum, qui expedita ab facilis alias, mollitia eligendi perferendis voluptatibus adipisci sunt sit earum voluptas? Temporibus soluta culpa quia distinctio commodi quaerat dolor maxime rerum maiores aspernatur quibusdam esse, suscipit doloribus asperiores nesciunt atque perspiciatis sed quas! Quae tempore cumque vitae repellendus ex quaerat, harum iste sint ipsam omnis vero libero, repudiandae autem saepe molestiae magni nostrum laboriosam culpa atque. Labore, adipisci. Quam quis suscipit eveniet! Ea enim rerum repudiandae vel necessitatibus, error tempora laboriosam culpa doloribus debitis, hic consequuntur incidunt nisi assumenda officia qui? Exercitationem nisi provident qui rerum asperiores quis omnis doloribus excepturi, repellendus at suscipit delectus aliquid adipisci voluptate veritatis tempore cumque voluptates cupiditate iste eius eos modi dolorem harum. Tempora facere, voluptatem perspiciatis assumenda officiis cum officia aspernatur, accusantium pariatur minus nobis. Non dolorem, aliquid in eius eum natus officiis dolores ipsam ab alias necessitatibus deserunt, aut temporibus ad modi perspiciatis voluptate est sit quisquam, illo neque. Odio reprehenderit molestiae incidunt nostrum aut corporis aspernatur praesentium provident exercitationem accusamus. Enim quidem accusantium quas nemo iusto. Ipsum voluptates quas excepturi soluta veritatis! Quibusdam error exercitationem, expedita sint dolorem a ab dicta deserunt inventore sed autem sunt. Doloribus, neque? Minima laudantium dolorum earum obcaecati quis, error modi nostrum itaque voluptas inventore quo adipisci praesentium a aspernatur quidem pariatur! Animi voluptates sunt fugit hic eius non voluptas quibusdam, incidunt, labore corporis ipsa aliquid perspiciatis iure quasi odit repellat, rem porro? Voluptates, sapiente deleniti. Amet soluta consequuntur vero rerum laborum minima ex aperiam molestias, odit dolorum officiis sapiente id voluptas doloribus, est voluptatum quisquam at. Natus quisquam ab magni fuga dolore libero laborum eos placeat temporibus non maxime veritatis deleniti expedita rerum corporis, nulla inventore. Repellat fugit molestias rerum necessitatibus ipsam est eos? Voluptatum est quo nulla soluta temporibus repudiandae rem et. Libero repudiandae quisquam obcaecati illo corporis deleniti similique dolorem magnam ad, quod ducimus repellendus? Repellat, reiciendis excepturi corporis veritatis neque voluptatibus sit ipsum necessitatibus unde eveniet dolores ullam assumenda id ducimus culpa, beatae, totam accusantium? Fugiat, facilis soluta omnis aperiam ipsa cum nisi porro dolorem accusamus illo. Modi commodi consequuntur corrupti molestiae earum eum! Itaque quod illum quasi voluptates alias blanditiis quis maiores quas laborum, doloribus expedita. Officia nam, animi eveniet veritatis sint voluptas ea minima sequi ducimus omnis aperiam quaerat exercitationem quo molestias tempora deserunt aspernatur neque tempore, inventore numquam sit illum eum? Nam molestias totam sunt ipsam sapiente? Facilis, ad.</div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit doloremque laborum recusandae ipsam fugit animi quis esse soluta enim minus corrupti ea praesentium facere illo eum doloribus odio veniam error suscipit nisi, quas sed reiciendis unde fugiat. Sed ea earum placeat veritatis facere fugiat, tempora minus a unde perferendis quos hic aperiam? Autem ut exercitationem earum error nostrum. Maiores culpa commodi est? Cupiditate quaerat atque voluptatibus rem dignissimos provident, eligendi tempora, esse accusamus cum beatae modi odio aut natus dolores, recusandae temporibus! Cum voluptates natus iure incidunt unde eveniet recusandae at optio earum, libero eius deleniti sapiente nesciunt aliquid, dolorum non ipsa odit ut. Tempora, illo ipsum, qui expedita ab facilis alias, mollitia eligendi perferendis voluptatibus adipisci sunt sit earum voluptas? Temporibus soluta culpa quia distinctio commodi quaerat dolor maxime rerum maiores aspernatur quibusdam esse, suscipit doloribus asperiores nesciunt atque perspiciatis sed quas! Quae tempore cumque vitae repellendus ex quaerat, harum iste sint ipsam omnis vero libero, repudiandae autem saepe molestiae magni nostrum laboriosam culpa atque. Labore, adipisci. Quam quis suscipit eveniet! Ea enim rerum repudiandae vel necessitatibus, error tempora laboriosam culpa doloribus debitis, hic consequuntur incidunt nisi assumenda officia qui? Exercitationem nisi provident qui rerum asperiores quis omnis doloribus excepturi, repellendus at suscipit delectus aliquid adipisci voluptate veritatis tempore cumque voluptates cupiditate iste eius eos modi dolorem harum. Tempora facere, voluptatem perspiciatis assumenda officiis cum officia aspernatur, accusantium pariatur minus nobis. Non dolorem, aliquid in eius eum natus officiis dolores ipsam ab alias necessitatibus deserunt, aut temporibus ad modi perspiciatis voluptate est sit quisquam, illo neque. Odio reprehenderit molestiae incidunt nostrum aut corporis aspernatur praesentium provident exercitationem accusamus. Enim quidem accusantium quas nemo iusto. Ipsum voluptates quas excepturi soluta veritatis! Quibusdam error exercitationem, expedita sint dolorem a ab dicta deserunt inventore sed autem sunt. Doloribus, neque? Minima laudantium dolorum earum obcaecati quis, error modi nostrum itaque voluptas inventore quo adipisci praesentium a aspernatur quidem pariatur! Animi voluptates sunt fugit hic eius non voluptas quibusdam, incidunt, labore corporis ipsa aliquid perspiciatis iure quasi odit repellat, rem porro? Voluptates, sapiente deleniti. Amet soluta consequuntur vero rerum laborum minima ex aperiam molestias, odit dolorum officiis sapiente id voluptas doloribus, est voluptatum quisquam at. Natus quisquam ab magni fuga dolore libero laborum eos placeat temporibus non maxime veritatis deleniti expedita rerum corporis, nulla inventore. Repellat fugit molestias rerum necessitatibus ipsam est eos? Voluptatum est quo nulla soluta temporibus repudiandae rem et. Libero repudiandae quisquam obcaecati illo corporis deleniti similique dolorem magnam ad, quod ducimus repellendus? Repellat, reiciendis excepturi corporis veritatis neque voluptatibus sit ipsum necessitatibus unde eveniet dolores ullam assumenda id ducimus culpa, beatae, totam accusantium? Fugiat, facilis soluta omnis aperiam ipsa cum nisi porro dolorem accusamus illo. Modi commodi consequuntur corrupti molestiae earum eum! Itaque quod illum quasi voluptates alias blanditiis quis maiores quas laborum, doloribus expedita. Officia nam, animi eveniet veritatis sint voluptas ea minima sequi ducimus omnis aperiam quaerat exercitationem quo molestias tempora deserunt aspernatur neque tempore, inventore numquam sit illum eum? Nam molestias totam sunt ipsam sapiente? Facilis, ad.</div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit doloremque laborum recusandae ipsam fugit animi quis esse soluta enim minus corrupti ea praesentium facere illo eum doloribus odio veniam error suscipit nisi, quas sed reiciendis unde fugiat. Sed ea earum placeat veritatis facere fugiat, tempora minus a unde perferendis quos hic aperiam? Autem ut exercitationem earum error nostrum. Maiores culpa commodi est? Cupiditate quaerat atque voluptatibus rem dignissimos provident, eligendi tempora, esse accusamus cum beatae modi odio aut natus dolores, recusandae temporibus! Cum voluptates natus iure incidunt unde eveniet recusandae at optio earum, libero eius deleniti sapiente nesciunt aliquid, dolorum non ipsa odit ut. Tempora, illo ipsum, qui expedita ab facilis alias, mollitia eligendi perferendis voluptatibus adipisci sunt sit earum voluptas? Temporibus soluta culpa quia distinctio commodi quaerat dolor maxime rerum maiores aspernatur quibusdam esse, suscipit doloribus asperiores nesciunt atque perspiciatis sed quas! Quae tempore cumque vitae repellendus ex quaerat, harum iste sint ipsam omnis vero libero, repudiandae autem saepe molestiae magni nostrum laboriosam culpa atque. Labore, adipisci. Quam quis suscipit eveniet! Ea enim rerum repudiandae vel necessitatibus, error tempora laboriosam culpa doloribus debitis, hic consequuntur incidunt nisi assumenda officia qui? Exercitationem nisi provident qui rerum asperiores quis omnis doloribus excepturi, repellendus at suscipit delectus aliquid adipisci voluptate veritatis tempore cumque voluptates cupiditate iste eius eos modi dolorem harum. Tempora facere, voluptatem perspiciatis assumenda officiis cum officia aspernatur, accusantium pariatur minus nobis. Non dolorem, aliquid in eius eum natus officiis dolores ipsam ab alias necessitatibus deserunt, aut temporibus ad modi perspiciatis voluptate est sit quisquam, illo neque. Odio reprehenderit molestiae incidunt nostrum aut corporis aspernatur praesentium provident exercitationem accusamus. Enim quidem accusantium quas nemo iusto. Ipsum voluptates quas excepturi soluta veritatis! Quibusdam error exercitationem, expedita sint dolorem a ab dicta deserunt inventore sed autem sunt. Doloribus, neque? Minima laudantium dolorum earum obcaecati quis, error modi nostrum itaque voluptas inventore quo adipisci praesentium a aspernatur quidem pariatur! Animi voluptates sunt fugit hic eius non voluptas quibusdam, incidunt, labore corporis ipsa aliquid perspiciatis iure quasi odit repellat, rem porro? Voluptates, sapiente deleniti. Amet soluta consequuntur vero rerum laborum minima ex aperiam molestias, odit dolorum officiis sapiente id voluptas doloribus, est voluptatum quisquam at. Natus quisquam ab magni fuga dolore libero laborum eos placeat temporibus non maxime veritatis deleniti expedita rerum corporis, nulla inventore. Repellat fugit molestias rerum necessitatibus ipsam est eos? Voluptatum est quo nulla soluta temporibus repudiandae rem et. Libero repudiandae quisquam obcaecati illo corporis deleniti similique dolorem magnam ad, quod ducimus repellendus? Repellat, reiciendis excepturi corporis veritatis neque voluptatibus sit ipsum necessitatibus unde eveniet dolores ullam assumenda id ducimus culpa, beatae, totam accusantium? Fugiat, facilis soluta omnis aperiam ipsa cum nisi porro dolorem accusamus illo. Modi commodi consequuntur corrupti molestiae earum eum! Itaque quod illum quasi voluptates alias blanditiis quis maiores quas laborum, doloribus expedita. Officia nam, animi eveniet veritatis sint voluptas ea minima sequi ducimus omnis aperiam quaerat exercitationem quo molestias tempora deserunt aspernatur neque tempore, inventore numquam sit illum eum? Nam molestias totam sunt ipsam sapiente? Facilis, ad.</div>

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
