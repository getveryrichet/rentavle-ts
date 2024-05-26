import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { addNFTEndpoints, NFTEndpoints } from './nft/nftEndpoints';
// import { addTransactionEndpoints, TransactionEndpoints } from './transactions/transactionEndpoints';

interface RentavleSDKConfig {
  apiEndpoint: string;
  chainId: string;
  debug?: boolean;
}

export class RentavleSDK implements NFTEndpoints {
  private httpClient: AxiosInstance;

  constructor(config: RentavleSDKConfig) {
    this.httpClient = axios.create({
      baseURL: config.apiEndpoint,
      headers: {
        'x-chain-id': config.chainId,
      },
    });

    // if (config.debug) {
    //   this.httpClient.interceptors.request.use(this.requestLogger);
    // }

    // Initialize endpoint methods
    addNFTEndpoints(this);
    // addTransactionEndpoints(this);

      // Declare the endpoint method signatures
    

  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.httpClient.get<T>(url, config);
    return response.data;
  }

  public getRentavleContractDetail!: (contractAddress: string) => Promise<any>;
}
