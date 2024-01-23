import { skills } from "../data";

const Skills = () => {
  return (
    <div id="skills" className="container skills__container">
      <div className="skills__info">
        <h2>Habilidades y Tecnologías:</h2>
        <p>
          Aún considero que me falta mucho por aprender, pero en mis estudios
          realizados, se encuentran las siguientes herramientas.
        </p>
      </div>
      <div className="skills__positions">
        {skills.map((skill) => (
          <div key={skill} className="div__skills">
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
