const { Program, Provider } = require('@project-serum/anchor')
const { Account, Connection, PublicKey } = require('@solana/web3.js')
const web3 = require("@solana/web3.js");
let connection = new Connection("https://explorer-api.mainnet-beta.solana.com");
const bs58 = require('bs58')
let instruction = {
    programId: "22Y43yTVxuUkoRKdm9thyRhQ3SdgQS7c7kB6UNCiaczD",
    rawData:bs58.decode("N5LqVw1am5R"),
    accountMetas: [
        {
            pubkey: new web3.PublicKey("5L6F7KhkxqankTz3nDAvp5t6y4w6gPyn35ubRFWrVbVs"),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: new web3.PublicKey("8WqgiCXJzB5YDPXpPDXmv63SVtjVVeDd4ioxx5Kv3MNc"),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: new web3.PublicKey("8WqgiCXJzB5YDPXpPDXmv63SVtjVVeDd4ioxx5Kv3MNc"),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: new web3.PublicKey("2Si6XDdpv5zcvYna221eZZrsjsp5xeYoz9W1TVdMdbnt"),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: new web3.PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),
            isSigner: false,
            isWritable: false,
        }
    ]
}

const provider = new Provider(connection, {}, {});
Program.at(instruction.programId, provider)
.then((anchorProgram) =>{
    ix = anchorProgram.coder.instruction.decode(instruction.rawData);
    if (ix !== null) {
        console.log("anchorProgram ix", ix)
      formattedIx = anchorProgram.coder.instruction.format(
        ix,
        instruction.accountMetas,
      );
    }
})
.catch((err) => {
    console.log(err)
});
