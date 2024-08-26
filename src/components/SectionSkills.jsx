import dataSkills from "./DataSkills"

export default function () {
    return (
        <section className="font-medium bg-sky-600 flex flex-col items-center">
            <h1 className="mt-7 text-center text-slate-200 text-4xl max-sm:text-2xl mb-4">Habilidades técnicas</h1>
            <div className="flex justify-center flex-col sm:flex-row sm:flex-wrap">
                {dataSkills.map(({ name, text, img }) => (
                    <div className="flex flex-col  items-center bg-neutral-800 w-80 h-96 m-4 rounded-xl lg:w-80">
                        <h1 className="text-3xl	text-slate-200 max-sm:text-2xl max-sm:text-center">{name}</h1>

                        <img className="mt-2 w-16 h-16" src={img} alt="img" />
                        
                        <p className="text-lg m-3 text-justify max-sm:text-xl text-slate-200">{text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}