import browser from 'webextension-polyfill';

export const setStorageItem = async (key: string, value: string) => {
    await browser.storage.sync.set({ [key]: value });
};

export const getStorageItem = async (key: string) => {
    const result = await browser.storage.sync.get(key);
    return result[key];
};

export const searchRankingColorMap = {
    0: 'rgb(167 139 250)',
    1: 'rgb(232 121 249)',
    2: 'rgb(248 113 113)',
    3: 'rgb(251 146 60)',
    4: 'rgb(250 204 21)',
    5: 'rgb(74 222 128)',
};
