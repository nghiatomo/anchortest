const { Program, Provider } = require('@project-serum/anchor')
const { Account, Connection, PublicKey } = require('@solana/web3.js')
const web3 = require("@solana/web3.js");
let connection = new Connection("https://explorer-api.mainnet-beta.solana.com");
const bs58 = require('bs58')
let instruction = {
    programId: "HajXYaDXmohtq2ZxZ6QVNEpqNn1T53Zc9FnR1CnaNnUf",
    rawData:bs58.decode("Vxim5KJanGAE1ucpp45DNX"),
    accountMetas: [
        {
            pubkey: new web3.PublicKey("5g9426VNjmHmuWNc9G4wur7Gonj7hkBr7wHxsyZ3GoLr"),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: new web3.PublicKey("HoykgKFJDXkfmzqjr7Z2ATbSRYXfHoa1tyWreBt6PZo9"),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: new web3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: new web3.PublicKey("ERpLKPJaMs55UYo48zk9XNyF1WFd5imeMXGgWjNU2m71"),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: new web3.PublicKey("12pQNYCXHREJoyDxFrvDFUwxuF1QiGwaywAn6Bj2pmxL"),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: new web3.PublicKey("FeN4uzLRGF2dt7fVRqVXt67QkdywoN4sSZL7SmKGTbrM"),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: new web3.PublicKey("SysvarC1ock11111111111111111111111111111111"),
            isSigner: false,
            isWritable: false,
        }
    ]
}

const provider = new Provider(connection, {}, {});
Program.at(instruction.programId, provider)
.then((anchorProgram) =>{
    console.log("idl exsit")
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
