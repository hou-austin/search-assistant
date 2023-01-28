import browser from 'webextension-polyfill';

export const setStorageItem = async (key: string, value: string) => {
    await browser.storage.sync.set({ [key]: value });
};

export const getStorageItem = async (key: string) => {
    const result = await browser.storage.sync.get(key);
    return result[key];
};
