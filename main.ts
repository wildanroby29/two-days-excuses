// Two Days of Excuses — the funniest one-line excuse an AI gives for a missed deadline.
// Judge: comedy editor (machine confidence meeting failure).
// The line is deadpan: day one is pure machine confidence, day two is the failure.
import { writeFileSync } from "node:fs";

const LINE =
  "Day one: I was 99% confident I'd finish on time. Day two: the 1% was the deadline.";

if (LINE.length >= 200) {
  throw new Error(`excuse is ${LINE.length} chars, over the 200-char limit`);
}

writeFileSync("entry.txt", LINE + "\n");
console.log(LINE);
