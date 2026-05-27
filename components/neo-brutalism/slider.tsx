'use client';

import React from 'react';
import { styled } from 'styled-components';
import NeoThemeWrapper from './neo.theme';

const THUMB_SIZE = 25;

interface ReusableSliderProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  id?: string;
}

const ReusableSlider: React.FC<ReusableSliderProps> = ({
  value,
  defaultValue,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  id = 'reusable-range-slider',
}) => {
  const safeMin = Math.min(min, max);
  const safeMax = Math.max(min, max);
  const [internalValue, setInternalValue] = React.useState<number>(
    defaultValue ?? value ?? safeMin,
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const clampedValue = Math.min(safeMax, Math.max(safeMin, currentValue));
  const range = safeMax - safeMin || 1;
  const percentage = ((clampedValue - safeMin) / range) * 100;

  React.useEffect(() => {
    if (!isControlled && defaultValue !== undefined) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  const handleChange = (nextValue: number) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  return (
    <NeoThemeWrapper>
      <StyledWrapper $percent={percentage}>
        <div className="track" aria-hidden="true" />
        <RangeInput
          id={id}
          type="range"
          min={safeMin}
          max={safeMax}
          step={step}
          value={clampedValue}
          onChange={(e) => handleChange(Number(e.target.value))}
        />
      </StyledWrapper>
    </NeoThemeWrapper>
  );
};

const StyledWrapper = styled.div<{ $percent: number }>`
  position: relative;
  width: 100%;
  height: ${THUMB_SIZE}px;
  display: flex;
  align-items: center;

  .track {
    position: absolute;
    left: 0;
    right: 0;
    height: 15px;
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color);
    box-shadow: 3px 3px 0 #1e1e1e;
    pointer-events: none;
    background: linear-gradient(
      to right,
      var(--color-accent-2)
        calc(
          (100% - ${THUMB_SIZE}px) * ${(props) => props.$percent} / 100 +
            ${THUMB_SIZE / 2}px
        ),
      var(--color-accent-1)
        calc(
          (100% - ${THUMB_SIZE}px) * ${(props) => props.$percent} / 100 +
            ${THUMB_SIZE / 2}px
        )
    );
  }
`;

const RangeInput = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 200px;
  margin: 0;
  background: transparent;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-slider-runnable-track {
    height: 15px;
    background: transparent;
    border: none;
    box-shadow: none;
  }

  &::-moz-range-track {
    height: 15px;
    background: transparent;
    border: none;
    box-shadow: none;
  }

  &::-moz-range-progress {
    background: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    margin-top: -5px;
    border-radius: 50%;
    border: var(--border-width) solid var(--border-color);
    background-color: var(--color-accent-4);
    box-shadow: 1.5px 1.5px 0 #1e1e1e;
  }

  &::-moz-range-thumb {
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    border-radius: 50%;
    border: var(--border-width) solid var(--border-color);
    background-color: var(--color-accent-4);
    box-shadow: 1.5px 1.5px 0 #1e1e1e;
  }
`;

export default ReusableSlider;
