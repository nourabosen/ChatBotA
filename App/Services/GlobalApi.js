const HUGGINGFACE_API_KEY = 'Place Your Key Here';
const MODEL_ID = 'facebook/blenderbot-400M-distill';
const MAX_RETRIES = 5;
const INITIAL_DELAY = 1000;

const getHuggingFaceResponse = async (userMsg, retries = 0) => {
  try {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${MODEL_ID}`,
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
          'x-use-cache': 'false',
          'x-wait-for-model': 'true',
        },
        method: 'POST',
        body: JSON.stringify({ inputs: userMsg }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.error) {
      throw new Error(`API error: ${result.error}`);
    }

    return result;
  } catch (error) {
    if (error.response && error.response.status === 429 && retries < MAX_RETRIES) {
      const delay = INITIAL_DELAY * Math.pow(2, retries);
      console.warn(`Rate limit exceeded. Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return getHuggingFaceResponse(userMsg, retries + 1);
    } else {
      console.error("Error fetching Hugging Face response:", error);
      throw error;
    }
  }
};

export default { getHuggingFaceResponse };