import React from 'react';
import { Button, ButtonGroup } from '@mantine/core';
import Link from 'next/link';

const NavigationButton = ({ href, disabled, children, left, right }: { href: string, disabled?: boolean, children: React.ReactNode, left?: boolean, right?: boolean }) => (
  <Button
    component={Link}
    href={href}
    bg='white'
    c='black'
    w={100}
    h={100}
    variant={disabled ? 'light' : undefined}
    disabled={disabled}
    style={{ 
        border: '2px solid black', 
        borderLeft: left ? '1px solid black' : '2px solid black', 
        borderRight: right ? '1px solid black' : '2px solid black' 
    }}
  >
    {children}
  </Button>
);

const ProjectSwitch = ({ prev, next }: { prev: string, next: string }) => (
  <ButtonGroup>
    <NavigationButton href={`${prev}`} disabled={!prev} right>
      {'<'}
    </NavigationButton>
    <NavigationButton href={`${next}`} disabled={!next} left>
      {'>'}
    </NavigationButton>
  </ButtonGroup>
);

export default ProjectSwitch;
