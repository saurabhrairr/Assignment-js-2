let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let testcase=readLine().split(",")
let mass=parseInt(testcase[0])//50
let height=parseInt(testcase[1])//5
if(mass<=0 || height<=0)
{
       console.log("INVALID INPUT")
}
else
{
       let BMI=mass/(height*height)
       console.log(BMI)
}


// chek it out it should working fine or not 
