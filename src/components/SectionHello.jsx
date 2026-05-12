export default function SectionHello() {
    return (
        <section id="home" className="bg-neutral-900	text-slate-200  font-medium	flex justify-center">
            <div className="flex w-11/12 mt-32 mb-10 max-md:flex-col-reverse max-md:mt-16">
                <div className="w-6/12 flex flex-col gap-4 max-md:w-full max-md:items-center">
                    <h1 className="text-4xl	max-sm:text-2xl max-sm:text-center">Olá, me chamo
                        <span className="text-sky-600"> Adriano Sanderson</span>
                   
                    </h1>
                    <h3 className="text-3xl	text-sky-600 mb-4 max-sm:text-2xl max-sm:text-center">
                        Desenvolvedor Full Stack
                    </h3>
                    
                    <p className="text-2xl text-justify max-sm:text-xl mb-4">
                        Especialista no desenvolvimento de soluções para os setores bancário, financeiro e de compliance. Com domínio técnico no ecossistema Vue.js e arquiteturas em Node/NestJS, atuo na construção de plataformas de alta performance. Além da experiência em sistemas corporativos, desenvolvo projetos personalizados como freelancer, entregando sempre usabilidade e inovação. Graduado em Sistemas de Informação pela UFPA.
                    </p>
                </div>
                <div className="w-6/12 flex flex-col items-center max-md:w-full max-md:justify-center">
                    <img className="w-96 h-96 max-sm:h-80 w-80" src="profile.png" alt="profile" />
                    <div className="mt-8">
                        <button 
                                className="bg-zinc-300 w-28 text-sky-600 h-7 rounded-md m-2 hover:bg-neutral-800"
                                onClick={() => { window.open("https://www.linkedin.com/in/adrianosanderson/", "_blank") }}
                            >
                                LinkedIn
                            </button>

                            <button 
                                className="bg-zinc-300 w-28 text-sky-600 h-7 rounded-md m-2 hover:bg-neutral-800"
                                onClick={() => { window.open("https://github.com/AdrianoSanderson", "_blank") }}
                            >
                                Github
                            </button>
                    </div>
                </div>
            </div>
        </section>
    )
}