module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },

  compilers: {
    solc: {
      version: "0.5.15" // Update this to match the Solidity version used in your project
    }
  }
};
