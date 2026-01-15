import { GoogleGenAI, Type } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeReviewSentiment = async (reviewText: string) => {
  const ai = getAiClient();
  if (!ai) return { sentiment: 'Neutral', analysis: 'API Key missing.' };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze the sentiment of the following customer review. 
      Return a JSON object with two fields: 
      1. "sentiment" which must be one of: "Positive", "Neutral", "Negative".
      2. "analysis" which is a short, one-sentence summary of the key issue or praise.
      
      Review: "${reviewText}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sentiment: { type: Type.STRING },
            analysis: { type: Type.STRING }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return { sentiment: 'Neutral', analysis: 'No response from AI.' };
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Sentiment Error:", error);
    return { sentiment: 'Neutral', analysis: 'Error analyzing sentiment.' };
  }
};

export const generateReviewReply = async (reviewText: string, rating: number, customerName: string) => {
  const ai = getAiClient();
  if (!ai) return "Cannot generate reply without API Key.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Draft a professional, empathetic, and concise response to a customer review for a business.
      
      Customer Name: ${customerName}
      Rating: ${rating}/5
      Review: "${reviewText}"
      
      If the rating is low, apologize and offer to make it right. 
      If the rating is high, thank them warmly.
      Keep it under 100 words.`
    });

    return response.text || "Could not generate reply.";
  } catch (error) {
    console.error("Gemini Reply Error:", error);
    return "Error generating reply.";
  }
};

export const generateFunnelAdvice = async (stats: any) => {
    const ai = getAiClient();
    if (!ai) return "Enable AI to get strategic advice.";

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: `You are a Reputation Management Expert. 
            Based on the following data, give 3 bullet points of strategic advice to improve online ratings.
            
            Data: ${JSON.stringify(stats)}`
        });
        return response.text;
    } catch (e) {
        return "Advice currently unavailable.";
    }
}
