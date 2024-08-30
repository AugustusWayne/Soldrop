
import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();
    
    const { connection } = useConnection()
    async function sendAirdropToUser() {
        const amount = document.getElementById('publickey')
        await connection.requestAirdrop(wallet.publicKey, amount* 1000000000)
        alert('Airdropped sol')
    }
    
    return (

        <div>
            
            <input type="text" placeholder="Amount" />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}