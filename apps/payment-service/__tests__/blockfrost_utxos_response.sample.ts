import { UTXOResponse } from "../src/blockfrost-api-provider";

export const sampleBlockfrostUTXOsResponse: UTXOResponse[] = [
    {
        tx_hash: '39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58',
        amount: [
            {
                quantity: '42000000'
            }
        ]
    },
    {
        tx_hash: '4c4e67bafa15e742c13c592b65c8f74c769cd7d9af04c848099672d1ba391b49',
        amount: [
            {
                quantity: '729235000'
            }
        ]
    },
    {
        tx_hash: '768c63e27a1c816a83dc7b07e78af673b2400de8849ea7e7b734ae1333d100d2',
        amount: [
            {
                quantity: '42000000'
            },
            {
                quantity: '12'
            }
        ]
    }
]