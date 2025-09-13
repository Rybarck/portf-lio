import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-6 w-6 text-primary', className)}
    >
      <path d="M12 2v14a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4" />
      <path d="M8 2h8" />
    </svg>
  );
}
