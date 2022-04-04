import { Transaction } from "./blockchain-service";

export interface BlockfrostAPIProvider {
    getAddressUTXOs(address: string): Promise<Transaction>;
}

// todo: implement actual blockfrost api
