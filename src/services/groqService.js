export async function generateSuggestedDescription(
  taskTitle,
  currentDescription
) {
  try {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;

    if (!apiKey) {
      throw new Error(
        "Chave de API do Groq não configurada. Verifique o arquivo .env.local"
      );
    }
    const prompt = `Você é um assistente especializado em produtividade e organização de tarefas. Sua tarefa é ajudar a gerar descrições claras e concisas para tarefas com base em seus títulos e descrições atuais
Uma pessoa criou uma tarefa com os seguintes dados:
- Título: "${taskTitle}"
- Descrição atual: "${currentDescription}"

Por favor, sugira uma descrição MELHORADA e mais DETALHADA para esta tarefa que seja:
1. Mais específica e acionável
2. Com passos claros (se aplicável)
3. Motivadora e clara
4. Concisa (máximo 2-3 linhas)

Retorne APENAS a descrição sugerida, sem explicações adicionais.`;

    const response = await fetch("https://api.groq.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Erro na API do Groq: ${errorData.error.message || response.statusText}`
      );
    }

    const data = await response.json();
    const suggestedDescription = data.choices[0].message.content.trim();

    return suggestedDescription;
  } catch (error) {
    console.error("Erro ao gerar descrição sugerida:", error);
    throw error;
  }
}
