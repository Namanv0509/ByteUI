'use client';

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from 'cmdk';
import { Search, User, Settings, LogOut, CreditCard  } from 'lucide-react';
import styled from 'styled-components';
import "@fontsource/public-sans";
import NeoThemeWrapper from './neo.theme';

const NeoBrutalismCommandPalette = () => {
  const runCommand = (action: () => void) => {
    action();
  };

  return (
    <NeoThemeWrapper>
    <StyledWrapper>
      <Command className="neo-brutal-command">
        <div className="neo-header">
          <Search className="search" />
          <CommandInput
            placeholder="Type a command or search..."
            className="neo-input"
            autoFocus
          />
        </div>
        <CommandList className="neo-list">
          <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem
              onSelect={() => runCommand(() => console.log('Navigate to profile'))}
              className="neo-item"
            >
              <User className="h-7 w-7" />
              Go to Profile
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => console.log('Navigate to subscription'))}
              className="neo-item"
            >
              <CreditCard className="h-7 w-7" />
              Subscription
            </CommandItem>

          <CommandGroup heading="Actions" className="neo-group margin-bottom-12">
            <CommandItem
              className="neo-item neo-accent-1"
            >
              <Settings className="h-7 w-7" />
              Settings
            </CommandItem>

            <CommandItem
              onSelect={() => runCommand(() => console.log('Logout'))}
              className="neo-item"
            >
              <LogOut className="h-7 w-7" />
              Logout
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </StyledWrapper>
    </NeoThemeWrapper>
  );
};

export default NeoBrutalismCommandPalette;

/* ====================== STYLED COMPONENTS ====================== */

const StyledWrapper = styled.div`
  .search{
  height:3rem;
  width:2.5rem;
  padding: 0.2rem;
  color: black;
    }
  .neo-brutal-command {
    width: 420px;
    max-width: 520px;
    background: var(--color-accent-2);
    border: var(--border-width-thick) solid var(--border-color);
    box-shadow: var(--shadow-lg-2);
    font-family: var(--font-sans);
    overflow: hidden;
    margin: 10px auto;
    border-radius: var(--border-radius);
  }

  .neo-header {
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: var(--border-width-thick) solid var(--border-color);
    padding: 10px 24px;
    background: var(--color-accent-2);
  }

  .neo-input {
    flex: 1;
    outline: none;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-text);
    font-family: var(--font-lexend);
  }

  .neo-input::placeholder {
    color: var(--color-text-muted);
    font-family: var(--font-sans);
    font-weight: 500;
  }

  .neo-list {
    max-height: 480px;
    overflow-y: auto;
    padding: 5px;
    background: var(--color-accent-2);
    color: black;
  }

  .neo-group {
    margin-bottom: 12px;
    color: black;
  }

  .neo-item {
    padding: 14px 15px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    border: var(--border-width) solid var(--border-color);
    background: var(--color-accent-2);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.1s ease;
  }

  .neo-item:hover {
    transform: translate(-3px, -3px);
    box-shadow: var(--shadow-md-2);
  }

  .neo-item[aria-selected="true"] {
    background: var(--color-accent-2);
    border-color: var(--border-color);
    transform: translate(-2px, -2px);
  }

  .neo-separator {
    height: var(--border-width-thick);
    background: var(--border-color);
    margin: 12px 3px;
  }
  .neo-list [cmdk-empty] {
    padding: 60px 20px;
    text-align: center;
    font-size: 1.1rem;
    color: var(--color-text-muted);
  }
`;