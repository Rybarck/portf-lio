'use client';

import SectionWrapper from '@/components/section-wrapper';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/lib/data';
import {
  Bot,
  PenTool,
  Database,
  BrainCircuit,
  Code,
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'AI Automation': Bot,
  'UI & UX': PenTool,
  'Firestore and Firebase': Database,
  'OpenAI API': BrainCircuit,
  'Gemini API': BrainCircuit,
  'Vibe Code': Code,
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed">{children}</p>
);

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-background dark:bg-black">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <SectionTitle>Skills & Technologies</SectionTitle>
          <SectionDescription>A glimpse into the tools and technologies I use to bring ideas to life.</SectionDescription>
        </div>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-2 md:grid-cols-3 gap-8 py-12">
        {SKILLS.map((skill, index) => {
          const Icon = iconMap[skill.title];
          return (
            <Card key={index} className="transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 bg-white dark:bg-neutral-950 border-0">
              <CardHeader className="flex flex-col items-center justify-center text-center p-6">
                {Icon && <Icon className="h-10 w-10 mb-4 text-primary" />}
                <CardTitle className="text-lg font-medium">{skill.title}</CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
