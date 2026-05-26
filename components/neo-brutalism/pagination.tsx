import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NeoThemeWrapper from './neo.theme';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Button from './button';

const demoItems = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

interface PaginationProps {
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  initialPage?: number;
  className?: string;
  [key: string]: any;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage = 10,
  currentPage: controlledPage,
  onPageChange,
  initialPage = 1,
  className = '',
  ...props
}) => {
  const isControlled = controlledPage !== undefined;
  const [localPage, setLocalPage] = useState(initialPage);
  useEffect(() => {
    if (isControlled && controlledPage !== undefined) {
      setLocalPage(controlledPage);
    }
  }, [isControlled, controlledPage]);

  const activePage = isControlled ? controlledPage : localPage;
  const isDemoMode = totalItems === undefined;
  const resolvedTotalItems = isDemoMode ? demoItems.length : totalItems;
  const totalPages = Math.ceil(resolvedTotalItems / itemsPerPage) || 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      if (!isControlled) {
        setLocalPage(page);
      }
      onPageChange?.(page);
    }
  };
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const start = Math.max(1, activePage - 1);
      const end = Math.min(totalPages, activePage + 1);
      
      if (start > 1) {
        pageNumbers.push(1);
        if (start > 2) pageNumbers.push('...');
      }
      
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      
      if (end < totalPages) {
        if (end < totalPages - 1) pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };
  const currentDemoItems = isDemoMode 
    ? demoItems.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
    : [];

  return (
    <NeoThemeWrapper>
      <StyledWrapper className={className} {...props}>
        {isDemoMode && (
          <ul className="items-list">
            {currentDemoItems.map((item, index) => (
              <li key={index} className="item-card">
                <span className="item-number">{(activePage - 1) * itemsPerPage + index + 1}</span>
                <span className="item-text">{item}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="pagination-controls">
          <Button 
            variant={activePage === 1 ? 'disabled' : 'primary'}
            disabled={activePage === 1} 
            onClick={() => handlePageChange(activePage - 1)}
            aria-label="Previous Page"
          >
            <ArrowBigLeft size={18} strokeWidth={2.5} />
            <span className="btn-label">Prev</span>
          </Button>

          <div className="page-numbers">
            {getPageNumbers().map((num, index) => (
              num === '...' ? (
                <span key={`ellipsis-${index}`} className="ellipsis">...</span>
              ) : (
                <button
                  key={`page-${num}`}
                  className={`page-num-btn ${activePage === num ? 'active' : ''}`}
                  onClick={() => handlePageChange(num as number)}
                >
                  {num}
                </button>
              )
            ))}
          </div>

          <Button 
            variant={activePage === totalPages ? 'disabled' : 'primary'}
            disabled={activePage === totalPages} 
            onClick={() => handlePageChange(activePage + 1)}
            aria-label="Next Page"
          >
            <span className="btn-label">Next</span>
            <ArrowBigRight size={18} strokeWidth={2.5} />
          </Button>
        </div>
        {/* This is the page number indicator */}
        <div className="page-indicator-pill">
          Page <strong>{activePage}</strong> of {totalPages}
        </div>
      </StyledWrapper>
    </NeoThemeWrapper>
  );
};

export default PaginationComponent;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 16px;
  font-family: var(--font-lexend), var(--font-sans), sans-serif;
  color: var(--color-text);

  .items-list {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .item-card {
    background: var(--color-accent-2);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 14px 18px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-shadow: var(--shadow-md-1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    color: var(--color-text-black);
  }

  .item-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-lg-1);
  }

  .item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--color-accent-1); /* vibrant pink */
    color: var(--color-text-black);
    font-weight: 800;
    border: 2px solid var(--border-color);
    font-size: 14px;
    box-shadow: 2px 2px 0 var(--border-color);
  }

  .item-text {
    font-weight: 700;
    font-size: 16px;
  }

  .pagination-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
  }

  button.button {
    margin-top: 0 !important;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    padding: 12px 22px;
  }

  .btn-label {
    @media (max-width: 480px) {
      display: none;
    }
  }

  .page-numbers {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .page-num-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: var(--border-width) solid var(--border-color);
    border-radius: 8px;
    background: var(--color-surface, #ffffff);
    color: var(--color-text-black);
    font-weight: 800;
    cursor: pointer;
    box-shadow: 2px 2px 0 var(--border-color);
    transition: all 0.1s ease;
    font-size: 15px;

    &:hover:not(.active) {
      background: var(--color-accent-2);
      transform: translate(-1px, -1px);
      box-shadow: 3px 3px 0 var(--border-color);
    }

    &.active {
      background: var(--color-accent-5); 
      color: var(--color-text-white, #ffffff);
      box-shadow: none;
      transform: translate(2px, 2px);
    }

    &:active:not(.active) {
      transform: translate(2px, 2px);
      box-shadow: none;
    }
  }

  .ellipsis {
    font-weight: 800;
    color: var(--color-text-muted);
    padding: 0 4px;
    user-select: none;
  }

  .page-indicator-pill {
    padding: 6px 16px;
    border: 2px solid var(--border-color);
    border-radius: 20px;
    background: var(--color-accent-2);
    color: var(--color-text-black);
    font-size: 13px;
    font-weight: 600;
    box-shadow: 3px 3px 0 var(--border-color);
  }
`;