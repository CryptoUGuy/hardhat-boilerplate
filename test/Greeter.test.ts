import { ethers } from "hardhat"
import { expect } from "chai"
import { Greeter__factory } from "../typechain"

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const signers = await ethers.getSigners()
    const firstSigner = signers[0]
    const greeterFactory = new Greeter__factory().connect(firstSigner);
    const greeter = await greeterFactory.deploy("Hello, world!")
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
