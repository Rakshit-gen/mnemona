import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export interface MnemonicResult {
  topic: string
  vibe: string
  primaryMnemonic: string
  minimalVersion: string
  recallDrill: string
  emoji: string
}

function detectVibe(input: string): string {
  const lowerInput = input.toLowerCase()
  
  if (lowerInput.includes("anime") || lowerInput.includes("manga") || lowerInput.includes("japan") || lowerInput.includes("kawaii") || lowerInput.includes("senpai")) {
    return "anime"
  }
  if (lowerInput.includes("stoic") || lowerInput.includes("philosophy") || lowerInput.includes("wisdom") || lowerInput.includes("marcus") || lowerInput.includes("seneca")) {
    return "stoic"
  }
  if (lowerInput.includes("game") || lowerInput.includes("level") || lowerInput.includes("boss") || lowerInput.includes("player") || lowerInput.includes("achievement")) {
    return "gamer"
  }
  if (lowerInput.includes("poem") || lowerInput.includes("verse") || lowerInput.includes("rhyme") || lowerInput.includes("beauty") || lowerInput.includes("soul")) {
    return "poetic"
  }
  if (lowerInput.includes("cyber") || lowerInput.includes("hack") || lowerInput.includes("matrix") || lowerInput.includes("digital") || lowerInput.includes("code")) {
    return "cyberpunk"
  }
  if (lowerInput.includes("cute") || lowerInput.includes("adorable") || lowerInput.includes("sweet") || lowerInput.includes("uwu") || lowerInput.includes("soft")) {
    return "cute"
  }
  
  const vibes = ["anime", "stoic", "gamer", "poetic", "cyberpunk", "cute"]
  return vibes[Math.floor(Math.random() * vibes.length)]
}

function getVibePrompt(vibe: string): string {
  const prompts: Record<string, string> = {
    anime: "Create the mnemonic in an anime/manga style with dramatic flair, using Japanese expressions like 'sugoi', 'nani', references to power levels, training arcs, or dramatic reveals. Make it feel like a shonen protagonist moment!",
    stoic: "Create the mnemonic in a stoic philosophical style, referencing ancient wisdom, emperors, discipline, virtue, and the calm acceptance of fate. Channel Marcus Aurelius and Seneca.",
    gamer: "Create the mnemonic in a gamer style with references to leveling up, boss fights, achievements, respawning, power-ups, and gaming terminology. Make it feel like unlocking a new skill!",
    poetic: "Create the mnemonic in a poetic, lyrical style with beautiful imagery, metaphors, rhythm, and emotional resonance. Make it feel like a verse worth remembering.",
    cyberpunk: "Create the mnemonic in a cyberpunk style with references to hacking, the matrix, neural links, digital consciousness, neon lights, and tech noir aesthetics. Make it feel like downloading knowledge.",
    cute: "Create the mnemonic in an adorable, kawaii style with soft imagery, sparkles, hearts, gentle encouragement, and wholesome vibes. Make it feel like a warm hug for your brain! ✨💖"
  }
  return prompts[vibe] || prompts.cute
}

function getVibeEmoji(vibe: string): string {
  const emojis: Record<string, string> = {
    anime: "⚔️",
    stoic: "🏛️",
    gamer: "🎮",
    poetic: "🌸",
    cyberpunk: "🔮",
    cute: "💝"
  }
  return emojis[vibe] || "✨"
}

export async function generateMnemonic(topic: string): Promise<MnemonicResult> {
  const vibe = detectVibe(topic)
  const vibePrompt = getVibePrompt(vibe)
  const emoji = getVibeEmoji(vibe)

  const prompt = `You are Mnemona, an adorable and creative mnemonic generator. Your job is to help people remember things using creative memory techniques.

The user wants to learn/remember: "${topic}"

${vibePrompt}

Please generate a response in the following JSON format (and ONLY JSON, no other text):
{
  "primaryMnemonic": "A creative, memorable mnemonic that fits the vibe style. Use acronyms, stories, visual imagery, or rhymes. Make it engaging and memorable! 2-4 sentences.",
  "minimalVersion": "A simple, stripped-down version of the mnemonic for quick reference. Just the core memory hook in 1 sentence.",
  "recallDrill": "A short question or fill-in-the-blank exercise to test recall. Something like 'What does the P in [acronym] stand for?' or 'Complete the phrase: ...'"
}

Be creative, helpful, and match the vibe perfectly!`

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 0.8,
    max_tokens: 1024,
  })

  const responseText = completion.choices[0]?.message?.content || ""
  
  try {
    const jsonMatch = responseText.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      return {
        topic,
        vibe,
        primaryMnemonic: parsed.primaryMnemonic || "Could not generate mnemonic",
        minimalVersion: parsed.minimalVersion || "N/A",
        recallDrill: parsed.recallDrill || "What did you just learn?",
        emoji,
      }
    }
  } catch (e) {
    console.error("Failed to parse Groq response:", e)
  }

  return {
    topic,
    vibe,
    primaryMnemonic: responseText || "Could not generate mnemonic. Please try again!",
    minimalVersion: "Try again for better results",
    recallDrill: "What concept were you trying to memorize?",
    emoji,
  }
}
