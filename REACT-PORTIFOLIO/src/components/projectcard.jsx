export default function ProjectCard({project, handleDelete}){
    
    return(
        <div className="project-card">
            <button className="delete-btn" onClick={() => handleDelete(project.id)}>✕</button>
            <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
} 