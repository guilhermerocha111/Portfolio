import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">Hello 👋</h1>
          <h1 className="font-semibold font-serif text-2xl">
            I'm Guilherme Rocha
          </h1>
          <p className="text-gray-500 py-3">Welcome to my dream 🏠</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b>WebGL 💪</b>
          </p>
          <ul className="leading-9">
            <li className="pl-3">Three.js</li>
            <li className="pl-3">Babylon.js</li>
            <li className="pl-3">Pixi.js</li>
            <li className="pl-3">GSAP</li>
          </ul>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li className="pl-3">React.js</li>
            <li className="pl-3">Next.js</li>
            <li className="pl-3">Vue.js</li>
            <li className="pl-3">Tailwind CSS</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li className="pl-3">NodeJS</li>
            <li className="pl-3">tRPC</li>
            <li className="pl-3">Laravel</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">My past work 💻</h1>
          <p className="text-gray-500 mb-6">
            I'm very expensive but you won't regret it
          </p>
          <p className="p-3">
            <a href="https://venueboost.io/">VenueBoost</a>
          </p>
          <p className="p-3">
            <a href="https://webgi-jewelry.vercel.app/">
              3D Jewelry configurator
            </a>
          </p>
          <p className="p-3">
            <a href="https://atelierjolie-atelier-jolie.vercel.app/">Atelierjolie</a>
          </p>

        </Section>
      </div>
    </Scroll>
  );
};
