require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ledger");

const config = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 750,
      },
      viaIR: true,
    },
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      gasMultiplier: 1.2,
    },
    bsc: {
      url: process.env.BSC_URL,
      ledgerAccounts: [process.env.LEDGER_ACCOUNT || ""],
    },
  },
  etherscan: {
    apiKey: {
      bsc: process.env.BSC_API_KEY,
    },
  },
  sourcify: {
    enabled: false,
  },
};

module.exports = config;
