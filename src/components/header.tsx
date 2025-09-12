'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Experiências', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-colors duration-300 bg-background/80 backdrop-blur-sm border border-border rounded-xl shadow-lg`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#hero" className="font-headline text-lg font-bold transition-colors hover:text-primary">
            JPR
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#contact">
                Contato
              </a>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-sm md:hidden" onClick={closeMobileMenu}>
           <nav className="flex flex-col items-center justify-center h-full gap-8 pt-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="relative text-2xl font-medium transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <Button asChild size="lg" onClick={closeMobileMenu}>
              <a href="#contact">
                Contato
              </a>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
