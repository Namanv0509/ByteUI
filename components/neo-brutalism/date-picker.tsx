'use client';

import React, { useState, useRef, useEffect } from 'react';
import NeoBrutalismCalendar from './calendar';
import { styled } from 'styled-components';
import NeoThemeWrapper from './neo.theme';

import { Calendar } from 'lucide-react';



const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setViewDate(date);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (rootRef.current && !rootRef.current.contains(target)) setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const activeDate = selectedDate ?? viewDate;

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((v) => !v);
    }
  };

  return (
    <StyledWrapper ref={rootRef}>
        <NeoThemeWrapper>
            <div className="relative">
                  <div 
        className="calendar-trigger"
        onClick={() => {
          if (!selectedDate) setViewDate(new Date());
          setIsOpen((v) => !v);
        }}
      >
        <Calendar 
          size={20} 
          strokeWidth={2.5} 
          className="text-black" 
        />
      </div>
      <input
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString('en-GB',{
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }) : ''}
        placeholder="Select date"
        readOnly
        onClick={() => {
          if (!selectedDate) setViewDate(new Date());
          setIsOpen((v) => !v);
        }}
        onKeyDown={handleInputKeyDown}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="neo-brutal-date-picker-popup"
      />
    
      </div>
      {isOpen && (
        <div id="neo-brutal-date-picker-popup" className="calendar-popup">
          <NeoBrutalismCalendar
            date={activeDate}
            onDateChange={(date) => {
              handleDateChange(date);
              setIsOpen(false);
            }}
          />
        </div>
      )}
      </NeoThemeWrapper>
    </StyledWrapper>
  );
};

export default DatePicker;

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 320px;

  input {
    width: 100%;
    padding: 14px 16px 14px 52px;
    font-size: 20px;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--color-accent-1);
    cursor: pointer;
    font-weight: 700;
    font-family: var(--font-main);
    box-shadow: var(--shadow-md-1);
    color: var(--color-text-black);

    &:focus {
      outline: none;
      box-shadow: var(--shadow-md-1);
    }
  }

  .calendar-popup {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    z-index: 100;
    background: transparent;
    border-radius: 0;
  }

  .calendar-trigger {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
`;
