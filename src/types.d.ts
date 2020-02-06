type UserInfo = {
	username: string
	password: string
	passwordConfirm?: string
}

type Errors = {
	username?: string
	password?: string
	passwordConfirm?: string
	global?: string
}