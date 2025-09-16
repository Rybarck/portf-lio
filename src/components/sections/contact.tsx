'use client';

import SectionWrapper from '@/components/section-wrapper';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed">{children}</p>
);

const contactLinks = [
    {
        icon: Mail,
        title: 'Email',
        href: 'mailto:joaopedro.ry@gmail.com',
        ariaLabel: 'Send an email to João Pedro Rybarczyk',
        label: 'joaopedro.ry@gmail.com',
    },
    {
        icon: Linkedin,
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-rodrigues-rybarczyk-7160b6246/',
        ariaLabel: "Visit João Pedro Rybarczyk's LinkedIn profile",
        label: 'in/joão-pedro-rybarczyk',
    },
    {
        icon: Github,
        title: 'GitHub',
        href: 'https://github.com/Rybarck',
        ariaLabel: "Visit João Pedro Rybarczyk's GitHub profile",
        label: 'github.com/Rybarck',
    }
];

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-background dark:bg-black">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <SectionTitle>Contact</SectionTitle>
          <SectionDescription>
            Let's talk! Get in touch through the links below.
          </SectionDescription>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
        {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
                <a 
                    key={link.title}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                >
                    <Card className="group flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 bg-white dark:bg-neutral-950 border-0 h-full">
                        <Icon className="h-10 w-10 mb-4 text-primary" />
                        <h3 className="text-xl font-bold text-foreground">{link.title}</h3>
                        <p className="text-muted-foreground mt-1">{link.label}</p>
                    </Card>
                </a>
            )
        })}
      </div>
    </SectionWrapper>
  );
}
