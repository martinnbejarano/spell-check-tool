import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY,
});

export async function fixGrammar(text) {
  const response = await cohere.generate({
    prompt: `Correct my grammar mistakes in this text. Just reply with the text corrected, if there isnt grammar mistakes, just reply with the same text i have sent you. You MUST not answer anything else which isnt the text corrected : \n\n<${text}>\n\n`,
  });

  console.log(response);
  return response.generations[0].text;
}
