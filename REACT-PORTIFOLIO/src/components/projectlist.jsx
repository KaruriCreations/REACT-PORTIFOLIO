import ProjectCard from './projectcard'

export default function ProjectList({projects, handleDelete, handleSearch}) {
    //added this in a case where there are no projects in state to be displayed
    function handleEmptyProject() {
        if (projects.length === 0) {
            return <h3>Please Add a Project to View it.</h3>;
        }
    }

    return(
        <div className="projects-container">
            <input type="text" placeholder='Search Projects' className="search-input" onChange={handleSearch} />
            <div className="projects-list">
                {handleEmptyProject() || projects.map(project => <ProjectCard id={project.id} key={project.id} name={project.name} description={project.description} handleDelete={handleDelete} />)}
            </div>
        </div>
    )
}
        