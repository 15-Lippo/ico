const { ethers } = require("hardhat");

async function main() {
  //LSP20 
  console.log("Deploying LSP20 Contract...");
  const Lsp20Factory = await ethers.getContractFactory("LSP20");
  const lsp20 = await LSP20 factory.deploy();

  console.log("Deployed LSP20:", Lsp20.address)
  //LSP20 ICO
  console.log("Deploying Lsp20ICO Contract...");
  const StknICOFactory = await ethers.getContractFactory("lsp20ICO");
  const lsp20 ICO = await lsp20ICOFactory.deploy(
    "0x70E546c7a2cA4495cFcbE263a3b6D5ce68B2204C",
    stkn.address
  );

  console.log("Deployed Lsp20ICO:", lsp20ICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
