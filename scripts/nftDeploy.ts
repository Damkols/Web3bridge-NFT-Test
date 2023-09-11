import { ethers } from "hardhat";

async function main() {
 const memeNftDeploy = await ethers.deployContract("MemeNFT");
 memeNftDeploy.waitForDeployment();
 console.log(memeNftDeploy);
 console.log(`Meme NFt deployed to ${memeNftDeploy.target}`);

 //Meme NFt deployed to 0x1134Ff04448D5F9e01d2eC96beeF0435C21c78E9

 const mintAddr = "0x8A91F5D0FaC39AB37c4E281a498eb68eA24ae078";

 const tokenId = 1;

 const metatdataURI = "ipfs://QmWwgkXsLkL57mbuZRAsfGwAKYAs5JX4s3du5qwLXp8Q84";

 const txreceipt = await memeNftDeploy.mint(mintAddr, tokenId, metatdataURI);

 console.log(txreceipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});
