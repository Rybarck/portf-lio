'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const FULL_TITLE = 'João Pedro Rybarczyk';

type HeroSectionProps = {
  onAnimationComplete: () => void;
};

export default function HeroSection({ onAnimationComplete }: HeroSectionProps) {
  const [title, setTitle] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping) {
      const handleTyping = () => {
        const fullText = FULL_TITLE;
        const newTitle = fullText.substring(0, title.length + 1);
        setTitle(newTitle);

        if (newTitle === fullText) {
          setIsTyping(false);
          setShowCursor(false);
          onAnimationComplete();
        }
      };

      timer = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [title, isTyping, typingSpeed, onAnimationComplete]);

  return (
    <section id="hero" className="relative w-full h-dvh min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="container relative z-20 mx-auto flex flex-col items-center justify-center px-4 md:px-6 h-full">
            <div className="max-w-4xl">
                <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                    {title}
                    <span className={cn("transition-opacity duration-500", (showCursor || isTyping) ? 'opacity-100' : 'opacity-0')}>|</span>
                </h1>
                <div className={cn("transition-opacity duration-[2000ms] ease-in mt-6", !isTyping ? "opacity-100" : "opacity-0")}>
                  <p className="font-body text-lg text-white md:text-xl font-light">
                      Estudante de Engenharia de Computação | Entusiasta de Tecnologia & Inovação
                  </p>

                  <div className="flex justify-center pt-8">
                      <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <a href="#projects">
                              Ver Projetos
                          </a>
                      </Button>
                  </div>
                </div>
            </div>
             <div className={cn("absolute bottom-10 z-20 transition-opacity duration-[2000ms] ease-in", !isTyping ? "opacity-100" : "opacity-0")}>
                <a href="#about" aria-label="Scroll to about section">
                    <ArrowDown className="h-8 w-8 animate-bounce text-primary"/>
                </a>
            </div>
        </div>
    </section>
  );
}
