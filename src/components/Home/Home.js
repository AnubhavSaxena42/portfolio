import Particles from "react-tsparticles";
import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import "./Home.css";
const particlesOptions = {
  background: {
    color: {
      value: "#242424",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
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
      value: "#FEAB26",
    },
    links: {
      color: "#FEAB26",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 20,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

const Home = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div id="wrapper">
      <div className="content">
        <div className="text-box">
          <p
            style={{
              fontFamily: "poppins",
              color: "#FEAB26",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            HEY! IAM
          </p>
          <h1
            style={{
              fontFamily: "poppins",
              color: "white",
              fontWeight: "800",
              fontSize: 40,
            }}
          >
            ANUBHAV SAXENA
          </h1>
          <span style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            {" "}
            I like
            {count ? (
              <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span style={{ color: "#FEAB26", fontSize: 18 }}>
                  <u> Cats.</u>
                </span>
                <Typist.Backspace count={5} delay={1000} />
                <span style={{ color: "#FEAB26", fontSize: 18 }}>
                  <u> React Native. </u>
                </span>
                <Typist.Backspace count={14} delay={1000} />
                <span style={{ color: "#FEAB26", fontSize: 18 }}>
                  <u> JavaScript.</u>
                </span>
                <Typist.Backspace count={11} delay={1000} />
                <span style={{ color: "#FEAB26", fontSize: 18 }}>
                  <u> learning New Tech.</u>
                </span>
                <Typist.Backspace count={18} delay={1000} />
                <span style={{ color: "#FEAB26", fontSize: 18 }}>
                  <u> Video games.</u>
                </span>
              </Typist>
            ) : (
              "I like"
            )}
          </span>
        </div>
      </div>
      <div className="background">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>
    </div>
  );
};
export default Home;
