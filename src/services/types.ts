export type TShortNewLink = {
    originalUrl: string
}

export type TResponseShortnerPOST = {
    id: string;
	originalLink: string;
	shortLink: string;
	code: string;
	createdAt: string;
	updatedAt: string;
}