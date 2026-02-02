import execSh from "exec-sh";
let server = "39.105.158.55";

let remoteDir = `/www/wwwroot/approaching-ai-v3-test`;

// if (process.env.NODE_ENV == "production") {
//   remoteDir = "/www/wwwroot/zhiwen-mvp";
// } else if (process.env.NODE_ENV == "development") {
//   remoteDir = "/www/wwwroot/zhiwen-mvp-dev";
// } else {
//   throw new Error("deploy error: empty envName");
// }
console.log(remoteDir);
let shell = `scp -r -P 2024  ./dist/* root@${server}:${remoteDir}`;
execSh(shell);
// ssh -p 2024 root@39.105.158.55
// bebfuq-hoBny0-duqnon
