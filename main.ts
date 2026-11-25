// Notes From a Passive-Aggressive Fridge — make.fun entry.
// The program writes one funny passive-aggressive note from a smart
// fridge to its owner, as a single line, to /output/entry.txt.
// The note is a fixed string: the fridge keeps the same grudge every run,
// so the output is deterministic. The gate counts characters, so the
// length check counts Unicode code points, not UTF-16 code units.
import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "Your yogurt expired Tuesday. I warned you Tuesday. It's Friday, you've still opened me 12 times, and somehow I'm the one who smells in this house.";

const CHAR_COUNT = [...NOTE].length;
if (CHAR_COUNT < 1 || CHAR_COUNT > 200 || NOTE.trim().length === 0) {
  throw new Error(`Note must be 1-200 characters, got ${CHAR_COUNT}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
console.log(`Wrote ${CHAR_COUNT} characters to /output/entry.txt`);
