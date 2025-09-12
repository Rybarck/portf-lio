import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/lib/data';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed">{children}</p>
);

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-secondary">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <SectionTitle>Experiências e Cursos</SectionTitle>
          <SectionDescription>Minha jornada de aprendizado e desenvolvimento profissional.</SectionDescription>
        </div>
      </div>
      <div className="mx-auto grid max-w-4xl gap-8 py-12 lg:grid-cols-1">
        {EXPERIENCES.map((exp, index) => (
          <Card key={index} className="transition-all hover:shadow-lg hover:shadow-primary/20 bg-background">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <Badge variant={exp.status === 'Concluído' ? 'default' : 'secondary'} className={`${exp.status === 'Concluído' ? 'bg-primary' : 'bg-accent/20 text-accent-foreground'} self-start sm:self-center`}>{exp.status}</Badge>
              </div>
              <CardDescription>{exp.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
