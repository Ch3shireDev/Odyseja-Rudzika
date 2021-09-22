// import { Result } from "./result";
// import { getPlayerDecision, showDecision, showAvailableOptions, showStats, showExpectedResult, showResult } from "./interface";
// import { Robin } from './robin';
// import { Config } from "./config";

// async function getConfig(filename: string): Promise<Config> {
//     const text = await Deno.readTextFile(filename);
//     return Object.assign(new Config(), JSON.parse(text));
// }

// async function main() {

//   const config: Config = await getConfig('config.json');
//   console.log(config.sparrowHawkAttackProbability);

//   console.log("Witaj w Rudziku Remusie!");

//   const robin = new Robin(config);

//   while (true) {
//     let result: Result;
//     do {
//       console.clear();
//       console.log("\nRUDZIK REMUS\n------------\n");
//       showStats(robin.robinModel);

//       showAvailableOptions();
//       const decision = getPlayerDecision(robin.robinModel);

//       result = robin.sendDecision(decision);

//       if (result.success === false) {
//         console.log(result.errorMessage);
//         prompt("Naciśnij [ENTER] aby iść dalej.");
//         continue;
//       }
//       showDecision(result);
//       showExpectedResult(result);

//       const confirm = prompt("Naciśnij [x] aby cofnąć lub [ENTER] aby potwierdzić:");
//       if (confirm === 'x') {
//         continue;
//       }

//       showResult(result);

//       robin.setResult(result);

//       if (robin.isDead) {
//         return;
//       }
//     } while (!result.success);
//   }
// }

// main();