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
    "0x00f2a05f8327ac26e1994b92dbd4e4813bfa8609",
    stkn.address
  );

  console.log("Deployed stknICO:", stknICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
