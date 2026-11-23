import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — an original six-word story written for the
// make.fun bounty "Six Words, One Story"
// (https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410).
//
// She leaves a light on for someone who never comes home — and keeps
// leaving it on. Six words, one whole life of waiting.
const story = "She left the light on. Forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
