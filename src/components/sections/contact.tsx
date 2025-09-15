'use client';

import SectionWrapper from '@/components/section-wrapper';
import ContactForm from '@/components/contact-form';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed">{children}</p>
);

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-background dark:bg-black">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <SectionTitle>Contact</SectionTitle>
          <SectionDescription>
            Let's talk! Send me a message or get in touch through the links below.
          </SectionDescription>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-xl">
        <div className="space-y-8">
          <Card className="bg-neutral-100 dark:bg-neutral-950 p-6 md:p-8">
            <ContactForm />
          </Card>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
             <Button variant="outline" asChild>
                <a href="mailto:joaopedro.ry@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                </a>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}