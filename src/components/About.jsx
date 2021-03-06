import matiasblanc from '../assets/MatiasBlanc.webp';

const About = () => {
    return (
    <section className='about-me' id='aboutme'>
        <div className='about-me__text'>
            <p className='about-me__description'>Soy Matias Blanc(he/him), vivo en Chile, tengo 15 años y empece a programar hace unos 2 años como FrontEnd. Ademas de Matias tambien soy Sendero Tecnologico, mi comunidad donde enseño lo que voy aprendiendo, doy talleres, charlas y creo proyectos.</p>
            <a className='about-me__btn' target="_black" href="https://www.linkedin.com/in/matias-blanc-2931091b7/">Download CV</a>
        </div>
        <div>
            <img className='about-me__image' src={matiasblanc} alt="" />
        </div>
    </section>
    );
}

export default About
