import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import ProjectForm from './projectform'
import ProjectList from './components/projectlist'
import Footer from './footer'

function App() {
  //holds the projects data in this state, which has an array of objects
  const [projects, setProjects] = useState([
        { id: 1, name: 'AirBnB', description: 'Never struggle to find a perfect place to stay' },
        { id: 2, name: 'Netflix', description: 'Watch all of your favourite movies and shows' },
        { id: 3, name: 'Spotify', description: 'Listen to your favourite music and podcasts' },
        { id: 4, name: 'TikTok', description: 'Create and share short videos with your friends' }

    ]);
    //holds the search term in this state, which is used for seaching for specific projects
  const [searchTerm, setSearchTerm] = useState('')
//handles form submission adding a new project to the state 
    function handleSubmit(event) {
        event.preventDefault()
        console.log('Form submitted')
        const projectInfo = {
            name: event.target.elements['project-name'].value,
            description: event.target.elements['project-description'].value
        }
        //sets the project state to a new array and assigns a unique id
        setProjects(prevProjects => [
            ...prevProjects,
            { id: prevProjects.length + 1, ...projectInfo }
        ])
        alert('Project added successfully!')
        event.target.reset()
    }
//handles deleting a project from the state
    function handleDelete(projectId) {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId))
        alert('Project deleted successfully!')
    }
//handles searching for projects by updating the search term state
    function handleSearch(event) {
        setSearchTerm(event.target.value)
    }
//ensure the case doesnt matter when seaching for projects and also checks both the name and description of the project for the search term
    //this is basically a if/not function
    const displayedProjects = searchTerm
        ? projects.filter(project =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : projects

  return (
    <>
      <Header />
      <ProjectForm projects={projects} handleSubmit={handleSubmit} />
      <ProjectList projects={displayedProjects} handleDelete={handleDelete} handleSearch={handleSearch} />
      <Footer />

    </>
  )
}

export default App
