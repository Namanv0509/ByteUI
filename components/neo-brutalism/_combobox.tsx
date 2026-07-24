'use client'
import React, { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import NeoThemeWrapper from './neo.theme';
import { ArrowBigDownDash } from 'lucide-react';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  min-width: 240px;

  .combo-box {
    width: 100%;
    padding: 14px 16px;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--color-accent-2);
    color: var(--color-text-black);
    font-size: 16px;
    cursor: pointer;
    box-shadow: var(--shadow-md-1);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 52px;
    font-weight: 700;
    font-family: var(--font-lexend);
  }

  .combo-box:hover {
    box-shadow: 1.5px 1.5px 0 var(--shadow-md-1);
    transform: translate(1.5px, 1.5px);
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .combo-box.open .arrow {
    transform: rotate(180deg);
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 100%;
    background: var(--color-bg);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    max-height: 360px;
    overflow-y: auto;
    z-index: 100;
    display: none;
  }

  .combo-box.open + .dropdown {
    display: block;
  }

  .search-input {
    width: 100%;
    padding: 14px 16px;
    border: none;
    border-bottom: var(--border-width) solid var(--color-text);
    background: var(--color-bg);
    color: var(--color-text);
    font-size: 15px;
    position: sticky;
    top: 0;
  }

  .option {
    padding: 13px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 12px;
    user-select: none;
  }

  .option:hover,
  .option.selected {
    background: var(--color-accent-2);
    color: var(--color-text-black);
    box-shadow: var(--shadow-md-2);
    border-radius: var(--border-radius);
  }

  .option.selected {
    font-weight: 700;
  }

  .no-results {
    padding: 20px;
    text-align: center;
    color: var(--color-text-muted);
    font-family: var(--font-lexend);
  }
`;

export interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ComboBoxProps {
  options?: Option[];           
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  searchPlaceholder?: string;
  [key: string]: unknown;
}

const ComboBox: FC<ComboBoxProps> = ({
  options = [],                    
  value: controlledValue,
  onChange,
  placeholder = 'Select an option',
  className = '',
  searchPlaceholder = 'Search...',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = useState(controlledValue || '');

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue]);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  // Safe find
  const selectedOption = options.find(opt => opt.value === value);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (optionValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
    setSearchTerm('');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <StyledWrapper ref={containerRef}>
      <NeoThemeWrapper>
        <div className={className} {...props}>
          <div
            className={`combo-box ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {selectedOption.icon}
                {selectedOption.label}
              </div>
            ) : (
              <span style={{ color: '#000000ff' }}>{placeholder}</span>
            )}
            <ArrowBigDownDash className="arrow" />
          </div>

          <div className="dropdown">
            <input
              type="text"
              className="search-input"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />

            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`option ${value === option.value ? 'selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.icon}
                  {option.label}
                </div>
              ))
            ) : (
              <div className="no-results">
                {searchTerm ? 'No matching results found' : 'No options available'}
              </div>
            )}
          </div>
        </div>
      </NeoThemeWrapper>
    </StyledWrapper>
  );
};

export default ComboBox;