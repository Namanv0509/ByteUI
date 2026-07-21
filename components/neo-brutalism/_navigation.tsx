'use client';

import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import NeoThemeWrapper from "./neo.theme";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./_navigation-menu";

const NavMenuWrapper = styled(NavigationMenu)`
  background: var(--color-accent-2);
  color: var(--color-text-black);
  font-family: var(--font-lexend);
  border: var(--border-width) solid var(--border-color);
  box-shadow: var(--shadow-lg-2);
  font-weight: 700;
  border-radius: var(--border-radius);
`;

const StyledTrigger = styled(NavigationMenuTrigger)`
  font-weight: 700;
  transition: all 0.2s ease;
  border-radius: var(--border-radius);
  &:hover {
    border: var(--border-width) solid var(--border-color);
    background: var(--color-accent-4);
  }
`;

const ContentWrapper = styled(NavigationMenuContent)`
  background: var(--color-accent-1);
  border-radius: var(--border-radius);
  
`;

const GridList = styled.ul<{ $variant?: 'components' | 'default' }>`
  display: grid;
  gap: 10px;
  padding: 12px;
  width: 380px;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);

  @media (min-width: 1024px) {
    width: 500px;
    grid-template-columns: ${props => props.$variant === 'components' ? '1fr 1fr' : '0.75fr 1fr'};
  }
  &:hover{
    box-shadow: var(--shadow-md-1);
    }

  ${props => props.$variant === 'components' && `
    @media (min-width: 768px) {
      width: 500px;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
      width: 600px;
    }
  `}
`;

const FeaturedCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  padding: 24px;
  border: var(--border-width) solid var(--border-color);
  text-decoration: none;
  outline: none;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    box-shadow: var(--shadow-md-1);
    background: var(--color-accent-4);
    border: var(--border-width) solid var(--border-color);
  }
`;

const ListItemWrapper = styled.li`
  /* Base list item container */
`;

const StyledListItem = styled.a`
  display: block;
  padding: 12px;
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  text-decoration: none;
  outline: none;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    box-shadow: var(--shadow-md-1);
    background: var(--color-accent-4);
  }
`;

const ListItemTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-color-black);
  margin-bottom: 4px;
  border-radius: var(--border-radius);
`;

const ListItemDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.25;
  color: var(--color-text-black);
  border-radius: var(--border-radius);
`;

const ListItem = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ title, children, ...props }, ref) => {
    return (
      <ListItemWrapper>
        <NavigationMenuLink asChild>
          <StyledListItem ref={ref} {...props}>
            <ListItemTitle>{title}</ListItemTitle>
            <ListItemDescription>{children}</ListItemDescription>
          </StyledListItem>
        </NavigationMenuLink>
      </ListItemWrapper>
    );
  }
);
ListItem.displayName = "ListItem";

// ==================== TYPES ====================

export interface NavLinkItem {
  title: string;
  href: string;
  description: string;
}

export interface FeaturedCardItem {
  title: string;
  href: string;
  description: string;
}

export interface NavMenuDropdown {
  triggerLabel: string;
  type: 'dropdown';
  variant?: 'default' | 'components';
  featuredCard?: FeaturedCardItem;
  links: NavLinkItem[];
}

export interface NavMenuSingleLink {
  triggerLabel: string;
  type: 'link';
  href: string;
}

export type NavMenuConfigItem = NavMenuDropdown | NavMenuSingleLink;

interface ReusableNavigationMenuProps {
  items: NavMenuConfigItem[];
}


export default function ReusableNavigationMenu({ items }: ReusableNavigationMenuProps) {
  return (
    <NeoThemeWrapper>
      <NavMenuWrapper>
        <NavigationMenuList>
          {items.map((item, index) => {
            if (item.type === 'link') {
              return (
                <NavigationMenuItem key={`${item.triggerLabel}-${index}`}>
                  <Link href={item.href}>
                    {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                    }
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.triggerLabel}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            }
            return (
              <NavigationMenuItem key={`${item.triggerLabel}-${index}`}>
                <StyledTrigger>{item.triggerLabel}</StyledTrigger>
                <ContentWrapper>
                  <GridList $variant={item.variant || 'default'}>
                    {item.featuredCard && (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <FeaturedCard href={item.featuredCard.href}>
                            <div className="mb-2 mt-4 text-lg font-semibold">
                              {item.featuredCard.title}
                            </div>
                            <p className="text-sm leading-tight">
                              {item.featuredCard.description}
                            </p>
                          </FeaturedCard>
                        </NavigationMenuLink>
                      </li>
                    )}
                    {item.links.map((link) => (
                      <ListItem 
                        key={link.title} 
                        href={link.href} 
                        title={link.title}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </GridList>
                </ContentWrapper>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavMenuWrapper>
    </NeoThemeWrapper>
  );
}