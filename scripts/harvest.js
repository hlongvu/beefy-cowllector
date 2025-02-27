const ethers = require('ethers');

const IStrategy = require('../abis/IStrategy.json');
const {
  isNewHarvestPeriod,
  isNewPeriodNaive,
  hasStakers,
  sleep,
} = require('../utils/harvestHelpers');
const chains = require('../data/chains');
const strats = require('../data/strats.json');

const harvest = async () => {
  for (const strat of strats) {
    try {
      console.log(`Analizing harvest of ${strat.name}.`);
      const provider = new ethers.providers.JsonRpcProvider(chains[strat.chainId].rpc);
      const harvester = new ethers.Wallet(process.env.HARVESTER_PK, provider);
      const keeper = new ethers.Wallet(process.env.KEEPER_PK, provider);

      const stratContract = new ethers.Contract(strat.address, IStrategy, harvester);

      let shouldHarvest = true;

      if (shouldHarvest) shouldHarvest = !strat.harvestPaused;
      if (shouldHarvest) shouldHarvest = await hasStakers(stratContract);

      let lastHarvest = 0;
      try {
        lastHarvest = await stratContract.lastHarvest();
      } catch (err) {}

      if (shouldHarvest) {
        if (lastHarvest !== 0) {
          let now = Math.floor(new Date().getTime() / 1000);
          let secondsSinceHarvest = now - lastHarvest;
          shouldHarvest = secondsSinceHarvest >= strat.interval * 3600;
        } else if (strat.noHarvestEvent) {
          shouldHarvest = await isNewPeriodNaive(strat.interval);
        } else {
          shouldHarvest = await isNewHarvestPeriod(strat, harvester);
        }
      }

      if (shouldHarvest) {
        const stratContract = new ethers.Contract(strat.address, IStrategy, harvester);
        let tx;

        if (strat.depositsPaused) {
          // TODO: Improve how we harvest paused strategies. Unpause/Harvest/Pause sometimes fails.
          // await stratContract.connect(keeper).unpause({ gasLimit: 3500000 });
          // tx = await stratContract.harvest({ gasLimit: 4000000 });
          // tx = await tx.wait();
          // tx.status === 1
          //   ? console.log(`${strat.name} harvested with tx: ${tx.transactionHash}`)
          //   : console.log(`${strat.name} harvest failed with tx: ${tx.transactionHash}`);
          // await stratContract.connect(keeper).pause({ gasLimit: 3500000 });
        } else {
          tx = await stratContract.harvest({ gasLimit: 5000000 });
          // FIX: Polygon is taking too long to confirm. Harvesting without waiting for mining for now.
          // tx = await tx.wait();
          // tx.status === 1
          //   ? console.log(`${strat.name} harvested with tx: ${tx.transactionHash}`)
          //   : console.log(`${strat.name} harvest failed with tx: ${tx.transactionHash}`);
          console.log(`${strat.name} harvested`);
        }
      } else {
        console.log(`Shouldn't harvest ${strat.name}`);
      }
      console.log('---');
    } catch (e) {
      console.log(`Couldn't harvest strat ${strat.name}: ${e}`);
    }

    await sleep(1000);
  }
};

module.exports = harvest;
