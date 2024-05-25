import { get } from '../utils/request';

const BASE_URL: string = 'https://api.yourblockchaindomain.com';

export const getBlockData = async (blockNumber: number): Promise<any> => {
    try {
        const response = await get(`${BASE_URL}/blocks/${blockNumber}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching block data:', error);
        throw error;
    }
};
