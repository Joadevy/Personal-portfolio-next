import { Example } from "./../src/components/Chat/Chat";
export function formatLink(str: string): string {
  const formattedStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return formattedStr + ":";
}

export const getPrediction = async (
  userMessage: string,
  EXAMPLES: Example[]
) => {
  const API_KEY = process.env.NEXT_PUBLIC_EXTERNAL_API_KEY;
  const API_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_HOST;

  const req = await fetch(API_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "large",
      inputs: [userMessage],
      examples: EXAMPLES,
    }),
  });

  const response = await req.json();
  return response.classifications[0].prediction;
};

export const getGreeting = () => {
  const GREETINGS = {
    night: "good evening",
    morning: "good morning",
    afternoon: "good afternoon",
  };

  const actualHour = new Date().getHours();

  if (actualHour > 18) {
    return GREETINGS["night"];
  } else if (actualHour > 11 && actualHour < 19) {
    return GREETINGS["afternoon"];
  } else if (actualHour > 4 && actualHour < 12) {
    return GREETINGS["morning"];
  }
};
