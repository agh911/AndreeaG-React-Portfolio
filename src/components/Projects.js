import myProjects from '../projects.json';
import ProjectPage from './ProjectPage';

function Projects() {
    return (
        <section id="projects" className="container">
            <h1>Projects</h1>
            <p className="mb-4">Here you can explore some of the projects that I have been working on recently.</p>
                <div className='row'>
                    {myProjects.map((project, index) => {
                        return (
                            <ProjectPage key={index} name={project.name} image={project.image} description={project.description} github={project.github} live={project.live} tools={project.tools} />
                        )
                    })}
                </div>
        </section>
    )
}

export default Projects;