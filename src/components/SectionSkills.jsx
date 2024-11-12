import dataSkills from "./DataSkills"

export default function () {
    return (
        <section id="skills" className="font-medium bg-sky-600 flex flex-col items-center">
            <h1 className="mt-7 text-center text-slate-200 text-4xl max-sm:text-2xl mb-4">Habilidades Técnicas</h1>
            <div className="flex justify-center w-full flex-wrap sm:flex-row mb-10">
                {dataSkills.map(({ name, img }) => (
                    <div key={name} className="flex flex-col items-center bg-neutral-800 w-36 h-32 m-4 rounded-xl max-md:m-1">
                        <h1 className="text-3xl	text-slate-200 max-sm:text-2xl max-sm:text-center">{name}</h1>

                        <img className="mt-2 w-16 h-16" src={img} alt="img" />
                    </div>
                ))}
            </div>
        </section>
    )
}