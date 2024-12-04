import imgProjects from '../assets/images/embreve.png'
import portifolioImg from '../assets/images/portifolioImg.png'
import faceExpressionImg from '../assets/images/faceExpressionImg.jpg'

export default function () {
    return (
        <section id="projects" className="font-medium bg-neutral-800 flex flex-col items-center">
            <h1 className="mt-7 text-center text-slate-200 text-4xl max-sm:text-2xl mb-4">Projetos</h1>

            <div className="flex justify-center flex-col mb-7 sm:flex-row sm:flex-wrap ">
                <div className="flex flex-col items-center border-solid border-2 border-sky-600 w-80 h-96 m-4 rounded-xl lg:w-80 delay-75 hover:bg-sky-600">
                    <h1 className="text-3xl	text-slate-200 max-sm:text-2xl max-sm:text-center">Portifólio</h1>

                    <p className="text-base m-3 text-justify max-sm:text-sm text-slate-200">Nesse Projeto estou desenvolvendo um Portifólio com React, Tailwind e Vite. Onde posso apresentar meus projetos e habilidades.</p>


                    <img className="mt-2 w-64 h-40 object-contain" src={portifolioImg} alt="img" />
                    <div className='mt-2'>
                        <button className="bg-zinc-300 w-28 h-7 rounded-md m-2 hover:bg-neutral-800 hover:text-slate-200" onClick={() => { window.open("https://page-sanderson.vercel.app/") }}>Ver Projeto</button>
                        
                        <button className="bg-zinc-300 w-28 h-7 rounded-md m-2 hover:bg-neutral-800 hover:text-slate-200" onClick={() => { window.open("https://github.com/AdrianoSanderson/Page_Sanderson") }}>Ver Código</button>
                    </div>
                </div>

                <div className="flex flex-col items-center border-solid border-2 border-sky-600 w-80 h-96 m-4 rounded-xl lg:w-80 delay-75 hover:bg-sky-600">
                    <h1 className="text-3xl	text-slate-200 max-sm:text-2xl max-sm:text-center">FaceExpression</h1>

                    <p className="text-base m-3 text-justify max-sm:text-sm text-slate-200">Esse projeto é uma ferramenta de reconhecimento de expressões faciais. Que pode auxiliar Psicologos na avaliação de pacientes.</p>


                    <img className="mt-2 w-64 h-40 object-contain" src={faceExpressionImg} alt="img" />
                    <div className='mt-2'>
                        <button className="bg-zinc-300 w-28 h-7 rounded-md m-2 hover:bg-neutral-800 hover:text-slate-200" onClick={() => { window.open("https://face-expression.vercel.app/") }}>Ver Projeto</button>
                        
                        <button className="bg-zinc-300 w-28 h-7 rounded-md m-2 hover:bg-neutral-800 hover:text-slate-200" onClick={() => {window.open("https://github.com/AdrianoSanderson/FaceExpression")}}>Ver Código</button>
                    </div>
                </div>

                <div className="flex flex-col items-center border-solid border-2 border-sky-600 w-80 h-96 m-4 rounded-xl lg:w-80 delay-75 hover:bg-sky-600">
                    <h1 className="text-3xl	text-slate-200 max-sm:text-2xl max-sm:text-center">Projeto 3</h1>

                    <p className="text-base m-3 text-justify max-sm:text-sm text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis voluptate iste fuga minus qui iusto. Quaerat totam perspiciatis, quae quisquam  </p>


                    <img className="mt-2 w-52 h-40" src={imgProjects} alt="img" />
                    <div className='mt-2'>
                        <button className="bg-zinc-300 w-28 h-7 rounded-md m-2 hover:bg-neutral-800 hover:text-slate-200">Ver Projeto</button>
                        
                        <button className="bg-zinc-300 w-28 h-7 rounded-md m-2 hover:bg-neutral-800 hover:text-slate-200">Ver Código</button>
                    </div>
                </div>
            </div>
        </section>
    )
}