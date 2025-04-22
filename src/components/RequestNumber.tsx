
import { cn } from "@/lib/utils";

interface RequestNumberProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  className?: string;
}

export function RequestNumber({ number, className, ...props }: RequestNumberProps) {
  return (
    <div 
      className={cn(
        "bg-bradesco-gray border border-bradesco-mediumGray/20 rounded-md px-4 py-2 text-bradesco-darkGray flex items-center justify-between",
        className
      )} 
      {...props}
    >
      <span className="text-sm font-semibold">Nº da Solicitação:</span>
      <span className="text-lg font-bold">{number}</span>
    </div>
  );
}
