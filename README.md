# CrowdFunding-Blockchain-App
The Crowdfunding Blockchain App is a decentralized platform for secure and transparent fundraising. Built on Ethereum, it utilizes smart contracts to automate the crowdfunding process, ensuring fairness and efficiency while supporting ERC-20 tokens and milestone-based fund release for added accountability.

**Crowdfunding Blockchain App**
A decentralized crowdfunding platform built on the Ethereum blockchain, utilizing smart contracts to ensure transparency, trust, and security in the fundraising process.

**Overview**
The Crowdfunding Blockchain App aims to revolutionize the way we raise funds for projects by leveraging the power of blockchain technology. This platform allows project creators to launch campaigns and receive funds in a transparent, secure, and decentralized manner, while providing backers with trust and accountability.

**Features**
Decentralized crowdfunding platform built on Ethereum
Smart contracts to ensure transparency and security
User-friendly interface for project creators and backers
Supports ERC-20 compatible tokens for fundraising
Milestone-based fund release mechanism

**Getting Started**

**Prerequisites**
Node.js (v14.0 or higher)
Truffle development framework
Ganache or other Ethereum blockchain test environment
MetaMask or another web3-enabled browser extension

**Installation**
Clone the repository: git clone https://github.com/Tundekuzco/CrowdfundingBlockchainApp.git

**Change to the project directory:**
cd CrowdfundingBlockchainApp

**Install dependencies:**
npm install

**Deployment**
Start your Ethereum test environment (e.g., Ganache).

Deploy the smart contracts:

**css**
truffle migrate --reset

**Run the development server:**
npm run start

Open your web3-enabled browser and navigate to http://localhost:3000.

**Usage**
Connect your web3-enabled browser extension (e.g., MetaMask) to the Crowdfunding Blockchain App.
Create a new crowdfunding campaign by providing the required information, such as project name, description, funding goal, and deadline.
Backers can browse the available campaigns and contribute funds in the form of Ether or ERC-20 compatible tokens.
Once the campaign reaches its funding goal, the project creator can request fund release based on pre-defined milestones. The smart contract ensures that funds are released only when the milestones are met.
If the campaign does not reach its funding goal within the specified deadline, backers can withdraw their contributions.

**Contributing**
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

**License**
This project is licensed under the MIT License. See the LICENSE.md file for details.

**Acknowledgments**
OpenZeppelin for providing secure and audited smart contract templates
Truffle Suite for providing a powerful development framework and tools
React for simplifying front-end development
Web3.js for enabling Ethereum blockchain interaction
The Ethereum community for their support and resources
