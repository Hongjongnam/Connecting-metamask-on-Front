const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
  deployer.deploy(Voting, ["주찬", "빈", "현진", "귀현", "종남"]);
};
