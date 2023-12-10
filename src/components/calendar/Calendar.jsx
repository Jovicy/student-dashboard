import { useState } from 'react';

const Calendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDaysInMonth = (year, month) => {
      const date = new Date(year, month, 1);
      const days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    };
  
    const [currentDate, setCurrentDate] = useState(new Date());
  
    const goToPreviousMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
  
    const goToNextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
  
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  
    return (
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-4">
          <button onClick={goToPreviousMonth} className="text-grey font-normal">&lt;</button>
          <h1 className="text-base font-bold mb-0">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h1>
          <button onClick={goToNextMonth} className="text-grey font-normal">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center text-xs font-normal">{day}</div>
          ))}
          {daysInMonth.map((date, index) => (
            <div
              key={index}
              className={`text-center text-sm ${date.getMonth() === currentDate.getMonth() ? '' : ''} ${date.toDateString() === new Date().toDateString() ? 'rounded-full bg-dark-teal-button w-5 h-5 flex justify-center items-center text-white font-bold' : ''}`}
            >
              {date.getDate()}
            </div>
          ))}
        </div>
      </div>
    );
}

export default Calendar