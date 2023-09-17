export function isURLValid(url: string) {
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}([/?#].*)?$/i;
    return urlPattern.test(url);
}

export function removeHttpsPrefix(url: string){
    const urlFormatted = url.split('://');
    return urlFormatted[1] ?? url;
}