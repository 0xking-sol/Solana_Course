import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';
import fetch from 'cross-fetch';
import { Wallet } from '@project-serum/anchor';
import bs58 from 'bs58';

// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const connection = new Connection('https://ultra-twilight-fire.solana-mainnet.discover.quiknode.pro/d00c8f82104da35a766df688fffd8af3a32e4924/');

const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode('3qswEeCJcA9ogpN3JEuXBtmnU35YPzSxBwzrk6sdTPhogMJ64WuabU9XWg2yUegJvv1qupYPqo2jQrrK26N7HGsD')));


// swapping SOL to USDC with input 0.1 SOL and 0.5% slippage
const { data } = await (
  await fetch('https://quote-api.jup.ag/v4/quote?inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&slippageBps=50'
  )
).json();
const routes = data;
// console.log(routes)
