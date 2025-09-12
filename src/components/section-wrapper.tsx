import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full py-16 md:py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
