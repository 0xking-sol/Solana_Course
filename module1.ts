import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js';

async function getBalanceUsingWeb3(address: PublicKey): Promise<number> {
  try {
    // Create a connection to the Solana mainnet
    const connection = new Connection('https://api.mainnet-beta.solana.com/');
    // Get the balance of the specified address
    return connection.getBalance(address);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Create a public key from the string
const publicKey = new PublicKey('6A5gXoSGrtSy8REtqBBbD6oN2HQJv1NoGB98mcCErJrk');

// Call the function to get the balance of the specified address
getBalanceUsingWeb3(publicKey).then(balance => {
  // Print the balance to the console
  console.log(balance);
});
