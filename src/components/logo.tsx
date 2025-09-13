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
      <path d="M16 2v12a4 4 0 0 1-4 4H8" />
      <path d="M8 2v4" />
      <path d="M12 2v4" />
      <path d="M16 8v4" />
      <path d="M12 14v4" />
    </svg>
  );
}
