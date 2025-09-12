'use client';

import { useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experience';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isTitleAnimationComplete, setIsTitleAnimationComplete] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header isTitleAnimationComplete={isTitleAnimationComplete} />
      <main className="flex-1">
        <HeroSection onAnimationComplete={() => setIsTitleAnimationComplete(true)} />
        <div className={cn('transition-opacity duration-[2000ms] ease-in', isTitleAnimationComplete ? 'opacity-100' : 'opacity-0')}>
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </div>
      </main>
      <div className={cn('transition-opacity duration-[2000ms] ease-in', isTitleAnimationComplete ? 'opacity-100' : 'opacity-0')}>
        <Footer />
      </div>
    </div>
  );
}
