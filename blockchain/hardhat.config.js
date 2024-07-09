require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
const [URL, PRIVATE_KEY] = process.env;
module.exports = {
  solidity: "0.8.24",
  networks: {
    arbitrumSepolia : {
      url: URL,
      chainId: 421614,
      accounts: [`0x${PRIVATE_KEY}`, ]
    }
  }
};
