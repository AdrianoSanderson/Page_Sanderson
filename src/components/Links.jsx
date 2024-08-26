export default function Links({ togle }) {
    return (
        <>
            <a className="hover:text-sky-600" href="/" onClick={togle}>Início</a>
            <a className="hover:text-sky-600" href="/habilidades" onClick={togle}>Habilidades</a>
            <a className="hover:text-sky-600" href="/projetos" onClick={togle}>Projetos</a>
            <a className="hover:text-sky-600" href="/contato" onClick={togle}>Contato</a>
        </>

    )
}