export default function ProjectCard({name, description, handleDelete}){
    
    return(
        <div className="project-card">
            <button className="delete-btn" onClick={() => handleDelete(project.id)}>✕</button>
            <div className="project-content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
} 