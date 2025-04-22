
import { cn } from "@/lib/utils";

interface RequestNumberProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  className?: string;
}

export function RequestNumber({ number, className, ...props }: RequestNumberProps) {
  return (
    <div 
      className={cn(
        "bg-gradient-to-r from-bradesco-red/10 to-bradesco-red/5 backdrop-blur-sm border border-bradesco-red/20 rounded-xl px-6 py-3 text-bradesco-darkGray flex items-center justify-between shadow-sm",
        className
      )} 
      {...props}
    >
      <span className="text-sm font-semibold text-bradesco-mediumGray">Nº da Solicitação:</span>
      <span className="text-xl font-bold text-bradesco-red">{number}</span>
    </div>
  );
}
