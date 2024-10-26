'use client'
import { useInViewport } from '@mantine/hooks';
import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

type GsapEffect = {
  opacity?: number;
  y?: number;
  duration?: number;
  ease?: string;
};

type GsapEffectReturn = {
  ref: RefObject<HTMLDivElement>;
};

export const fadeInLeft = (element: HTMLElement, effect: GsapEffect) => {
    gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        { opacity: effect.opacity, x: 0, duration: effect.duration, ease: effect.ease }
    );
};

export const fadeInRight = (element: HTMLElement, effect: GsapEffect) => {
    gsap.fromTo(
        element,
        { opacity: 0, x: 50 },
        { opacity: effect.opacity, x: 0, duration: effect.duration, ease: effect.ease }
    );
};

export const fadeInUp = (element: HTMLElement, effect: GsapEffect) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        { opacity: effect.opacity, y: 0, duration: effect.duration, ease: effect.ease }
    );
};

export const defaultFadeIn = (element: HTMLElement, effect: GsapEffect) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        effect
    );
};

export const useGsapInView = (
    effect: GsapEffect = { opacity: 1, y: 0, duration: 1 }
): GsapEffectReturn => {

    const { ref, inViewport } = useInViewport()
        
    useEffect(() => {
        if (inViewport && ref.current) {
            const element = ref.current;
            const classList = element.classList;

            if (classList.contains('fade-in-left')) {
                fadeInLeft(element, effect);
            } else if (classList.contains('fade-in-right')) {
                fadeInRight(element, effect);
            } else if (classList.contains('fade-in-up')) {
                fadeInUp(element, effect);
            } else {
                defaultFadeIn(element, effect);
            }
        }
    }, [inViewport, effect, ref]);

    return { ref };
};

