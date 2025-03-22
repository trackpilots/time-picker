import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { WiTime10 } from "react-icons/wi";

const DateFilter = ({
  selectedDate,
  onSelect,
  selectedColor,
  icon: Icon,
}) => {
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [choosenValue, setChoosenValue] = useState(() => {
    const defaultTime = new Date();
    defaultTime.setHours(12, 0, 0, 0);
    return defaultTime;
  });

  useEffect(() => {
    if (selectedDate) {
      const defaultTime = new Date(selectedDate);
      defaultTime.setHours(12, 0, 0, 0);
      setChoosenValue(defaultTime);
    }
  }, [selectedDate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectDate = ({ time, value }) => {
    setChoosenValue(value);
    onSelect({ time, value });
    setIsOpen(false);
  };

  // Custom Time Input Component
  const CustomTimeInput = ({ value, onClick }) => (
    <div className="relative">
      <input
        value={value}
        onClick={onClick}
        readOnly
        className="w-28 text-center border border-gray-400 rounded-lg bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-8"
      />
      <Icon />
    </div>
  );

  return (
    <div className="relative z-30">
      <button
        ref={buttonRef}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="border rounded-lg text-gray-800 py-1 px-4 flex w-58 justify-between items-center gap-2"
      >
        
        {choosenValue ? choosenValue.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : "Select Time"}
        <span>
          <Icon className="h-6 w-6 text-gray-500 pt-1" />
        </span>
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className="absolute right-0 mt-2 bg-white border rounded shadow-lg p-4 flex"
        >
          <div
            className={`opacity-100
              
            `}
          >

            <DatePicker
             selected={choosenValue}
             onChange={(dates) => {
              const choosenString = new Date(dates).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
              handleSelectDate({
                time: choosenString,
                value: dates,
              });
            }}
             showTimeSelect
             inline
             showTimeSelectOnly
             timeIntervals={15}
             timeCaption="Time"
             dateFormat="h:mm aa"
             customInput={<CustomTimeInput />}
             calendarClassName="custom-timepicker"
             /> 
          </div>
        </div>
      )}

      <style>
        {`

 .custom-timepicker {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 10px;
  }

  .custom-timepicker .react-datepicker__time-list {
    background-color: #ffffff;
    border-radius: 8px;
  }

  .custom-timepicker .react-datepicker__time-list-item {
    color: #333;
    transition: background-color 0.3s;
  }

  /* Selected Time Background */
  .custom-timepicker .react-datepicker__time-list-item--selected {
    background-color: ${selectedColor} !important; /* Your custom selected background */
    color: white;
  }

  /* Hover Effect */
  .custom-timepicker .react-datepicker__time-list-item:hover {
    background-color: ${selectedColor};
    color: black;
  }

      `}
      </style>
    </div>
  );
};

DateFilter.defaultProps = {
  selectedDate: null, // Default to null if no startDate is provided
  onSelect: () => {}, // Prevents "onSelect is not a function" error
  selectedColor: "#9D55FF",
  icon: WiTime10,
};

export default DateFilter;
