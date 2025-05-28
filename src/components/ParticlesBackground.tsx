
import React, { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';

const ParticlesBackground = () => {
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Particles loaded:', container);
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#8B5CF6', '#A855F7', '#C084FC', '#E879F9'],
      },
      links: {
        color: '#8B5CF6',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <Particles
      id="tsparticles"
      loaded={particlesLoaded}
      className="absolute inset-0 z-0"
      options={options}
    />
  );
};

export default ParticlesBackground;
