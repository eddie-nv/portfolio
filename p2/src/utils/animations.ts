import { AnimationConfig, AnimationVariant } from '@/hooks/animations/types';


const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1 },
  duration: 0.6,
}

const slideUp = {
  from: { opacity: 0, y: 50 },
  to: { opacity: 1, y: 0 },
  duration: 0.7,
}

const slideDown = {
  from: { opacity: 0, y: -50 },
  to: { opacity: 1, y: 0 },
  duration: 0.7,
}   

const slideLeft = {
  from: { opacity: 0, x: 50 },
  to: { opacity: 1, x: 0 },
  duration: 0.7,
}   

const slideRight = {
  from: { opacity: 0, x: -50 },
  to: { opacity: 1, x: 0 },
  duration: 0.7,
}   

const scale = {
  from: { opacity: 0, scale: 0.8 },
  to: { opacity: 1, scale: 1 },
  duration: 0.5,
}   

const rotate = {
  from: { opacity: 0.5, rotation: 20, y: 90 },
  to: { opacity: 1, rotation: 0, y: 0 },
  duration: 0.5,
}   

const stagger = {
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 },
  duration: 0.4,
}   

const shrinkWithBorder = {
  from: { opacity: 1, borderRadius: '0', width: '100%', y: 0 },
  to: { opacity: 0.75, borderRadius: '20', width: '95%', y: -300 },
  duration: 0.3,
}   



const animations: Record<AnimationVariant, AnimationConfig> = {
  fadeIn,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  scale,
  rotate,
  stagger,
  shrinkWithBorder,
  slideUpFadeIn: {
    from: { ...slideUp.from, ...fadeIn.from },
    to: { ...slideUp.to, ...fadeIn.to },
    duration: 0.7,
  },
  slideDownFadeIn: {
    from: { ...slideDown.from, ...fadeIn.from },
    to: { ...slideDown.to, ...fadeIn.to },
    duration: 0.7,
  },
};

export const getAnimationVariant = (variant: AnimationVariant): AnimationConfig => {
  return animations[variant];
};

