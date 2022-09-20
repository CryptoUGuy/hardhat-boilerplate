require('dotenv').config()
import "hardhat-deploy"
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"

import { HardhatUserConfig } from "hardhat/config"

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4"
  },
  typechain: {
    outDir: "typechain"
  },
  namedAccounts: {
    deployer: 0
  },
  verify: {
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY || ""
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_FORKING_URL || ""
      }
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: {
        mnemonic: process.env.RINKEBY_MNEMONIC || ""
      }
    }
  },
}

export default config;