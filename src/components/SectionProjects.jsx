// import imgProjects from '../assets/images/embreve.png'
import portifolioImg from '../assets/images/portifolioImg.png'
import faceExpressionImg from '../assets/images/faceExpressionImg.jpg'
import irBudgetsImg from '../assets/images/irBudgetsImg.png'

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function () {
    return (
        <section id="projects" className="font-medium bg-neutral-800 flex flex-col items-center">
            <h1 className="mt-7 text-center text-slate-200 text-4xl max-sm:text-2xl mb-4">Projetos</h1>

            <div className="flex justify-center flex-col mb-7 sm:flex-row sm:flex-wrap ">
                <div className="flex flex-col items-center border-solid border-2 border-sky-600 w-80 h-96 m-4 rounded-xl lg:w-80 delay-75 hover:bg-sky-600">
                    <h1 className="text-3xl	text-slate-200 max-sm:text-2xl max-sm:text-center">IR Budgets</h1>

                    <p className="text-base m-3 text-justify max-sm:text-sm text-slate-200">
                        Projeto freelancer para automatizar orçamentos de Imposto de Renda. Stack: Vue, Nuxt e Node/Nest. A solução otimiza a captação de clientes e transforma processos manuais em um fluxo digital ágil e eficiente.
                    </p>

                    <img className="mt-2 w-52 h-40" src={irBudgetsImg} alt="img" />
                    <div className='mt-2'>
                        <button className="bg-zinc-300 p-2 rounded-md m-1 hover:bg-neutral-800 hover:text-slate-200" onClick={() => { window.open("https://ir-budget.vercel.app/") }}>Acessar</button>
                        
                        <button className="bg-zinc-300 p-2 rounded-md m-1 hover:bg-neutral-800 hover:text-slate-200" onClick={() => {window.open("https://github.com/AdrianoSanderson/ir-budget-api")}}>Back-end</button>
                        
                        <button className="bg-zinc-300 p-2 rounded-md m-1 hover:bg-neutral-800 hover:text-slate-200" onClick={() => {window.open("https://github.com/AdrianoSanderson/ir-budget")}}>Front-end</button>
                    </div>
                </div>

                <div className="flex flex-col items-center border-solid border-2 border-sky-600 w-80 h-96 m-4 rounded-xl lg:w-80 delay-75 hover:bg-sky-600">
                    <h1 className="text-3xl	text-slate-200 max-sm:text-2xl max-sm:text-center">FaceExpression</h1>

                    <p className="text-base m-3 text-justify max-sm:text-sm text-slate-200">
                        Ferramenta para reconhecimento de expressões faciais validada por psicólogo. Utiliza React, Face-api e ApexCharts para detecção em tempo real e geração de gráfico quantitativo para análise de dados.
                    </p>

                    <img className="mt-2 w-64 h-40 object-contain" src={faceExpressionImg} alt="img" />
                    <div className='mt-2'>
                        <button className="bg-zinc-300 p-2 rounded-md m-1 hover:bg-neutral-800 hover:text-slate-200" onClick={() => { window.open("https://face-expression.vercel.app/") }}>Acessar</button>
                        
                        <button className="bg-zinc-300 p-2 rounded-md m-1 hover:bg-neutral-800 hover:text-slate-200" onClick={() => {window.open("https://github.com/AdrianoSanderson/FaceExpression")}}>Front-end</button>
                    </div>
                </div>

                <div className="flex flex-col items-center border-solid border-2 border-sky-600 w-80 h-96 m-4 rounded-xl lg:w-80 delay-75 hover:bg-sky-600">
                    <h1 className="text-3xl	text-slate-200 max-sm:text-2xl max-sm:text-center">Portifólio</h1>

                    <p className="text-base m-3 text-justify max-sm:text-sm text-slate-200">
                        Portfólio pessoal desenvolvido com React, Vite e Tailwind CSS. Focado em alta performance, design responsivo e arquitetura limpa para apresentar minha trajetória e projetos Full Stack.
                    </p>

                    <img className="mt-2 w-64 h-40 object-contain" src={portifolioImg} alt="img" />
                    <div className='mt-2'>
                        <button className="bg-zinc-300 p-2 rounded-md m-1 hover:bg-neutral-800 hover:text-slate-200" onClick={() => { window.open("https://page-sanderson.vercel.app/") }}>Acessar</button>
                        
                        <button className="bg-zinc-300 p-2 rounded-md m-1 hover:bg-neutral-800 hover:text-slate-200" onClick={() => { window.open("https://github.com/AdrianoSanderson/Page_Sanderson") }}>Front-end</button>
                    </div>
                </div>
            </div>
        </section>
    )
}