
import AppIntro from "@/components/AppIntro";
import { RequestNumber } from "@/components/RequestNumber";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";

const Index = () => {
  // Generate a random request number
  const requestNumber = Math.floor(100000000 + Math.random() * 900000000).toString();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-bradesco-gray/20">
      <div className="container mx-auto px-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-bradesco-gray/30 max-w-[1024px] mx-auto">
          {/* ESQUERDA: Apresentação */}
          <div className="bg-gradient-to-br from-white via-white/95 to-bradesco-red/5 flex flex-col justify-center">
            <AppIntro />
          </div>
          {/* DIREITA: Formulário de solicitação */}
          <div className="flex flex-col justify-center px-4 sm:px-8 py-8 bg-white relative">
            <RequestNumber number={requestNumber} className="mb-7" />
            <div className="max-w-md w-full mx-auto">
              <ServiceRequestForm />
            </div>
            <div className="text-center text-xs text-bradesco-mediumGray mt-8">
              © {new Date().getFullYear()} Banco Bradesco S.A. - Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
