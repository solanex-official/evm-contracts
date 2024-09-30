import * as hre from "hardhat";

async function main() {
  const Token = "SolanexToken";
  const tokenFactory = await hre.ethers.getContractFactory(Token);

  const token = await tokenFactory.deploy();
  console.log(`token: ${token.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
