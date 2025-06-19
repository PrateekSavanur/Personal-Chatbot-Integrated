export async function getChatbotResponse(userMessage: string): Promise<string> {
  try {
    const res = await fetch("https://ai-prateek.onrender.com/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    if (!res.ok) {
      // Handle non-200 responses gracefully
      return `Sorry, the AI service returned an error: ${res.status} ${res.statusText}`;
    }

    const data = await res.json();

    if (data.error) {
      return `Error from AI service: ${data.error}`;
    }

    // Return the AI generated response text
    return data.response || "Sorry, I didn't get a response from the AI.";
  } catch (error: any) {
    return `Failed to reach AI service: ${error.message || error}`;
  }
}
