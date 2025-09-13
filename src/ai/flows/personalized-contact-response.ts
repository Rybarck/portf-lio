'use server';

/**
 * @fileOverview A Genkit flow for generating personalized responses to contact form submissions.
 *
 * - personalizedContactResponse - A function that generates personalized responses based on user messages and João's portfolio.
 * - PersonalizedContactResponseInput - The input type for the personalizedContactResponse function.
 * - PersonalizedContactResponseOutput - The return type for the personalizedContactResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedContactResponseInputSchema = z.object({
  userName: z.string().describe('The name of the user submitting the contact form.'),
  userEmail: z.string().email().describe('The email address of the user.'),
  userMessage: z.string().describe('The message submitted by the user through the contact form.'),
  joaoProjects: z.array(z.string()).describe("João's project descriptions."),
});

export type PersonalizedContactResponseInput = z.infer<typeof PersonalizedContactResponseInputSchema>;

const PersonalizedContactResponseOutputSchema = z.object({
  responseMessage: z.string().describe('The personalized response message to the user.'),
});

export type PersonalizedContactResponseOutput = z.infer<typeof PersonalizedContactResponseOutputSchema>;

export async function personalizedContactResponse(input: PersonalizedContactResponseInput): Promise<PersonalizedContactResponseOutput> {
  return personalizedContactResponseFlow(input);
}

const personalizedContactResponsePrompt = ai.definePrompt({
  name: 'personalizedContactResponsePrompt',
  input: {schema: PersonalizedContactResponseInputSchema},
  output: {schema: PersonalizedContactResponseOutputSchema},
  prompt: `You are João, a Computer Engineering student. A user has sent you a message through your portfolio's contact form.  Your goal is to craft a personalized response that acknowledges their message and, if relevant, suggests project ideas or potential collaborations based on their interests and your skills.

User's Name: {{userName}}
User's Email: {{userEmail}}
User's Message: {{userMessage}}

Your Projects: {{joaoProjects}}

Consider the user's message and João's skills and projects to determine if suggesting personalized project ideas or collaborations would be appropriate. If the user expresses interest in a specific technology or area that aligns with João's expertise, propose relevant project ideas or collaboration opportunities. Ensure the response is friendly, professional, and tailored to the user's message.

Response:`, 
});

const personalizedContactResponseFlow = ai.defineFlow(
  {
    name: 'personalizedContactResponseFlow',
    inputSchema: PersonalizedContactResponseInputSchema,
    outputSchema: PersonalizedContactResponseOutputSchema,
  },
  async input => {
    const {output} = await personalizedContactResponsePrompt(input);
    return output!;
  }
);
