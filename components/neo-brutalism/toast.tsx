'use client';

import React from 'react';
import styled from 'styled-components';
import { Sparkles, AlertTriangle } from 'lucide-react';
import NeoThemeWrapper from './neo.theme';
import Button from './button';
import { toast } from '@/hooks/use-toast';

const PageContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 40px 20px;
  color: var(--color-text-black, #000000);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: var(--font-lexend), sans-serif;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: -1.5px;
  line-height: 1.1;
  transform: rotate(-1.5deg);
  display: inline-block;
  background: var(--color-accent-1);
  padding: 10px 24px;
  border: var(--border-width, 3px) solid var(--border-color, #000000);
  box-shadow: var(--shadow-md-1, 6px 6px 0 #1e1e1e);
  margin-top: 10px;
`;

const Subtitle = styled.p`
  font-family: var(--font-sans), sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  opacity: 0.85;
  max-width: 480px;
  margin: 24px auto 0;
  line-height: 1.5;
`;

const ControlCard = styled.div`
  background: var(--color-surface, #ffffff);
  border: var(--border-width, 3px) solid var(--border-color, #000000);
  border-radius: var(--border-radius, 15px);
  box-shadow: var(--shadow-lg-1, 10px 10px 0 #1e1e1e);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const TriggerBlock = styled.div<{ $color: string }>`
  border: 3px dashed var(--border-color, #000000);
  border-radius: var(--border-radius, 15px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  background: ${(props) => props.$color};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const IconContainer = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #ffffff;
  border: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 0px #000000;
`;

const BlockTitle = styled.h3`
  font-family: var(--font-lexend), sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  margin: 0;
`;

const BlockDesc = styled.p`
  font-family: var(--font-sans), sans-serif;
  font-size: 0.9rem;
  font-weight: 550;
  opacity: 0.75;
  margin: 0;
  line-height: 1.4;
`;

export default function Page() {
  const showSuccessToast = () => {
    toast({
      title: 'Action Complete!',
      description: 'Your changes have been successfully saved.',
      variant: 'success' as any ,
    });
  };

  const showDestructiveToast = () => {
    toast({
      title: 'Danger Zone!',
      description: 'A critical error occurred while deleting selected resource.',
      variant: 'destructive',
    });
  };
  const showWarningToast = () => {
    toast({
      title: 'Warning!',
      description: 'This action may have unintended consequences.',
      variant: 'warning',
    });
  };
  const showDefaultToast = () => {
    toast({
      title: 'Default',
      description: 'This is a default toast.',
      variant: 'default',
    });
  };

  return (
    <NeoThemeWrapper>
      <PageContainer>
        <ControlCard>
          <ShowcaseGrid>
            <TriggerBlock $color="var(--success)">
              <Button variant="primary" onClick={showSuccessToast} style={{ width: '100%' }}>
                Trigger Success
              </Button>
            </TriggerBlock>
            <TriggerBlock $color="var(--warning)">
              <Button variant="primary" onClick={showWarningToast} style={{ width: '100%' }}>
                Trigger Warning
              </Button>
            </TriggerBlock>
            <TriggerBlock $color="var(--default)">
              <Button variant="primary" onClick={showDefaultToast} style={{ width: '100%' }}>
                Trigger Default
              </Button>
            </TriggerBlock>

            <TriggerBlock $color="var(--error)">
              <Button variant="primary" onClick={showDestructiveToast} style={{ width: '100%' }}>
                Trigger Alert
              </Button>
            </TriggerBlock>
          </ShowcaseGrid>
        </ControlCard>
      </PageContainer>
    </NeoThemeWrapper>
  );
}