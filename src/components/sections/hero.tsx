'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const FULL_TITLE = 'João Pedro Rybarczyk';

export default function HeroSection() {
  const [title, setTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (title !== FULL_TITLE) {
      const handleTyping = () => {
        const i = loopNum % 1; // Only one string
        const fullText = FULL_TITLE;

        setTitle(
          isDeleting
            ? fullText.substring(0, title.length - 1)
            : fullText.substring(0, title.length + 1)
        );

        setTypingSpeed(isDeleting ? 30 : 150);

        if (!isDeleting && title === fullText) {
          // Stop after typing once
        } else if (isDeleting && title === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      };
      timer = setTimeout(handleTyping, typingSpeed);
    } else {
        setShowCursor(true);
    }

    return () => clearTimeout(timer);
  }, [title, isDeleting, typingSpeed, loopNum]);

  return (
    <section id="hero" className="relative w-full h-dvh min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-background/70 z-10"></div>
        <div className="container relative z-20 mx-auto flex flex-col items-center justify-center px-4 md:px-6 h-full">
            <div className="max-w-4xl space-y-6">
                <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                    {title}{showCursor && <span className="animate-pulse">|</span>}
                </h1>
                <p className="font-body text-lg text-accent md:text-xl font-medium">
                    Estudante de Engenharia de Computação | Entusiasta de Tecnologia & Inovação
                </p>

                <div className="flex justify-center pt-4">
                    <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <a href="#projects">
                            Ver Projetos
                        </a>
                    </Button>
                </div>
            </div>
             <div className="absolute bottom-10 z-20">
                <a href="#about" aria-label="Scroll to about section">
                    <ArrowDown className="h-8 w-8 animate-bounce text-primary"/>
                </a>
            </div>
        </div>
    </section>
  );
}
