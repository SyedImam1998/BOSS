require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
	solidity: "0.8.9",
	networks: {
		hardhat: {
			chainId: 31337
		},
		
		ETH_SEPOLI: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		},
		Polygon: {
			accounts: [`${process.env.PRIVATE_KEY1}`],
			url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY1}`
		}
	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	}
}