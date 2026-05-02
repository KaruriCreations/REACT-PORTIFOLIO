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
  const [projects, setProjects] = useState([
        { id: 1, name: 'Project 1', description: 'Description of the project' },
        { id: 2, name: 'Project 2', description: 'Description of the project' },
        { id: 3, name: 'Project 3', description: 'Description of the project' }
    ]);
  const [searchTerm, setSearchTerm] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Form submitted')
        const projectInfo = {
            name: event.target.elements['project-name'].value,
            description: event.target.elements['project-description'].value
        }
        setProjects(prevProjects => [
            ...prevProjects,
            { id: projectInfo.name, ...projectInfo }
        ])
    }

    function handleDelete(projectId) {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId))
    }

    function handleSearch(event) {
        setSearchTerm(event.target.value)
    }

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
