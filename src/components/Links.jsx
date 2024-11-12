import { Link } from "react-scroll"

export default function Links({ togle }) {
    return (
        <>
            <Link to="home" smooth="true" duration={1000} className="hover:text-sky-600 cursor-pointer" onClick={togle}>Início</Link>

            <Link to="skills" smooth="true" duration={1000} offset={-50}
            className="hover:text-sky-600 cursor-pointer" onClick={togle}>Habilidades</Link>

            <Link to="projects" smooth="true" duration={1000} offset={-49} className="hover:text-sky-600 cursor-pointer" onClick={togle}>Projetos</Link>


            <a className="hover:text-sky-600" href="/contato" onClick={togle}>Contato</a>
        </>

    )
}