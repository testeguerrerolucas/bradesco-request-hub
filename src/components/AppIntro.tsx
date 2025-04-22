
import { BradescoLogo } from "@/components/BradescoLogo";

export default function AppIntro() {
  return (
    <section className="flex flex-col justify-center items-start h-full min-h-[420px] px-3 py-8">
      <div className="flex flex-col items-start gap-6">
      
        {/* Texto chamativo */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r from-bradesco-red to-bradesco-darkRed bg-clip-text text-transparent mb-2 drop-shadow">
          Bradesco <span className="font-extrabold">Solicitação de Serviços</span>
        </h2>
        <p className="text-md md:text-lg text-bradesco-mediumGray max-w-lg font-normal">
          Plataforma interna para requisição de serviços de maneira rápida, <span className="font-semibold text-bradesco-red">moderna</span> e eficiente.<br />
          Preencha ao lado para que sua necessidade seja atendida com prioridade!
        </p>
        <ul className="mt-2 space-y-1 text-sm text-bradesco-mediumGray/80">
          <li>
            <span className="text-bradesco-red font-semibold">•</span> Solicite serviços para qualquer departamento em poucos cliques.
          </li>
          <li>
            <span className="text-bradesco-red font-semibold">•</span> Visualize o status e detalhes da sua solicitação em tempo real.
          </li>
    
        </ul>
      </div>
    </section>
  );
}
