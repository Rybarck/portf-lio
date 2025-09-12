'use client';

import { useState, useEffect } from 'react';
import SectionWrapper from '@/components/section-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{children}</p>
);

const AnimatedText = () => {
  const phrases = ["crio coisas", "invento coisas", "mudo coisas"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
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
  }, [text, isDeleting, phraseIndex, phrases]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [])

  return (
    <span className='font-mono'>
      eu {text}
      <span className={cn('transition-opacity duration-500', showCursor ? 'opacity-100' : 'opacity-0')}>|</span>
    </span>
  );
};


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
