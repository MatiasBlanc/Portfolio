import Project from '../components/Project.jsx'
import Navbar from '../components/Navbar.jsx'
import About from '../components/About'
import '../styles/Home.css'
import '../styles/App.css'

// TODO: Agregar certificados
// TODO: Estadisticas importantes
const Home = () => {
    return (
    <>
        <Navbar />
        <header className='header'>
            <h2 className='header__name'>Matias F. Blanc</h2>
            <h3 className='header__subtitle'>Frontend developer</h3>
        </header>
        <Project />
        <footer>
            <p>Spotify</p>
        </footer>
    </>
)
}

export default Home