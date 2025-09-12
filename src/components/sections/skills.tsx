import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { SKILLS } from '@/lib/data';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{children}</h2>
);

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-background">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <SectionTitle>Habilidades Técnicas</SectionTitle>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 sm:grid-cols-3 md:grid-cols-4">
        {SKILLS.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 bg-secondary">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
              {skill.icon && <skill.icon className="h-10 w-10 text-primary" />}
              <p className="font-medium mt-2 text-center">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
