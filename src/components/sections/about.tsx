'use client';

import { useState, useEffect } from 'react';
import SectionWrapper from '@/components/section-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{children}</p>
);

const AnimatedText = () => {
  const phrases = ["crio coisas.", "invento coisas.", "mudo coisas."];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
        }, 100);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    } else {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className='font-mono'>
      Eu {text}
      <span>|</span>
    </span>
  );
};


export default function AboutSection() {
  const placeholder = PlaceHolderImages.find(p => p.id === 'rybarczyk-portrait');

  return (
    <SectionWrapper id="about" className="bg-secondary">
      <div className="grid items-center gap-12 lg:gap-24">
        <div className="space-y-4 text-center">
          <SectionTitle>Sobre Mim</SectionTitle>
          <div className="space-y-4 max-w-3xl mx-auto">
            <SectionDescription>
              <AnimatedText />
            </SectionDescription>
            <SectionDescription>
              Sou um estudante de Engenharia de Computação na UERGS, com conclusão prevista para 2029. Sou apaixonado por tecnologia, resolução de problemas e inovação. Busco constantemente aprender e aplicar novos conhecimentos para criar soluções criativas e eficientes.
            </SectionDescription>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
