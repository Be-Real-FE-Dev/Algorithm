//20230313(월)
const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

  const solution = (dwarfs) => {
    const sum = dwarfs.reduce((a,b) => +a + +b,0)
    let result;

    for(let i=0; i<dwarfs.length - 1; i++){
      for(let j=i+1; j<dwarfs.length; j++){
        if(sum- +dwarfs[i] - +dwarfs[j] === 100) result = dwarfs.filter(dwarf => dwarf !== dwarfs[i] && dwarf !== dwarfs[j]);
      }
    }
    console.log(result.sort((a, b) => a-b).join('\n'))
  }

  console.log(solution(input))