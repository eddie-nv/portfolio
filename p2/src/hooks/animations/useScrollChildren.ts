import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationOptions, AnimationVariant } from '@/hooks/animations/types';
import { getAnimationVariant } from '@/utils/animations';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type UseScrollChildrenProps = {
  variant?: AnimationVariant;
  options?: AnimationOptions & {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    staggerAmount?: number;
  };
};

export const useScrollChildren = <T extends HTMLElement = HTMLElement>({
  variant = 'fadeIn',
  options = {},
}: UseScrollChildrenProps = {}) => {
  const containerRef = useRef<T | null>(null);
  const animationConfigRef = useRef({ variant, options });

  useEffect(() => {
    if (!containerRef.current) return;
    
    const children = containerRef.current.children;
    if (children.length === 0) return;
    
    const animationConfig = getAnimationVariant(animationConfigRef.current.variant);
    const opts = animationConfigRef.current.options;
    
    // Set initial state for all children
    gsap.set(children, animationConfig.from);
    
    // Create an array to track all animations for cleanup
    const animations: gsap.core.Tween[] = [];
    
    // Apply scroll animation to each child with individual scroll triggers
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const delay = opts.staggerAmount ? i * opts.staggerAmount : 0;
      
      const animation = gsap.to(child, {
        ...animationConfig.to,
        duration: opts.duration || animationConfig.duration || 0.5,
        ease: opts.ease || 'power2.out',
        delay,
        scrollTrigger: {
          trigger: child,
          start: opts.start || 'top 90%',
          end: opts.end || 'bottom 85%',
          scrub: opts.scrub !== undefined ? opts.scrub : false,
          markers: opts.markers || false,
        },
      });
      
      animations.push(animation);
    }
    
    return () => {
      // Clean up all animations when component unmounts
      animations.forEach(animation => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      });
    };
  }, []);
  
  return containerRef;
};
