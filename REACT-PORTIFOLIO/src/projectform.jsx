export default function ProjectForm({ projects, handleSubmit }) {
    
    return(
        <form onSubmit={handleSubmit} className="project-form">
            <p>Add Project</p>
            <label htmlFor="project-name">Title</label>
            <input id="project-name" type="text" placeholder='' />
            <label htmlFor="project-description">Description</label>    
            <textarea id="project-description" placeholder='' rows="4"></textarea>
            <button type='submit'>Add</button>
        </form>
    )
}