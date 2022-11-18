// truffle console

const Counter = artifacts.require("Counter");

describe("Counter Test", () => {
  let counter;
  it("Counter deployed", async () => {
    counter = await Counter.deployed();
    console.log(await counter.increment());
    console.log(await counter.current.call());
  });
});
