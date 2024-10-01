import anime from 'animejs'

// Function to create a fade-up animation for text
export const textFadeUp = (target: string | HTMLElement | NodeList, duration: number = 1000) => {
  anime({
    targets: target,
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeOutExpo',
    duration: duration,
  });
};