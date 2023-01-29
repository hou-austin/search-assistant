import browser from 'webextension-polyfill';

export const getStaticAsset = (path: string) => {
    return browser.runtime.getURL(path);
};
