# Build and deploy smart contract
compile:
    truffle compile
    truffle migrate --network rinkeby

# Build frontend assets
build:
    npm run build

# Start server
start:
    node middleware/server.js

# Clean up build artifacts
clean:
    rm -rf build/

.PHONY: compile build start clean
