import ProjectCard from './projectcard'

export default function ProjectList({projects, handleDelete, handleSearch}) {
    
    
    return(
        <div className="projects-container">
            <input type="text" placeholder='Search Projects' className="search-input" onChange={handleSearch} />
            <div className="projects-list">
                
                {projects.map(project => <ProjectCard key={project.id} name={project.name} description={project.description} handleDelete={handleDelete} />)}
            </div>
        </div>
    )
}
        