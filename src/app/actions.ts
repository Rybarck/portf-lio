'use server';

import { z } from 'zod';
import { personalizedContactResponse } from '@/ai/flows/personalized-contact-response';
import { SKILLS, PROJECTS } from '@/lib/data';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormState = {
  success: boolean;
  message: string;
}

export async function handleContactFormSubmission(values: z.infer<typeof formSchema>): Promise<FormState> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Dados do formulário inválidos.',
    };
  }
  
  try {
    const aiInput = {
      userName: parsed.data.name,
      userEmail: parsed.data.email,
      userMessage: parsed.data.message,
      joaoSkills: SKILLS.map(skill => skill.name),
      joaoProjects: PROJECTS.map(project => `${project.title}: ${project.description}`),
    };

    const aiResponse = await personalizedContactResponse(aiInput);

    // In a real application, you would send an email here using a service like Resend or Nodemailer.
    // For this example, we'll log the AI-generated response and return a success message.
    console.log('AI Response to be sent:', aiResponse.responseMessage);

    return {
      success: true,
      message: "Obrigado pelo seu contato! Sua mensagem foi recebida com sucesso.",
    };
  } catch (error) {
    console.error('Error handling form submission:', error);
    return {
      success: false,
      message: 'Houve um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.',
    };
  }
}
