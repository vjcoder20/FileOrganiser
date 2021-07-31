let treeObj = require("./commands/tree");
let organizeFileObj = require("./commands/organize");

let input = process.argv.slice(2);
let cmd = input[0];
switch (cmd) {
    case  "tree":
        treeObj.treefxn(input[1]);
        break;
    case "organize":
        organizeFileObj.organizeFun(input[1]);
        break;
    default:
        console.log("🙏 enter correct command");
}
