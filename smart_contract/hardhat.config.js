// https://eth-rinkeby.alchemyapi.io/v2/mx6bWQJW_GbN4SM8aCfpHtwCqpQT9trj

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/mx6bWQJW_GbN4SM8aCfpHtwCqpQT9trj',
      accounts: ['f71453a73ca4e4a5784281c9f17e0f3946303a306066e59e6abef7656c95d587']
    }
  }
}