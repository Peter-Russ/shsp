type User = {
	id: string,
	name: string,
	email: string,
	emailVerified: boolean,
	image: string | null,
	blocked: boolean,
	subscribers: string[],
	subscribersUsers: string[],
	createdAt: string,
	updatedAt: string,
	videoIds: string[]
}