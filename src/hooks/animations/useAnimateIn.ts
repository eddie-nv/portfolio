import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { AnimationOptions, AnimationVariant } from '@/hooks/animations/types';
import { getAnimationVariant } from '@/utils/animations';

type UseAnimateInProps = {
  variant?: AnimationVariant ;
  options?: AnimationOptions;
};

export const useAnimateIn = <T extends HTMLElement = HTMLElement>({
  variant = 'fadeIn',
  options = {},
}: UseAnimateInProps) => {
  const elementRef = useRef<T | null>(null);
  const animationConfigRef = useRef({ variant, options });
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const animationConfig = getAnimationVariant(animationConfigRef.current.variant);
    const element = elementRef.current;
    const opts = animationConfigRef.current.options;
    
    // Set initial state
    gsap.set(element, animationConfig.from);
    
    // Animate to the final state
    gsap.to(element, {
      ...animationConfig.to,
      duration: opts.duration || animationConfig.duration || 0.5,
      delay: opts.delay || 0,
      ease: opts.ease || 'power2.out',
    });
    
    return () => {
      // Clean up animation if component unmounts during animation
      gsap.killTweensOf(element);
    };
  }, []); // Empty dependency array, only run once on mount
  
  return elementRef;
};
