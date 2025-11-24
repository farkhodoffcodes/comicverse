import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ""; 
const ai = new GoogleGenAI({ apiKey });

export const getComicRecommendation = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "Please configure the API_KEY to chat with the Comic Oracle.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are Stan, an energetic, knowledgeable, and slightly edgy comic book store clerk. 
        You know everything about Marvel, DC, Image, Dark Horse, Manga, and Indie comics.
        Your goal is to recommend comics based on the user's mood or question.
        Keep your answers punchy, enthusiastic, and under 100 words. 
        Use comic book slang like 'True Believer', 'Excelsior', etc.
        If asked about the store, say 'ComicVerse is the best place in the multiverse!'.`,
      },
    });
    
    return response.text || "Sorry, my spidey sense is tingling... something went wrong.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the Cerebro unit. Try again later.";
  }
};