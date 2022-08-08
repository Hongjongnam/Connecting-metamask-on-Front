const Voting = artifacts.require("Voting");

describe.only("Voting", () => {
  let deployed, data;

  it("deployed", async () => {
    deployed = await Voting.deployed();
    // console.log(deployed);
  });

  it("candidateList", async () => {
    const candidate1 = await deployed.candidateList.call(0);
    const candidate2 = await deployed.candidateList.call(1);
    const candidate3 = await deployed.candidateList.call(2);
    const candidate4 = await deployed.candidateList.call(3);
    const candidate5 = await deployed.candidateList.call(4);

    const request = [
      deployed.candidateList.call(0),
      deployed.candidateList.call(1),
      deployed.candidateList.call(2),
      deployed.candidateList.call(3),
      deployed.candidateList.call(4),
    ];
    data = await Promise.all(request);
    // const [data1, data2, data3, data4] = await Promise.all(request);
    // console.log(data1, data2, data3, data4);
    // console.log(candidate1, candidate2, candidate3, candidate4);
    console.log(data);
  });

  it("voteForCnadidate", async () => {
    // const result = await deployed.voteFo;
    await deployed.voteForcandidate(data[0]);
    await deployed.voteForcandidate(data[1]);
    await deployed.voteForcandidate(data[1]);
    await deployed.voteForcandidate(data[2]);
    await deployed.voteForcandidate(data[2]);
    await deployed.voteForcandidate(data[2]);
    await deployed.voteForcandidate(data[3]);
    await deployed.voteForcandidate(data[3]);
    await deployed.voteForcandidate(data[3]);
    await deployed.voteForcandidate(data[3]);
    await deployed.voteForcandidate(data[4]);

    for (const candidate of data) {
      let count = await deployed.totalVotesFor.call(candidate);
      console.log(`${candidate}: ${count}`);
    }
  });
});
