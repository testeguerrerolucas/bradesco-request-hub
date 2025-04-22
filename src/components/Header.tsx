
import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Header({ title, subtitle, className, ...props }: HeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5", className)} {...props}>
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-bradesco-darkGray">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-bradesco-mediumGray">{subtitle}</p>
      )}
    </div>
  );
}
