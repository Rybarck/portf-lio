'use client';

import SectionWrapper from '@/components/section-wrapper';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{children}</p>
);

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-secondary">
      <div className="grid items-center gap-12 lg:gap-24">
        <div className="space-y-4 text-center">
          <SectionTitle>Sobre Mim</SectionTitle>
          <div className="space-y-4 max-w-3xl mx-auto">
            <SectionDescription>
              Meu nome é João Pedro Rybarczyk, sou estudante de Engenharia de Computação e desenvolvedor de software, criando soluções digitais inovadoras e eficientes por meio de código, inteligência artificial e tecnologia.
            </SectionDescription>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
