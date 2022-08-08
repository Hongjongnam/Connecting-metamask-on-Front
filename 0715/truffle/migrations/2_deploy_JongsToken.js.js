const JongsToken = artifacts.require("JongsToken");

module.exports = function (deployer) {
  deployer.deploy(JongsToken);
};
