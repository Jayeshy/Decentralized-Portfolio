import ethers from 'ethers';
async function main(){
    const deployer = await ethers.getSigners();
    
    const Portfolio = await ethers.getContractFactory("Portfolio");
    const portfolio = Portfolio.deploy();
    await portfolio.waitForDeployment();

    console.log(`The contract is deployed to ${portfolio.getAddress}`);
}