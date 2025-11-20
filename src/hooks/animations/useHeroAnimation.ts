import { useAnimateIn } from '@/hooks/animations/useAnimateIn'
import { useStaggerAnimation } from '@/hooks/animations/useStaggerAnimation'
import type { RefObject } from 'react'

type HeroSectionAnimationRefs = {
  jobTitleRef: RefObject<HTMLParagraphElement | null>
  titleRef: RefObject<HTMLParagraphElement | null>
  subtitleRef: RefObject<HTMLParagraphElement | null>
  linksRef: RefObject<HTMLDivElement | null>
}

export const useHeroAnimation = (): {
  desktop: HeroSectionAnimationRefs
  mobile: HeroSectionAnimationRefs
} => {
  // Desktop refs
  const desktopJobTitleRef = useAnimateIn<HTMLParagraphElement>({
    variant: 'slideUpFadeIn',
    options: { delay: 0.4 },
  })

  const desktopTitleRef = useAnimateIn<HTMLParagraphElement>({
    variant: 'slideUpFadeIn',
    options: { delay: 0.4 },
  })

  const desktopSubtitleRef = useAnimateIn<HTMLParagraphElement>({
    variant: 'slideUpFadeIn',
    options: { delay: 0.4 },
  })

  const desktopLinksRef = useStaggerAnimation<HTMLDivElement>({
    variant: 'slideUpFadeIn',
    options: { delay: 0.58, staggerAmount: 0.2 },
  })

  // Mobile refs
  const mobileJobTitleRef = useAnimateIn<HTMLParagraphElement>({
    variant: 'slideUpFadeIn',
    options: { delay: 0.4 },
  })

  const mobileTitleRef = useAnimateIn<HTMLParagraphElement>({
    variant: 'slideUpFadeIn',
    options: { delay: 0.4 },
  })

  const mobileSubtitleRef = useAnimateIn<HTMLParagraphElement>({
    variant: 'slideUpFadeIn',
    options: { delay: 0.4 },
  })

  const mobileLinksRef = useStaggerAnimation<HTMLDivElement>({
    variant: 'slideUpFadeIn',
    options: { delay: 0.58, staggerAmount: 0.2 },
  })

  return {
    desktop: {
      jobTitleRef: desktopJobTitleRef,
      titleRef: desktopTitleRef,
      subtitleRef: desktopSubtitleRef,
      linksRef: desktopLinksRef,
    },
    mobile: {
      jobTitleRef: mobileJobTitleRef,
      titleRef: mobileTitleRef,
      subtitleRef: mobileSubtitleRef,
      linksRef: mobileLinksRef,
    },
  }
}

