'use client';

import SectionWrapper from '@/components/section-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{children}</p>
);

export default function AboutSection() {
  const portrait = PlaceHolderImages.find(p => p.id === 'rybarczyk-portrait');

  return (
    <SectionWrapper id="about" className="bg-background dark:bg-black">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-4">
          <SectionTitle>About Me</SectionTitle>
          <SectionDescription>
            My name is João Pedro Rybarczyk, I am a Computer Engineering student and software developer, creating innovative and efficient digital solutions through code, artificial intelligence, and technology.
          </SectionDescription>
        </div>
        <div className="flex justify-center">
          {portrait && (
            <Image
              src={portrait.imageUrl}
              alt={portrait.description}
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square"
              data-ai-hint={portrait.imageHint}
            />
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
