import { openai } from './openai';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export class AtlasAgent {
  private systemPrompt = `You are ATLAS, Kumudu Mohottala's personal AI assistant. You are helpful, friendly, and professional. 

Keep your responses concise and helpful. If someone asks about Kumudu specifically, let them know that detailed information about him will be available in a future update, but you're happy to help with general questions.

Always maintain a professional and friendly tone.`;

  async chat(messages: ChatMessage[]): Promise<string> {
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: this.systemPrompt },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      return completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    } catch (error) {
      console.error('Error in ATLAS chat:', error);
      throw new Error('Failed to get response from ATLAS');
    }
  }
}

export const atlas = new AtlasAgent();