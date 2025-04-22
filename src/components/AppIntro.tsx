
import { BradescoLogo } from "@/components/BradescoLogo";

export default function AppIntro() {
  return (
    <section className="flex flex-col justify-center items-center h-full min-h-[420px] px-6 py-8 bg-bradesco-red">
      <div className="flex flex-col items-center text-center space-y-6">
        <BradescoLogo className="w-[300px] h-auto mb-4 text-white" />
        <p className="text-lg text-white font-medium max-w-md">
          Plataforma de solicitação de serviços internos do Banco Bradesco.
        </p>
      </div>
    </section>
  );
}
