import { RentavleSDK } from '../rentavle';

export interface NFTEndpoints {
  getRentavleContractDetail(contractAddress: string): Promise<any>;
  // Add other NFT endpoint method types as needed
}

export function addNFTEndpoints(sdk: RentavleSDK) {
  sdk.getRentavleContractDetail = async function (contractAddress: string): Promise<any> {
    const url = `/v1/nfts/contracts/${contractAddress}/rentavle/detail`;
    return this.get(url);
  };
}