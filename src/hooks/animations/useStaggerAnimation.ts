import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AnimationOptions, AnimationVariant } from '@/hooks/animations/types';
import { getAnimationVariant } from '@/utils/animations';

type UseStaggerAnimationProps = {
  variant?: AnimationVariant;
  options?: AnimationOptions & {
    staggerAmount?: number;
  };
};

export const useStaggerAnimation = <T extends HTMLElement = HTMLElement>({
  variant = 'stagger',
  options = {},
}: UseStaggerAnimationProps = {}) => {
  const containerRef = useRef<T | null>(null);
  const animationConfigRef = useRef({ variant, options });
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const children = containerRef.current.children;
    if (children.length === 0) return;
    
    const animationConfig = getAnimationVariant(animationConfigRef.current.variant);
    const opts = animationConfigRef.current.options;
    // Set initial state
    gsap.set(children, animationConfig.from);
    
    // Animate to the final state with stagger
    gsap.to(children, {
      ...animationConfig.to,
      duration: opts.duration || animationConfig.duration || 0.5,
      delay: opts.delay || 0,
      ease: opts.ease || 'power2.out',
      stagger: opts.staggerAmount || 0.1,
    });
    
    return () => {
      // Clean up animation if component unmounts during animation
      gsap.killTweensOf(children);
    };
  }, []);
  
  return containerRef;
};
