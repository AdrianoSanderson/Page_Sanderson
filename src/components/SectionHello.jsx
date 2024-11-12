export default function SectionHello() {
    return (
        <section id="home" className="bg-neutral-900	text-slate-200  font-medium	flex justify-center">
            <div className="flex w-11/12 mt-32 mb-10 max-md:flex-col-reverse max-md:mt-16">
                <div className="w-6/12 flex flex-col gap-4 max-md:w-full max-md:items-center">
                    <h1 className="text-4xl	max-sm:text-2xl max-sm:text-center">Olá, me chamo
                        <span className="text-sky-600"> Adriano Sanderson</span>
                   
                    </h1>
                    <h3 className="text-3xl	text-sky-600 mb-4 max-sm:text-2xl max-sm:text-center">Desenvolvedor Full Stack</h3>
                    
                    <p className="text-2xl text-justify max-sm:text-xl mb-4">Estudante de Sistemas de Informação e apaixonado por tecnologia, atuo como desenvolvedor Full Stack focado em transformar ideias em experiências digitais inovadoras. Busco aprimorar constantemente minhas habilidades para criar interfaces intuitivas e funcionais, garantindo uma usabilidade fluida e envolvente em cada projeto, desde landing pages até plataformas completas.</p>

                    <div>
                        <button className="bg-zinc-300 w-28 text-sky-600 h-7 rounded-md m-2 hover:bg-neutral-800" onClick={() => { window.open("https://www.linkedin.com/in/adrianosanderson/", "_blank") }}>LinkedIn</button>

                        <button className="bg-zinc-300 w-28 text-sky-600 h-7 rounded-md m-2 hover:bg-neutral-800" onClick={() => { window.open("https://github.com/AdrianoSanderson", "_blank") }}>Github</button>
                    </div>
                </div>
                <div className="w-6/12 flex justify-end max-md:w-full max-md:justify-center">
                    <img className="h-96 max-sm:h-80" src="profile.png" alt="profile" />
                </div>
            </div>
        </section>
    )
}