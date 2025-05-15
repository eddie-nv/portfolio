import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationOptions, AnimationVariant } from '@/hooks/animations/types';
import { getAnimationVariant } from '@/utils/animations';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type UseScrollAnimationProps = {
  variant?: AnimationVariant;
  options?: AnimationOptions & {
    trigger?: string | Element;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    pin?: boolean;
    markers?: boolean;
  };
};

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>({
  variant = 'fadeIn',
  options = {},
}: UseScrollAnimationProps = {}) => {
  const elementRef = useRef<T | null>(null);
  const animationConfigRef = useRef({ variant, options });

  useEffect(() => {
    if (!elementRef.current) return;
    
    const animationConfig = getAnimationVariant(animationConfigRef.current.variant);
    const element = elementRef.current;
    const opts = animationConfigRef.current.options;
    
    // Set initial state
    gsap.set(element, animationConfig.from);
    
    // Create ScrollTrigger animation
    const animation = gsap.to(element, {
      ...animationConfig.to,
      duration: opts.duration || animationConfig.duration || 0.5,
      ease: opts.ease || 'power2.out',
      scrollTrigger: {
        trigger: opts.trigger || element,
        start: opts.start || 'top 100%',
        end: opts.end || 'bottom 85%',
        scrub: opts.scrub !== undefined ? opts.scrub : true, 
        pin: opts.pin || false,
        markers: opts.markers || false,
      },
    });
    
    return () => {
      // Clean up animation when component unmounts
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);
  
  return elementRef;
};
