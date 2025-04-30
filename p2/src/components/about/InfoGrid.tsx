import React from 'react';
import { Box, Grid, GridCol, Text, Stack, Group } from '@mantine/core';
import { Anchor } from '@/components/ui/Anchor';

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
  const renderContent = (item: InfoItem) => {
    switch (item.id) {
      case 'about-me':
        return (
          <Stack gap='lg'>
            {(item.content as AboutMeContent).map((paragraph, i) => (
              <Text key={i} size='sm'>{paragraph}</Text>
            ))}
          </Stack>
        );
      
      case 'connect':
        return (
          <Group gap='lg'>
            {(item.content as ConnectItem[]).map((link, i) => (
              <Anchor 
                key={i}
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
        return (
          <Stack>
            {(item.content as ExperienceItem[]).map((exp, i) => (
              <Group key={i} justify="space-between" w="100%">
                <Group>
                  <Anchor size='sm' href={exp.companyUrl}>{exp.company}</Anchor>
                  <Text size='sm'>{exp.position}</Text>
                </Group>
                <Text size='sm' c='gray'>{exp.timeWorked}</Text>
              </Group>
            ))}
          </Stack>
        );
      
      case 'contributions':
        return (
          <Stack>
            {(item.content as ContributionItem[]).map((contribution, i) => (
              <Group key={i} justify="space-between" w="100%">
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
    <Stack gap={60} maw='640px'>
        {items.map((item, index) => (
            <Grid gutter={0} key={index} w='100%'>
                <GridCol span={3} >
                    <Text c='gray' >{item.title}</Text>
                </GridCol>
                <GridCol span={9} pl={15}>
                    <Box>{renderContent(item)}</Box>
                </GridCol>
            </Grid>
        ))}    
    </Stack>
      
  );
};
