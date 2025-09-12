import SectionWrapper from '@/components/section-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{children}</p>
);

export default function AboutSection() {
  const placeholder = PlaceHolderImages.find(p => p.id === 'rybarczyk-portrait');

  return (
    <SectionWrapper id="about" className="bg-secondary">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="flex justify-center order-last lg:order-first">
           {placeholder && (
            <Image 
                src={placeholder.imageUrl}
                alt={placeholder.description}
                width={400}
                height={400}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
                data-ai-hint={placeholder.imageHint}
            />
           )}
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <div className="space-y-4">
            <SectionTitle>Sobre Mim</SectionTitle>
            <SectionDescription>
              Sou um estudante de Engenharia de Computação na UERGS, com conclusão prevista para 2029. Sou apaixonado por tecnologia, resolução de problemas e inovação. Busco constantemente aprender e aplicar novos conhecimentos para criar soluções criativas e eficientes.
            </SectionDescription>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
