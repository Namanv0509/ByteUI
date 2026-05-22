import React from 'react';
import Button from './button';
import styled from 'styled-components';
import NeoThemeWrapper from './neo.theme';


interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}
const Dialog = ({ children, isOpen, onClose,
    title = "Are you absolutely sure?",
    description = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
 }: Props) => {
    if (!isOpen) return null;
  return (<StyledWrapper>
    <NeoThemeWrapper>
        <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button variant="primary" className="dialog-button" style={{ right: '125px'}} >Open</Button>
        <Button variant="secondary" className="dialog-button" onClick={onClose}  >Close</Button>
      </div>
    </div>
    </NeoThemeWrapper>
  </StyledWrapper>);
};

export default Dialog;

const StyledWrapper = styled.div`
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
    .dialog {
        padding: 20px 40px 90px; 
        position: relative;
        border: var(--border);
        box-shadow: var(--shadow-md);
        background: var(--color-accent-2);
        color: var(--color-text-black);
        font-family: var(--font-sans);
        max-width: 600px;
        border-radius: var(--border-radius);
    }
        .dialog h2 {
            margin: 0 0 10px;
            font-size: 2rem;
            font-weight: bold;
        }
            .dialog p {
                margin: 0;
                font-size: 1.2rem;
            }
            .dialog-button {
                position: absolute;
                right: 20px;
                bottom: 20px;
                transform: scale(0.9);
            }
`
