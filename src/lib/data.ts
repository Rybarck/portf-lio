import { Code, Server, Palette, Bot, Database, Languages } from 'lucide-react';

export const SKILLS = [
  { name: 'JavaScript', icon: Code },
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Palette },
  { name: 'Automação com IA (n8n)', icon: Bot },
  { name: 'Firebase & Firestore', icon: Database },
  { name: 'Node.js & Express', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Inglês Avançado', icon: Languages },
];

export const EXPERIENCES = [
  {
    title: 'CS50: Introduction to Computer Science',
    institution: 'Harvard University',
    status: 'Em andamento',
    description: 'Curso fundamental em ciência da computação e na arte da programação.',
  },
  {
    title: 'Curso de HTML5 e CSS3',
    institution: 'Curso em Vídeo',
    status: 'Concluído',
    description: 'Curso abrangente sobre desenvolvimento web moderno com HTML5 e CSS3.',
  },
  {
    title: 'Grupo de Estudos de Backend',
    institution: 'PUCRS',
    status: 'Concluído',
    description: 'Grupo de estudo colaborativo focado no desenvolvimento backend com JavaScript, Node.js, Express e MongoDB.',
  },
];

export const PROJECTS = [
  {
    id: 'project-1',
    title: 'Site de Portfólio',
    description: 'Este próprio portfólio, projetado para mostrar minhas habilidades e projetos. Construído com Next.js, Tailwind CSS e com respostas de contato via GenAI.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'GenAI'],
    image: '1',
    link: '#',
  },
  {
    id: 'project-2',
    title: 'Automação de Fluxo de Trabalho com IA',
    description: 'Desenvolvi várias automações de fluxo de trabalho usando n8n e outras ferramentas de IA para otimizar tarefas pessoais e acadêmicas, melhorando a eficiência em mais de 50%.',
    tech: ['n8n', 'OpenAI', 'APIs'],
    image: '2',
    link: '#',
  },
  {
    id: 'project-3',
    title: 'API de E-commerce Full-Stack',
    description: 'Uma API RESTful robusta para uma plataforma de e-commerce conceitual, construída com Node.js, Express e MongoDB, com gerenciamento de produtos, usuários e pedidos.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    image: '3',
    link: '#',
  },
];
