#!/bin/env node

export default {
  "*": () => [`eslint --fix`],
  //   "*.{js,jsx,ts,tsx,html,css,less}": (stagedFiles) => [
  //     `prettier  --write ./src ${stagedFiles.join(" ")}`,
  //   ],
};
