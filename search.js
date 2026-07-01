const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\patna\\.gemini\\antigravity\\brain\\63863267-1933-4e46-81c9-985be6c982ad\\.system_generated\\logs\\transcript_full.jsonl';
if (!fs.existsSync(logPath)) {
  console.log("Log path does not exist");
  process.exit(1);
}

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

for (let line of lines) {
  if (line.includes('ALL_PEOPLE') && line.includes('kumar-suman') && line.includes('title')) {
    console.log("FOUND!");
    try {
      const obj = JSON.parse(line);
      if (obj.content) {
        // Save it to a file
        fs.writeFileSync('restored_peopleData.txt', obj.content);
        console.log("Saved to restored_peopleData.txt");
        break;
      }
    } catch (e) {
      console.log("Failed to parse JSON on line:", e);
    }
  }
}
