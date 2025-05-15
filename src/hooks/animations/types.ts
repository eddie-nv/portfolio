

export type AnimationVariant = 
  | 'fadeIn' 
  | 'slideUp' 
  | 'slideDown' 
  | 'slideLeft' 
  | 'slideRight'
  | 'scale' 
  | 'rotate'
  | 'stagger'
  | 'slideUpFadeIn'
  | 'slideDownFadeIn'
  | 'shrinkWithBorder'
  | 'slideToTarget';

export type AnimationOptions = {
  duration?: number;
  delay?: number;
  ease?: string;
};

export type AnimationConfig = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  duration?: number;
};
