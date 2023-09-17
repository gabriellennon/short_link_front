export function isURLValid(url: string) {
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}([/?#].*)?$/i;
    return urlPattern.test(url);
}

export function removeHttpsPrefix(url: string){
    const urlFormatted = url.split('://');
    if(urlFormatted[1].includes('pt-BR') || urlFormatted[1].includes('en-US')){
        const urlSplit= urlFormatted[1].split('/')
        return `${urlSplit[0]}/${urlSplit[2]}`
    }
    return urlFormatted[1] ?? url;
}