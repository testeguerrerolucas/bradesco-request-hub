
import { cn } from "@/lib/utils";

interface BradescoLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function BradescoLogo({ className, ...props }: BradescoLogoProps) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <svg
        width="150"
        height="40"
        viewBox="0 0 150 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.0009 10.3965H33.7275V29.2206H42.0009C46.5488 29.2206 50.237 25.4959 50.237 19.8086C50.237 14.1213 46.5488 10.3965 42.0009 10.3965Z"
          fill="#CC092F"
        />
        <path
          d="M16.0835 10.3965H7.80157V29.2206H16.0835C20.6313 29.2206 24.3196 25.4959 24.3196 19.8086C24.3196 14.1213 20.6313 10.3965 16.0835 10.3965Z"
          fill="#CC092F"
        />
        <path
          d="M120.2 10.3965H111.927V29.2206H120.2C124.748 29.2206 128.436 25.4959 128.436 19.8086C128.436 14.1213 124.748 10.3965 120.2 10.3965Z"
          fill="#CC092F"
        />
        <path
          d="M71.2002 24.2002V29.2211H79.4736V24.2002H71.2002Z"
          fill="#CC092F"
        />
        <path
          d="M79.4736 15.417V10.3965H71.2002V15.417H79.4736Z"
          fill="#CC092F"
        />
        <path
          d="M71.2002 19.809V24.2007H79.4736V19.809H71.2002Z"
          fill="#CC092F"
        />
        <path
          d="M71.2002 15.4165V19.8082H79.4736V15.4165H71.2002Z"
          fill="#CC092F"
        />
        <path
          d="M97.9173 10.3965H89.6454V29.2206H97.9173V10.3965Z"
          fill="#CC092F"
        />
        <path
          d="M145.117 10.3965H137.501V29.2206H145.117V10.3965Z"
          fill="#CC092F"
        />
        <path
          d="M5.70892 10.3965H0V29.2206H5.70892V10.3965Z"
          fill="#CC092F"
        />
        <path
          d="M58.1885 10.3965H49.9161V29.2206H58.1885V10.3965Z"
          fill="#CC092F"
        />
      </svg>
    </div>
  );
}
