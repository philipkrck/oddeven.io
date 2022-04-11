import { BlockfrostAPIProvider, UTXOResponse } from "./blockfrost-api-provider";

export class BlockfrostAPIService implements BlockfrostAPIProvider {

    public getAddressUTXOs(address: string): Promise<UTXOResponse[]> {
        return new Promise<UTXOResponse[]>(async (resolve, reject) => {
            return resolve([]);
        });
    }
}
