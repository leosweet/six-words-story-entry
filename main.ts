import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — an original six-word story written for the
// make.fun bounty "Six Words, One Story"
// (https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410).
//
// She leaves a light on for someone who never comes home — and keeps
// leaving it on. Six words, one whole life of waiting.
const story = "She left the light on. Forever.";

// The gate requires 1–60 characters and the brief requires exactly six
// words; refuse to write anything that does not satisfy both.
const words = story.trim().split(/\s+/);
if (words.length !== 6 || story.length < 1 || story.length > 60) {
  console.error(
    `Invalid story: ${words.length} words, ${story.length} characters (need exactly 6 words, 1–60 characters).`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
