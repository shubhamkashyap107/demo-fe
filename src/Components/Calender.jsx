import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function getAvailableSlots(date, availableSlots) {
  if (!date || !availableSlots) {
    return [];
  }
  const slotData = availableSlots.find(
    (slot) => slot.date === date.toISOString().split('T')[0] // Compare date in YYYY-MM-DD format
  );
  return slotData ? slotData.slots : [];
}

const CustomCalendar = ({ availableSlots = [], setSelectedDate, setSelectedTimeSlot }) => {
  const [selectedDate, setLocalSelectedDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(null); // Tracks which date has a dropdown
  const [selectedSlot, setSelectedSlot] = useState('');

  useEffect(() => {
    const slotsForDay = getAvailableSlots(selectedDate, availableSlots);
    if (slotsForDay.length > 0) {
      setShowDropdown(selectedDate); // Show dropdown if slots are available for the initial date
    } else {
      setShowDropdown(null); // Hide dropdown if no slots are available for the initial date
    }
  }, [selectedDate, availableSlots]);

  const handleDateClick = (date) => {
    setLocalSelectedDate(date);
    setSelectedDate(date); // Update the parent component's selectedDate state
    const slotsForDay = getAvailableSlots(date, availableSlots);
    if (slotsForDay.length > 0) {
      setShowDropdown(date);
    } else {
      setShowDropdown(null);
      setSelectedTimeSlot(''); // Clear the selected time slot if no slots are available
    }
  };

  const handleSlotChange = (e) => {
    setSelectedSlot(e.target.value); // Update the selected slot state
    setSelectedTimeSlot(e.target.value); // Update the parent component's selectedTimeSlot state
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const renderDaysOfWeek = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-600">
        {days.map((day) => (
          <div key={day} className="py-2">{day}</div>
        ))}
      </div>
    );
  };

  const renderDates = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(year, month);

    const dates = Array.from({ length: totalDays }, (_, i) => i + 1);
    const blankDays = Array.from({ length: firstDayOfMonth }, () => null);

    const currentDay = new Date().toDateString();

    return (
      <div className="grid grid-cols-7 gap-2">
        {[...blankDays, ...dates].map((day, index) => {
          const date = day ? new Date(year, month, day) : null;
          const isSelected = date && date.toDateString() === selectedDate.toDateString();
          const isToday = date && date.toDateString() === currentDay;
          const slotsForDay = day ? getAvailableSlots(date, availableSlots) : [];
          const highlightDates = [22, 23, 24, 25, 26]; // Highlighted dates
          const isHighlighted = day && highlightDates.includes(day);

          return (
            <div
              key={index}
              className={`p-2 text-xs rounded-full text-center cursor-pointer shadow-lg transition-all duration-300 ${
                isSelected ? 'bg-red-500 text-black' : 'bg-white text-gray-800 hover:bg-gray-100'
              } ${isToday ? 'bg-blue-200 text-black' : ''} ${
                isHighlighted ? 'bg-yellow-400' : ''
              }`}
              style={{
                width: '35px',
                height: '35px',
                opacity: day ? 1 : 0,
              }}
              onClick={() => day && handleDateClick(date)}
            >
              {day && <span className="font-bold text-xs">{day}</span>}
            </div>
          );
        })}
      </div>
    );
  };

  const handlePrevMonth = () => {
    setLocalSelectedDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setLocalSelectedDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-white border rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
        >
          &lt;
        </button>
        <h3 className="text-sm font-semibold text-gray-800">
          {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
        </h3>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>
      {renderDaysOfWeek()}
      {renderDates()}

      {/* Render the dropdown below the calendar */}
      {showDropdown && (
        <div className="mt-2 p-2 border rounded-lg bg-white shadow-md">
          <h4 className="text-xs font-medium text-gray-600">Select a Slot for {showDropdown.toDateString()}</h4>
          <select
            className="mt-1 w-full p-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSlotChange}
            defaultValue=""
          >
            <option value="" disabled>Select a Slot</option>
            {getAvailableSlots(showDropdown, availableSlots).map((slot, idx) => (
              <option key={idx} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default CustomCalendar;
