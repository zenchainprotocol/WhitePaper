## Scalable, high-throughput Blockchain {#scalable-high-throughput-blockchain}

ZenChain is a scalable, high-throughput Proof-of-Stake blockchain that is fully compatible and interoperable with Ethereum. It is built using the Cosmos SDK which runs on top of the Tendermint Core consensus engine.

ZenChain allows for running vanilla Ethereum as a Cosmos application-specific blockchain. This allows developers to have all the desired features of Ethereum, while at the same time, benefit from Tendermint’s PoS implementation. Also, because it is built on top of the Cosmos SDK, it will be able to exchange value with the rest of the Cosmos Ecosystem through the Inter Blockchain Communication Protocol (IBC).

Here’s a glance at some of the key features of Zen Chain:

*   Web3 compatibility
*   High throughput via Tendermint Core
*   Horizontal scalability via IBC
*   Fast transaction finality

ZenChain enables these key features through:

*   Implementing Tendermint Core&#039;s ABCI application interface to manage the blockchain
*   Leveraging modules and other mechanisms implemented by the Cosmos SDK
*   Utilizing geth as a library to avoid code reuse and improve maintainability.
*   Exposing a fully compatible Web3 RPC layer for interacting with existing Ethereum clients and tooling (Metamask, Remix, Truffle, etc).

The sum of these features allows developers to leverage existing Ethereum ecosystem tooling and software to seamlessly deploy smart contracts which interact with the rest of the Cosmos ecosystem.