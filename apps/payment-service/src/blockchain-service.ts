import { BlockfrostAPIProvider, UTXOResponse } from "./blockfrost-api-provider";


export type UTXO = {
    txHash: string;
    amountLovelace: number;
}

export class BlockchainService {

    private api: BlockfrostAPIProvider;

    constructor(api: BlockfrostAPIProvider) {
        this.api = api;
    }

    // returns most recent addresses for specified wallet address
    public getUTXOAmounts(address: string): Promise<UTXO[]> {
        return new Promise<UTXO[]>(async (resolve, reject) => {

            await this.api.getAddressUTXOs(address)
                .then((utxosResponse) => {
                    resolve(this.utxoAmounts(utxosResponse))
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    private utxoAmounts(utxosResponse: UTXOResponse[]): UTXO[] {
        const utxos = utxosResponse.map((utxo) => {
            return {
                txHash: utxo.tx_hash,
                amountLovelace: Number(utxo.amount[0].quantity)
            }
        });
        
        return utxos;
    }

    // public getSenderAddress(transactionHash: string): Promise<string> {
    //     return new Promise<string>(async (resolve, reject) => {
    //         await this.api.getTransactionUTXOs(transactionHash)
    //             .then((json) => {
                    
    //             });
            
    //         resolve('');
    //     });
    // }

    // private getFirstUTXOInputAddress(json: )

    // private outputAddress(utxos: UTXOsResponse): string {
    //     return utxos.inputs[0].address;
    // }
}