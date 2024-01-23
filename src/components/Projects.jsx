import { projects } from "../data";

const Projects = () => {
  console.log(projects);
  return (
    <>
      <section id="projects" className="container projects__container">
        <div className="projects__info">
          <h2>Proyectos que desarrollado:</h2>
          <p>
            Arranque mis estudios relacionados a la tecnología en la Facultad de
            matemática, astronomía y física ( FaMAF ) de la Universidad nacional
            de Córdoba.
          </p>
          <p>
            Pero fue mediante distintas plataformas online (Por ejemplo
            CoderHouse, Youtube, Platzi, FreeCodeCamp, Udemy), que adquiri los
            conocimientos para realizar los siguientes proyectos:
          </p>
        </div>
        <div className="projects__cards">
          {projects.map((project) => (
            <a href={project.link} key={project.id} className="card__links">
              <div className="card-group">
                <div className="card text-bg-dark">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{project.subtitle}</h6>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
