import React, { useState, useEffect } from 'react';

const hijriMonths = [
  'محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 
  'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
];

const daysOfWeek = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

const hijriToGregorian = (year, month, day) => {
  month = month - 1;
  const jd = day + Math.ceil(29.5001 * month) + 354 * year + Math.floor((3 + 11 * year) / 30) + 1948439 - 385;
  const l = jd + 68569;
  const n = Math.floor((4 * l) / 146097);
  const i = l - Math.floor((146097 * n + 3) / 4);
  const j = Math.floor((4000 * (i + 1)) / 1461001);
  const k = i - Math.floor((1461 * j) / 4) + 31;
  const m = Math.floor((80 * k) / 2447);
  const d = k - Math.floor((2447 * m) / 80);
  const l2 = Math.floor(m / 11);
  const mm = m + 2 - 12 * l2;
  const y = 100 * (n - 49) + j + l2;
  return [y, mm - 1, d];
};

const gregorianToHijri = (gy, gm, gd) => {
  const jd = Math.floor((1461 * (gy + 4800 + Math.floor((gm - 14) / 12))) / 4) +
             Math.floor((367 * (gm - 2 - 12 * (Math.floor((gm - 14) / 12)))) / 12) -
             Math.floor((3 * (Math.floor((gy + 4900 + Math.floor((gm - 14) / 12)) / 100))) / 4) +
             gd - 32075;
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const i = l - 10631 * n + 354;
  const j = (Math.floor((10985 - i) / 5316)) * (Math.floor((50 * i) / 17719)) + (Math.floor(i / 5670)) * (Math.floor((43 * i) / 15238));
  const k = i - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) - (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29;
  const m = Math.floor((24 * k) / 709);
  const d = k - Math.floor((709 * m) / 24);
  const y = 30 * n + j - 30;
  return [y, m - 1, d];
};

const getDaysInHijriMonth = (year, month) => {
  const [gy, gm] = hijriToGregorian(year, month + 1, 1);
  return new Date(gy, gm, 0).getDate();
};

const HijriCalendar = () => {
  const today = new Date();
  const [hijriYear, hijriMonth, hijriDay] = gregorianToHijri(today.getFullYear(), today.getMonth() + 1, today.getDate());

  const [currentYear, setCurrentYear] = useState(hijriYear);
  const [currentMonth, setCurrentMonth] = useState(hijriMonth);
  const [selectedDay, setSelectedDay] = useState({ day: hijriDay, month: hijriMonth, year: hijriYear });

  const renderMonth = (year, month) => {
    const daysInMonth = getDaysInHijriMonth(year, month);
    const weeks = [];
    let days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const [gy, gm, gd] = hijriToGregorian(year, month, i);
      const dayOfWeek = new Date(gy, gm, gd).getDay();
      const isSelected = selectedDay.day === i && selectedDay.month === month && selectedDay.year === year;
      days.push(
        <div 
          key={i} 
          className={`border p-2 text-center cursor-pointer hover:bg-gray-200 ${isSelected ? 'bg-blue-300' : ''}`}
          onClick={() => setSelectedDay({ day: i, month, year })}
        >
          {daysOfWeek[dayOfWeek]}
          <br />
          {i}
        </div>
      );

      if (days.length === 7 || i === daysInMonth) {
        weeks.push(
          <div key={i} className="grid grid-cols-7 gap-2">
            {days}
          </div>
        );
        days = [];
      }
    }

    return (
      <div className="border p-4 mt-2 bg-white">
        <div className="text-center mb-2">
          {hijriMonths[month]} {year}
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2 text-center">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="font-bold">{day}</div>
          ))}
        </div>
        {weeks}
      </div>
    );
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay({ day: 1, month: currentMonth === 0 ? 11 : currentMonth - 1, year: currentMonth === 0 ? currentYear - 1 : currentYear });
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay({ day: 1, month: currentMonth === 11 ? 0 : currentMonth + 1, year: currentMonth === 11 ? currentYear + 1 : currentYear });
  };

  const handleYearChange = (event) => {
    setCurrentYear(parseInt(event.target.value, 10));
    setSelectedDay({ day: 1, month: currentMonth, year: parseInt(event.target.value, 10) });
  };

  const handleMonthChange = (event) => {
    setCurrentMonth(parseInt(event.target.value, 10));
    setSelectedDay({ day: 1, month: parseInt(event.target.value, 10), year: currentYear });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">التقويم الهجري</h1>
      <div className="flex justify-between mb-4">
        <button type='button' onClick={handlePreviousMonth} className="bg-gray-200 px-4 py-2 rounded">الشهر السابق</button>
        <span className="text-lg font-bold">
          {hijriMonths[currentMonth]} {currentYear}
        </span>
        <button type='button' onClick={handleNextMonth} className="bg-gray-200 px-4 py-2 rounded">الشهر التالي</button>
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="mr-2">اختر السنة:</label>
        <select id="year" value={currentYear} onChange={handleYearChange} className="border p-2">
          {Array.from({ length: 1500 }, (_, i) => 1300 + i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <label htmlFor="month" className="mr-2 ml-4">اختر الشهر:</label>
        <select id="month" value={currentMonth} onChange={handleMonthChange} className="border p-2">
          {hijriMonths.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
      </div>
      {renderMonth(currentYear, currentMonth)}
      {selectedDay && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">اليوم المحدد</h2>
          <p>{`${selectedDay.day} ${hijriMonths[selectedDay.month]} ${selectedDay.year}`}</p>
        </div>
      )}
    </div>
  );
};

export default HijriCalendar;
