import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Call once on mount to reveal elements already in view

    return () => window.removeEventListener('scroll', reveal);
  }, []);
}
