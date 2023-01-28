export const getSearchQuery = () => {
    const input: HTMLInputElement = document.querySelector('input[name="q"]');

    return input?.value;
};
