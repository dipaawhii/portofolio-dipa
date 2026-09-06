import { useEffect } from 'react';

export function useTilt() {
  useEffect(() => {
    const tiltElements = Array.from(document.querySelectorAll('.tilt-element'));
    const listeners = [];

    tiltElements.forEach((element) => {
      const onMouseMove = (e) => {
        if (window.innerWidth <= 768) return;

        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const onMouseLeave = () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        element.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      };

      const onMouseEnter = () => {
        element.style.transition = 'none';
      };

      element.addEventListener('mousemove', onMouseMove);
      element.addEventListener('mouseleave', onMouseLeave);
      element.addEventListener('mouseenter', onMouseEnter);

      listeners.push({ element, onMouseMove, onMouseLeave, onMouseEnter });
    });

    return () => {
      listeners.forEach(({ element, onMouseMove, onMouseLeave, onMouseEnter }) => {
        element.removeEventListener('mousemove', onMouseMove);
        element.removeEventListener('mouseleave', onMouseLeave);
        element.removeEventListener('mouseenter', onMouseEnter);
      });
    };
  }, []);
}
