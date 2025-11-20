'use client'

import { Box, Grid, GridCol, Text, Stack, Group } from '@mantine/core';
import { Anchor } from '@/components/ui/Anchor';
import { useScrollChildren } from '@/hooks/animations/useScrollChildren';
// Define types for the different content structures
type AboutMeContent = string[];

type ConnectItem = {
  label: string;
  href: string;
  color: string;
};

type ExperienceItem = {
  position: string;
  company: string;
  timeWorked: string;
  companyUrl: string;
};

type ContributionItem = {
  company: string;
  tagline: string;
  viewContribution: string;
  companyUrl: string;
};

type InfoItem = {
  title: string;
  id: string;
  content: AboutMeContent | ConnectItem[] | ExperienceItem[] | ContributionItem[];
};

type InfoGridProps = {
  items: InfoItem[];
};

export const InfoGrid = ({ items }: InfoGridProps) => {
  // Create refs for desktop and mobile
  const desktopInfoGridRef = useScrollChildren<HTMLDivElement>({ 
    variant: 'slideUpFadeIn', 
    options: { 
      delay: 0.2, 
      scrub: false,
      start: 'top 90%'
    } 
  });

  const mobileInfoGridRef = useScrollChildren<HTMLDivElement>({ 
    variant: 'slideUpFadeIn', 
    options: { 
      delay: 0.2, 
      scrub: false,
      start: 'top 90%'
    } 
  });

  const renderContent = (item: InfoItem, isMobile: boolean = false) => {
    switch (item.id) {
      case 'about-me':
        return (
          <Stack gap='lg' >
            {(item.content as AboutMeContent).map((paragraph) => (
              <Text key={crypto.randomUUID()} size='sm'>{paragraph}</Text>
            ))}
          </Stack>
        );
      
      case 'connect':
        return (
          <Group gap='lg' wrap="wrap">
            {(item.content as ConnectItem[]).map((link) => (
              <Anchor 
                key={crypto.randomUUID()}
                href={link.href}
                c={link.color}
                size='sm'
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
        );
      
      case 'experience':
        if (isMobile) {
          return (
            <Stack gap="md">
              {(item.content as ExperienceItem[]).map((exp) => (
                <Stack key={crypto.randomUUID()} gap="xs">
                  <Group gap="xs" wrap="wrap">
                    <Anchor size='sm' href={exp.companyUrl}>{exp.company}</Anchor>
                    <Text size='sm'>{exp.position}</Text>
                  </Group>
                  <Text size='sm' c='gray'>{exp.timeWorked}</Text>
                </Stack>
              ))}
            </Stack>
          );
        }
        return (
          <Stack>
            {(item.content as ExperienceItem[]).map((exp) => (
              <Group key={crypto.randomUUID()} justify="space-between" w="100%" align='center'>
                <Group align='center'>
                  <Anchor size='sm' href={exp.companyUrl}>{exp.company}</Anchor>
                  <Text size='sm'>{exp.position}</Text>
                </Group>
                <Text size='sm' c='gray'>{exp.timeWorked}</Text>
              </Group>
            ))}
          </Stack>
        );
      
      case 'contributions':
        if (isMobile) {
          return (
            <Stack gap="md">
              {(item.content as ContributionItem[]).map((contribution) => (
                <Stack key={crypto.randomUUID()} gap="xs">
                  <Group gap="xs" wrap="wrap">
                    <Anchor size='sm' href={contribution.companyUrl}>{contribution.company}</Anchor>
                    <Text size='sm'>{contribution.tagline}</Text>
                  </Group>
                  <Anchor size='xs' href={contribution.viewContribution} c='gray'>
                    View Project
                  </Anchor>
                </Stack>
              ))}
            </Stack>
          );
        }
        return (
          <Stack>
            {(item.content as ContributionItem[]).map((contribution) => (
              <Group key={crypto.randomUUID()} justify="space-between" w="100%">
                <Group>
                  <Anchor size='sm' href={contribution.companyUrl}>{contribution.company}</Anchor>
                  <Text size='sm'>{contribution.tagline}</Text>
                </Group>
                <Anchor size='sm' href={contribution.viewContribution} c='gray'>
                  View Project
                </Anchor>
              </Group>
            ))}
          </Stack>
        );
      
      default:
        return <Text>Content not available</Text>;
    }
  };

  return (
    <>
      {/* Desktop */}
      <Stack gap={60} ref={desktopInfoGridRef} visibleFrom="sm">
          {items.map((item) => (
              <Grid gutter={0} key={crypto.randomUUID()} w='100%' opacity={0}>
                  <GridCol span={3} >
                      <Text c='gray' >{item.title}</Text>
                  </GridCol>
                  <GridCol span={9} pl={15}>
                      <Box>{renderContent(item)}</Box>
                  </GridCol>
              </Grid>
          ))}    
      </Stack>

      {/* Mobile */}
      <Stack gap={40} ref={mobileInfoGridRef} hiddenFrom="sm" w="100%">
          {items.map((item) => (
              <Stack key={crypto.randomUUID()} gap="sm" w='100%' opacity={0}>
                  <Text c='gray' size="sm" fw={600}>{item.title}</Text>
                  <Box>{renderContent(item, true)}</Box>
              </Stack>
          ))}    
      </Stack>
    </>
  );
};
