import nock from 'nock';
import { sampleAddressUTXOsResponse } from './sampleBlockfrostAddressUTXOsResponse';
import { sampleAddressUTXOAmounts } from './sampleAddressUTXOAmounts';
import { BlockchainService, Transaction } from '../src/blockchain-service';
import { BlockfrostAPIProvider } from '../src/blockfrost-api-service';

describe('Blockchain Service', () => {

    enum SampleAddress {
        AddressOne = 'addressOne',
        AddressTwo = 'addressTwo'
    }
    
    const responseAndTransformation: [string, [any, Transaction[]]][] = [
        [SampleAddress.AddressOne, [sampleAddressUTXOsResponse, sampleAddressUTXOAmounts]],
        [SampleAddress.AddressTwo, [`[]`, []]],
    ];

    const mockBlockFrostAPI = {
        getAddressUTXOs: jest.fn()
    }

    mockBlockFrostAPI.getAddressUTXOs.mockImplementation(async (address) => {
        const entry = responseAndTransformation.find(([mapAddress, _]) => mapAddress === address);
        if (entry !== undefined) {
            const [_, responses] = entry;
            const [addressUTXOsResponse] = responses;
            return addressUTXOsResponse;
        }
    });

    it.each(responseAndTransformation)('returns correct address utxos for sample backend response', async (address, [response, transformation]) => {
        // given
        const api = mockBlockFrostAPI;
        const blockchainService = new BlockchainService(api);

        // when
        const addressUTXOAmounts = await blockchainService.getUTXOAmounts(address);

        // then
        expect(addressUTXOAmounts).toEqual(transformation);
    });
});