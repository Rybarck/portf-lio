import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed">{children}</p>
);

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-background dark:bg-black">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <SectionTitle>Projects</SectionTitle>
          <SectionDescription>
            A selection of projects that demonstrate my skills and interests.
          </SectionDescription>
        </div>
      </div>
      <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => {
          const placeholder = PlaceHolderImages.find(p => p.id === project.image);
          return (
            <Card key={project.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-secondary border-border hover:border-primary">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="flex flex-col h-full">
                  <CardHeader className="p-0 relative">
                    {placeholder && (
                      <Image
                        src={placeholder.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={placeholder.imageHint}
                      />
                    )}
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                      <CardTitle className="mb-2 flex items-center justify-between">
                        {project.title}
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"/>
                      </CardTitle>
                      <CardDescription className="mb-4 flex-grow">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                  </CardContent>
                </div>
              </a>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
