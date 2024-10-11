import React from 'react';
import { Button, ButtonGroup } from '@mantine/core';
import Link from 'next/link';

const NavigationButton = ({ href, disabled, children }: { href: string, disabled?: boolean, children: React.ReactNode }) => (
  <Button
    component={Link}
    href={href}
    bg='white'
    c='black'
    w={100}
    h={100}
    variant={disabled ? 'light' : undefined}
    disabled={disabled}
    style={{ border: '2px solid black', borderRight: href ? '1px solid black' : '1px solid black' }}
  >
    {children}
  </Button>
);

const ProjectSwitch = ({ prev, next }: { prev: string, next: string }) => (
  <ButtonGroup>
    <NavigationButton href={`/projects/${prev}`} disabled={!prev}>
      {'<'}
    </NavigationButton>
    <NavigationButton href={`/projects/${next}`} disabled={!next}>
      {'>'}
    </NavigationButton>
  </ButtonGroup>
);

export default ProjectSwitch;
