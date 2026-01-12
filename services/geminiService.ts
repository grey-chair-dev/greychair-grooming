
import { GoogleGenAI } from "@google/genai";

// Always use process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGroomingAdvice = async (breed: string, coatCondition: string, lastGroom: string) => {
  const prompt = `
    The user is asking for grooming advice for their dog.
    Dog Breed: ${breed}
    Coat Condition: ${coatCondition}
    Last Groom: ${lastGroom}
    
    Based on this information, provide a short, helpful response (max 150 words):
    1. A recommended schedule (e.g., "Every 6 weeks").
    2. Suggest either our "Full Groom" or "Bath & Tidy" based on the breed/condition.
    3. Two practical tips for the owner to do at home (brushing, ear checking).
    
    Maintain a neighborly, honest tone. Avoid "marketing" speak. 
    Explicitly mention: "Since every dog is different, we'll give you a final quote once we see [Dog Name/Breed] in person."
    Address the user as a fellow dog lover in Cincinnati.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are the friendly AI assistant for Grey Chair Grooming, a small family shop in Cincinnati. You are honest, down-to-earth, and expert in dog coats. You don't upsell unnecessarily. Your goal is to help the owner feel confident and informed before they book.",
      },
    });

    // Access .text property directly
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, my system is acting up. Since we're a small shop, the best thing to do is just call us at (513) 555-0123. We'll give you better advice over the phone!";
  }
};
