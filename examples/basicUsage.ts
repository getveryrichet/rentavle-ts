import { blockchainAPI } from '../src';

const runExample = async (): Promise<void> => {
    try {
        const blockData = await blockchainAPI.getBlockData(1234);
        console.log('Block Data:', blockData);
    } catch (error) {
        console.error('Failed to fetch block data:', error);
    }
};

runExample();
