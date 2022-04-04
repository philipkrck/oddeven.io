import { BlockfrostAPIProvider } from "./blockfrost-api-service";



export interface Transaction {
    txHash: string;
    amountLovelace: number;
}

interface UTXOResponse {
    tx_hash: string;
    amount: {
        quantity: string;
    }[];
}

// interface UTXOsResponse {
//     inputs: UTXO[];
// }

interface UTXO {
    address: string;
}


export class BlockchainService {

    private api: BlockfrostAPIProvider;

    constructor(api: BlockfrostAPIProvider) {
        this.api = api;
    }

    // returns most recent addresses for specified wallet address
    public getUTXOAmounts(address: string): Promise<Transaction[]> {
        return new Promise<Transaction[]>(async (resolve, reject) => {

            await this.api.getAddressUTXOs(address)
                .then((json) => {
                    resolve(this.utxoAmounts(json))
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    private utxoAmounts(json: any): Transaction[] {
        const utxos: UTXOResponse[] = JSON.parse(json);
        const transactions = utxos.map((utxo) => {
            return {
                txHash: utxo.tx_hash,
                amountLovelace: Number(utxo.amount[0].quantity)
            }
        });
        
        return transactions;
    }
    // function getUTXOs():

    public getSenderAddress(senderAddress: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            resolve('');
        });
    }

    // private outputAddress(utxos: UTXOsResponse): string {
    //     return utxos.inputs[0].address;
    // }
}