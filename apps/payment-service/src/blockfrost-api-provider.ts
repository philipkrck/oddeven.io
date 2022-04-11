
export type TransactionUTXOs = {
    inputs: {
        address: string;
    }[]
}

export type UTXOResponse = {
    tx_hash: string;
    amount: {
        quantity: string;
    }[];
}


export interface BlockfrostAPIProvider {
    getAddressUTXOs(address: string): Promise<UTXOResponse[]>;
    // getTransactionUTXOs(transactionHash: string): Promise<any>;
}