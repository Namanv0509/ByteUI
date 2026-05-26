'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { X, CheckCircle, AlertOctagon, AlertTriangle, Info } from 'lucide-react';
import NeoThemeWrapper from './neo.theme';

const slideIn = keyframes`
  from {
    transform: translateX(calc(100% + 24px));
  }
  to {
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const StyledToast = styled(ToastPrimitives.Root)<{ $variant: 'default' | 'success' | 'warning' | 'destructive' }>`
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'success':
        return 'var(--success)';
      case 'warning':
        return 'var(--warning)';
      case 'destructive':
        return 'var(--error)';
      default:
        return 'var(--default)';
    }
  }};
  border: var(--border-width, 3px) solid var(--border-color, #000000);
  border-radius: var(--border-radius, 15px);
  box-shadow: var(--shadow-md-1);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  width: 100%;
  max-width: 380px;
  pointer-events: auto;
  font-family: var(--font-lexend), sans-serif;
  color: var(--color-text-black);
  margin-bottom: 12px;

  &[data-state='open'] {
    animation: ${slideIn} 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &[data-state='closed'] {
    animation: ${fadeOut} 150ms ease-in forwards;
  }
  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe='end'] {
    animation: ${fadeOut} 150ms ease-in forwards;
  }
`;

const PreviewContainer = styled.div<{ $variant: 'default' | 'success' | 'warning' | 'destructive' }>`
  background: ${(props) => {
    switch (props.$variant) {
      case 'success':
        return 'var(--success)';
      case 'warning':
        return 'var(--warning)';
      case 'destructive':
        return 'var(--error)';
      default:
        return 'var(--default)';
    }
  }};
  border: var(--border-width, 3px) solid var(--border-color, #000000);
  border-radius: var(--border-radius, 15px);
  box-shadow: var(--shadow-md-1, 6px 6px 0 #1e1e1e);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  width: 100%;
  max-width: 380px;
  font-family: var(--font-lexend), sans-serif;
  color: var(--color-text-black, #000000);
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--color-surface, #ffffff);
  border: 2px solid var(--border-color, #000000);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 0px var(--border-color, #000000);
  flex-shrink: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  padding-right: 18px; /* space for close button */
`;

const ToastTitle = styled(ToastPrimitives.Title)`
  font-weight: 800;
  font-size: 16px;
  color: var(--color-text-black, #000000);
  font-family: var(--font-lexend), sans-serif;
`;

const ToastDescription = styled(ToastPrimitives.Description)`
  font-weight: 500;
  font-size: 13.5px;
  color: var(--color-text-black, #000000);
  opacity: 0.85;
  font-family: var(--font-sans), sans-serif;
  line-height: 1.4;
`;

const CloseButton = styled(ToastPrimitives.Close)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: var(--color-surface, #ffffff);
  border: 2px solid var(--border-color, #000000);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 0px var(--border-color, #000000);
  cursor: pointer;
  transition: all 0.15s ease;
  padding: 0;
  color: var(--border-color, #000000);

  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px var(--border-color, #000000);
    background: var(--color-accent-2);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px var(--border-color, #000000);
  }
`;

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> {
  id?: string;
  title?: string;
  description?: string;
  variant?:  'default' | 'success' | 'warning' | 'destructive';
}
const getToastIcon = (variant: 'default' | 'success' | 'warning' | 'destructive') => {
  switch (variant) {
    case 'success':
      return <CheckCircle size={20} color="#000000" strokeWidth={2.5} />;
    
    case 'warning':
      return <AlertTriangle size={20} color="#000000" strokeWidth={2.5} />;
    
    case 'destructive':
      return <AlertOctagon size={20} color="#000000" strokeWidth={2.5} />;
    
    case 'default':
    default:
      return <Info size={20} color="#000000" strokeWidth={2.5} />;
  }
};

const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = 'default',
  open,
  ...props
}) => {
  // If id and open are missing, we are rendering as a static preview inside the component library.
  // We render a plain div container to avoid Radix context crashes and show a beautiful mockup.
  const isPreview = !id && !open;

  if (isPreview) {
    return (
      <NeoThemeWrapper>
        <PreviewContainer $variant={variant} data-theme="neo">
          <IconContainer>
            {getToastIcon(variant)}
          </IconContainer>
          <ContentContainer>
            <ToastTitle as="div">{title || 'Success Toast Title'}</ToastTitle>
            <ToastDescription as="div">
              {description || 'This is how your beautiful toast notification will look!'}
            </ToastDescription>
          </ContentContainer>
          <CloseButton as="div" aria-label="Close">
            <X size={14} strokeWidth={3} />
          </CloseButton>
        </PreviewContainer>
      </NeoThemeWrapper>
    );
  }

  return (
    <NeoThemeWrapper>
      <StyledToast $variant={variant} data-theme="neo" open={open} {...props}>
        <IconContainer>
            {getToastIcon(variant)}
        </IconContainer>
        <ContentContainer>
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
        </ContentContainer>
        <CloseButton aria-label="Close">
          <X size={14} strokeWidth={3} />
        </CloseButton>
      </StyledToast>
    </NeoThemeWrapper>
  );
};

export default Toast;
