const PrincetonCoin = artifacts.require("PrincetonCoin");
const PrincetonNFT = artifacts.require("PrincetonNFT");

module.exports = function(deployer) {
  deployer.deploy(PrincetonCoin);
  deployer.deploy(PrincetonNFT);
};
