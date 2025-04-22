
import { cn } from "@/lib/utils";

type StatusType = "pending" | "approved" | "in_progress" | "completed" | "cancelled";

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  pending: {
    bg: "bg-yellow-50",
    text: "text-yellow-800",
    label: "Pendente"
  },
  approved: {
    bg: "bg-green-50",
    text: "text-green-800",
    label: "Aprovado"
  },
  in_progress: {
    bg: "bg-blue-50",
    text: "text-blue-800",
    label: "Em Andamento"
  },
  completed: {
    bg: "bg-bradesco-gray",
    text: "text-bradesco-darkGray",
    label: "Concluído"
  },
  cancelled: {
    bg: "bg-red-50",
    text: "text-red-800",
    label: "Cancelado"
  }
};

export function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <div 
      className={cn(
        config.bg,
        config.text,
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        className
      )} 
      {...props}
    >
      {config.label}
    </div>
  );
}
