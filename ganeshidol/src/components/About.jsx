import React from "react";
import "./About.css";

const processSteps = [
  {
    img: "/wowow.jpg",
    title: "Step 1",
    desc: "We carefully collect premium natural clay from eco-friendly sources, ensuring the material is safe for the environment and suitable for crafting high-quality Ganesh idols."
  },
  {
    img: "/design.jpg",
    title: "Step 2",
    desc: "Our artisans create detailed designs and molds, combining traditional craftsmanship with creative artistry to bring Lord Ganesha's divine form to life."
  },
  {
    img: "/wiw.jpg",
    title: "Step 3",
    desc: "Each idol is handcrafted with devotion and precision, paying close attention to every detail to create a unique and beautiful masterpiece."
  },
  {
    img: "/paintinf.jpg",
    title: "Step 4",
    desc: "Natural, non-toxic, and eco-friendly colors are applied to enhance the beauty of the idol while ensuring environmental safety."
  },
  {
    img: "/devilery.jpg",
    title: "Step 5",
    desc: "Every idol undergoes a thorough quality inspection and is securely packaged to ensure it reaches customers in perfect condition."
  },
  {
    img: "/leat.jpg",
    title: "Step 6",
    desc: "During Visarjan, the clay idol naturally dissolves in water without causing pollution, helping preserve nature and promote sustainable celebrations."
  }
];

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-header">
        <h2>How We Create Eco-Friendly Ganesh Idols</h2>

        <p>
          Every idol is handcrafted with devotion using natural clay,
          eco-friendly colors, and traditional techniques that respect nature.
        </p>
      </div>

      <div className="process-wrapper">
        {processSteps.map((step, index) => (
          <div className="process-card" key={index}>
            <img src={step.img} alt={step.title} />

            <span>{step.title}</span>

            {/* <h3>{step.title}</h3> */}

            <p>{step.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;