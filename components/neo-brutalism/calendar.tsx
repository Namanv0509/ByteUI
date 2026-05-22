'use client'
import Calendar from 'react-calendar';
import {useState} from 'react';
import styled from 'styled-components';
import "@fontsource/public-sans";
import { ArrowBigLeft,ArrowBigLeftDash, ArrowBigRight,  ArrowBigRightDash } from 'lucide-react';
import NeoThemeWrapper from './neo.theme';

const NeoBrutalismCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <StyledWrapper>
      <NeoThemeWrapper>
    <Calendar
      value={date}
      onChange={newDate => setDate(new Date)}
      className="neo-brutal-calendar"
      prevLabel={<ArrowBigLeft  size={20} />}
      nextLabel={<ArrowBigRight size={20} />}
      prev2Label={<ArrowBigLeftDash size={20}/>}
      next2Label={<ArrowBigRightDash size={20}/>}
    />
    </NeoThemeWrapper>
    </StyledWrapper>
  );
};

export default NeoBrutalismCalendar;
const StyledWrapper = styled.div`
.neo-brutal-calendar {
  width: 100%;
  max-width: 380px;
  background: var(--color-accent-2); 
  border: 4px solid #000;
  box-shadow: var(--shadow-lg-1); 
  padding: 16px;
  border-radius: var(--border-radius);
  font-family: 'Public Sans', system-ui, sans-serif;
  color: var(--color-text-black);
}
.react-calendar__tile--neighboringMonth:hover {
  background: #f5f5f5;
  color: #999;
  transform: none;
  box-shadow: none;
}
  .react-calendar__tile--neighboringMonth:active {
  transform: none;
}
  .react-calendar__tile--neighboringMonth {
  background: #f5f5f5;
  color: #999;
  border: 3px solid #ddd;
  cursor: not-allowed;
  font-weight: 500;
}

/* Navigation (month/year header) */
.react-calendar__navigation {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
}
.react-calendar__navigation button {
  background: var(--color-accent-4); 
  border: var(--border-width-thick) solid var(--border-color);
  space-between: 12px;
  padding: 8px 8px;
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 8px;
  transition: transform 0.1s;
}

.react-calendar__navigation button:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-md-1);
}

/* Weekdays */
.react-calendar__month-view__weekdays {
  font-weight: 700;
  text-transform: uppercase;
}

.react-calendar__month-view__weekdays__weekday {
  padding: 12px 0;
  color: #000;
}

/* Days grid */
.react-calendar__month-view__days {
  display: grid !important;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.react-calendar__tile {
  border: 3px solid #000;
  background: #fff;
  padding: 12px 8px;
  font-weight: 700;
  aspect-ratio: 1/1;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
}

.react-calendar__tile:hover {
  background: var(--color-accent-1); 
  color: var(--color-text-white);
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 #000;
}

.react-calendar__tile--active,
.react-calendar__tile--now {
  background: #61cec1ff; 
  color: var(--color-text);
  border: 2px solid #000;
  box-shadow:  #000;
}

/* Neighboring month days */
.react-calendar__month-view__days__day--neighboringMonth  {
  opacity: 0.6;
  background: #eee !important;
  color: #807a7aff !important;
  pointer-events: none;

}
  
.react-calendar__month-view__days__day--weekend {
    color: #c30f0fff;
  }
.react-calendar__month-view__weekdays__weekday abbr {
  text-decoration: none !important;
  border-bottom: none !important;
  margin: 0 9px;
}
`