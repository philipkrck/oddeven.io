import faker from 'faker';
import { sampleAddressUTXOAmounts } from './address_utxo_amounts.sample';
import { BlockchainService } from '../src/blockchain-service';
import { sampleBlockfrostUTXOsResponse } from './blockfrost_utxos_response.sample';

describe('Blockchain Service', () => {

    const mockBlockFrostAPI = {
        getAddressUTXOs: jest.fn(),
        getTransactionUTXOs: jest.fn()
    }


    it('returns correct transformation for getUTXOAmounts', async () => {
        // given
        const api = mockBlockFrostAPI;
        const address = faker.random.alphaNumeric(42);
        mockBlockFrostAPI.getAddressUTXOs.mockImplementation(async (address) => {
            return sampleBlockfrostUTXOsResponse;
        });
        
        const blockchainService = new BlockchainService(api);

        // when
        const addressUTXOAmounts = await blockchainService.getUTXOAmounts(address);

        // then
        expect(mockBlockFrostAPI.getAddressUTXOs).toHaveBeenCalledWith(address);
        expect(addressUTXOAmounts).toEqual(sampleAddressUTXOAmounts);
    });

    // enum SampleAddress {
    //     AddressOne = 'addressOne',
    //     AddressTwo = 'addressTwo'
    // }
    
    // const responseAndTransformation: [string, [any, Transaction[]]][] = [
    //     [SampleAddress.AddressOne, [sampleAddressUTXOsResponse, sampleAddressUTXOAmounts]],
    //     [SampleAddress.AddressTwo, [`[]`, []]],
    // ];

    // mockBlockFrostAPI.getTransactionUTXOs.mockImplementation(async (transactionHash) => {
    //     return {
    //         inputs: [
    //             {
    //                 address: '1234'
    //             },
    //         ]
    //     }
    // });

    // it('', () => expect(true).toBeTruthy());

    // it.each(responseAndTransformation)('returns correct address utxos for sample backend response', async (address, [response, transformation]) => {
    //     // given
        // const api = mockBlockFrostAPI;
        // const blockchainService = new BlockchainService(api);

        // // when
        // const addressUTXOAmounts = await blockchainService.getUTXOAmounts(address);

    //     // then
    //     expect(addressUTXOAmounts).toEqual(transformation);
    // });

    // todo: use faker generated sender address
    // it('returns correct sender address for sample backend response', async () => {
    //     // given
    //     const api = mockBlockFrostAPI;
    //     const blockchainService = new BlockchainService(api);
    //     const txHash = 'txHash';

    //     // when
    //     const senderAddress = await blockchainService.getSenderAddress(txHash);

    //     // then
    //     expect(senderAddress).toEqual('1234');
    // });
});