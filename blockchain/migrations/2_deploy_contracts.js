const PrincetonCoin = artifacts.require("PrincetonCoin");

module.exports = function(deployer) {
  deployer.deploy(PrincetonCoin);
};
