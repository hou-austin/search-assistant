import { MemClient } from '@mem-labs/mem-node';
import { getStorageItemSync } from '../utils/storage';

export const createMemFromSearch = async (query: string, note: string) => {
    const memClient = new MemClient({
        apiAccessToken: await getStorageItemSync('memaiKey'),
    });

    const mem = `Search: ${query}\nFrom: search-assistant\n\nResponse:\n${note}`;

    await memClient.createMem({
        content: mem,
    });
};
