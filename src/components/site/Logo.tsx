import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Hide the wordmark and show the shield mark only. */
  markOnly?: boolean;
  size?: "sm" | "md" | "lg";
};

const markSizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

/**
 * Official MS-TECH Solutions logo. The supplied shield mark reads clearly on
 * both dark and light surfaces, so it is used unmodified everywhere.
 */
export function LogoMark({ className, size = "md" }: Omit<LogoProps, "markOnly">) {
  return (
    <img
      src={logoAsset.url}
      alt="MS-TECH Solutions logo"
      width={128}
      height={128}
      className={cn("object-contain drop-shadow-[0_4px_18px_rgba(37,99,235,0.35)]", markSizes[size], className)}
    />
  );
}

export function Logo({ className, markOnly = false, size = "md" }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="MS-TECH Solutions — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <LogoMark size={size} className="transition-transform duration-300 group-hover:scale-105" />
      {!markOnly && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-display text-[0.98rem] font-extrabold tracking-tight text-foreground sm:text-lg">
            MS-TECH
            <span className="text-primary-glow"> Solutions</span>
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            IT Support &amp; Services
          </span>
        </span>
      )}
    </Link>
  );
}
