'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const FULL_TITLE = 'João Pedro Rybarczyk.';
const SUBTITLES = ["Vibe Coder.", "Automation Developer.", "AI enthusiast.", "Student."];

type HeroSectionProps = {
  onAnimationComplete: () => void;
};

export default function HeroSection({ onAnimationComplete }: HeroSectionProps) {
  const [title, setTitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTitleTyping, setIsTitleTyping] = useState(true);

  const [subtitle, setSubtitle] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let titleTimer: NodeJS.Timeout;

    if (isTitleTyping) {
      const handleTyping = () => {
        const newTitle = FULL_TITLE.substring(0, title.length + 1);
        setTitle(newTitle);

        if (newTitle === FULL_TITLE) {
          setIsTitleTyping(false);
          onAnimationComplete();
        }
      };

      titleTimer = setTimeout(handleTyping, 150);
    } else {
      setShowCursor(false);
    }

    return () => clearTimeout(titleTimer);
  }, [title, isTitleTyping, onAnimationComplete]);

  useEffect(() => {
    if (isTitleTyping) return; // Wait for title animation to finish

    const handleSubtitleAnimation = () => {
      const currentFullSubtitle = SUBTITLES[subtitleIndex];

      if (isDeleting) {
        setSubtitle(currentFullSubtitle.substring(0, subtitle.length - 1));
      } else {
        setSubtitle(currentFullSubtitle.substring(0, subtitle.length + 1));
      }

      if (!isDeleting && subtitle === currentFullSubtitle) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && subtitle === '') {
        setIsDeleting(false);
        setSubtitleIndex((prevIndex) => (prevIndex + 1) % SUBTITLES.length);
      }
    };

    const subtitleTimer = setTimeout(handleSubtitleAnimation, isDeleting ? 100 : 150);

    return () => clearTimeout(subtitleTimer);
  }, [subtitle, isDeleting, subtitleIndex, isTitleTyping]);

  return (
    <section id="hero" className="relative w-full h-dvh min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background/90 dark:bg-black z-10"></div>
      <div className="container relative z-20 mx-auto flex flex-col items-center justify-center px-4 md:px-6 h-full">
        <div className="max-w-4xl">
          <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
            {title}
            <span className={cn("transition-opacity duration-500", (showCursor || isTitleTyping) ? 'opacity-100' : 'opacity-0')}>|</span>
          </h1>
          <div className={cn("transition-opacity duration-[2000ms] ease-in mt-12", !isTitleTyping ? "opacity-100" : "opacity-0")}>
            <p className="font-body text-lg text-foreground/80 md:text-xl font-light min-h-[28px]">
              {subtitle}
              <span className="transition-opacity duration-500 opacity-100">|</span>
            </p>

            <div className="flex justify-center pt-8">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className={cn("absolute bottom-10 z-20 transition-opacity duration-[2000ms] ease-in", !isTitleTyping ? "opacity-100" : "opacity-0")}>
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
