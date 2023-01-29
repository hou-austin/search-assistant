import browser from 'webextension-polyfill';

export const setStorageItemSync = async (key: string, value: string) => {
    await browser.storage.sync.set({ [key]: value });
};

export const getStorageItemSync = async (key: string) => {
    const result = await browser.storage.sync.get(key);
    return result[key];
};
