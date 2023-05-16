async function main() {


    const Boss = await hre.ethers.getContractFactory("Boss");
    const boss = await Boss.deploy();
  
    await boss.deployed();
  
    console.log( `counter deployed to: ${boss.address}`
    );
  }
  

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  