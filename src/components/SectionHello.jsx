export default function SectionHello() {
    return (
        <section className="bg-neutral-900	text-slate-200  font-medium	flex justify-center">
            <div className="flex w-11/12 mt-32 mb-20 max-md:flex-col-reverse max-md:mt-16">
                <div className="w-6/12 flex flex-col gap-4 max-md:w-full max-md:items-center">
                    <h1 className="text-4xl	max-sm:text-2xl max-sm:text-center">Olá, me chamo 
                        <span className="text-sky-600"> Adriano Sanderson</span>
                    </h1>
                    <h3 className="text-3xl	text-sky-600 max-sm:text-2xl max-sm:text-center">Desenvolvedor Front End</h3>
                    <p className="text-2xl text-justify max-sm:text-xl">Apaixonado por tecnologia, estou cursando Sistemas de Informação e transformando ideias em experiências digitais. Especializado em Front-end, busco aprimorar meus conhecimentos e aplicar as melhores práticas para criar interfaces intuitivas e funcionais. Meu objetivo é proporcionar uma experiência excepcional ao usuário, sempre inovando e melhorando a usabilidade dos projetos.</p>
                </div>
                <div className="w-6/12 flex justify-end max-md:w-full max-md:justify-center">
                    <img className="h-96 max-sm:h-80" src="profile.png" alt="profile" />
                </div>
            </div>
        </section>
    )
}