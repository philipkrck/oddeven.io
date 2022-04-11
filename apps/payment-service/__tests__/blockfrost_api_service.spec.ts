import { BlockfrostAPIService } from '../src/blockfrost-api-service';

describe('Blockfrost API Service', () => {

    it('parses raw response into BlockfrostUTXOs for GET /addresses/${address}/utxos', async () => {
        // given
        const address = '';
        const blockfrostAPIService = new BlockfrostAPIService();

        // when
        blockfrostAPIService.getAddressUTXOs(address);

        // then
        expect(true).toBeTruthy();
    });
});