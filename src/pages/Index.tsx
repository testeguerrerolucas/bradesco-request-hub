
import { BradescoLogo } from "@/components/BradescoLogo";
import { Header } from "@/components/Header";
import { RequestNumber } from "@/components/RequestNumber";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";

const Index = () => {
  // Generate a random request number
  const requestNumber = Math.floor(100000000 + Math.random() * 900000000).toString();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-bradesco-gray/30">
      <div className="container max-w-4xl mx-auto py-8 px-4 sm:px-6 font-sans">
        <div className="flex flex-col space-y-6">
          {/* Header with Bradesco logo */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col space-y-4">
              <BradescoLogo />
              <Header 
                title="Solicitação de serviços" 
                subtitle="Sistema interno de requisição de serviços"
                className="flex-1"
              />
            </div>
            <RequestNumber number={requestNumber} className="w-full md:w-auto" />
          </div>
          
          {/* Card with form */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-bradesco-gray/50">
            <ServiceRequestForm />
          </div>
          
          {/* Footer */}
          <div className="text-center text-xs text-bradesco-mediumGray mt-4">
            © {new Date().getFullYear()} Banco Bradesco S.A. - Todos os direitos reservados
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
