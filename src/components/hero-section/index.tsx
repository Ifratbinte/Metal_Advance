import React, { useCallback } from 'react';
import Particles, { IParticlesProps } from 'react-particles';
import type {
  Engine,
  ISourceOptions,
  Container,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import './style.css';
import { particlesData } from './particles-data';
// import { heroContent } from '#mocks/jsonData/home.json';

interface Props {
  children?: JSX.Element;
}

const HeroSection: React.FC<Props> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="position-relative">
      <div className="position-relative">
        <Particles
          id="tsparticles"
          height="92vh"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesData}
        />
        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use
              xlinkHref="#wave-path"
              x="50"
              y="3"
              fill="rgba(255,255,255, .1)"
            />
          </g>
          <g className="wave2">
            <use
              xlinkHref="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .2)"
            />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </div>
      <div className="hero-container">{children}</div>
    </div>
  );
};

export default HeroSection;
