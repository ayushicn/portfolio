
import { GoogleGenAI } from "@google/genai";

// Fixed: Moved initialization inside the service function and removed unused Type import.
export const getProjectSummary = async (projectTitle: string, userQuestion: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an AI assistant for a UX Researcher's portfolio. 
      The user is asking about the project: "${projectTitle}".
      User question: "${userQuestion}"
      Answer professionally and concisely, highlighting the importance of user-centered research.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my AI brain right now, but feel free to browse the case study details!";
  }
};
