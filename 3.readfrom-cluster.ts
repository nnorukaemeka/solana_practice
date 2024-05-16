// Connect to the Network
// Every interaction with the Solana network using @solana/web3.js is going to happen through a Connection object. The Connection object establishes a connection with a specific Solana network, called a 'cluster'. For now, we'll use the Devnet cluster rather than Mainnet. Devnet is designed for developer use and testing, and DevNet tokens don't have real value.

import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

//// Fetch suppliedPublicKey as input in Base58.
const suppliedPublickey = process.argv[2];
if (!suppliedPublickey) {
  throw new Error("Provide a public key to check the balance of!");
}
const suppliedPublicKey = new PublicKey(suppliedPublickey);

//// Load PublicKey from environment
// const suppliedPublicKey = new PublicKey(getKeypairFromEnvironment("SECRET_KEY").publicKey.toBase58());

//// Hardcoded PublicKey
// const suppliedPublicKey = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');

//// Connect to the Solana devnet Network
const connection = new Connection(clusterApiUrl("devnet"), "confirmed"); 

//// Read balance from the Network
const balanceInLamports = await connection.getBalance(suppliedPublicKey); 

//// Convert balanceInLamports to SOL
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

//// Print output
console.log(`The balance of the account at ${suppliedPublicKey} is ${balanceInLamports} lamports or ${balanceInSOL} SOL`); 
console.log(`✅ Finished!`)


