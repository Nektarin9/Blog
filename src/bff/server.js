import { getUser,  addUser, sessions} from "./index";



export const server = {
	async logout(session) {
		sessions.remove(session)
	},
	async authorize(authLogin, userPassword) {
		const user = await getUser(authLogin);
		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}
		if (userPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user)
			},

		};
	},
	async register(regLogin, regPassword) {
		const users = await getUser(regLogin);
		const user = users.find(({ login }) => login === regLogin);

		if (user) {
			return {
				error: 'Такой пользователь уже существует',
				res: null,
			};
		}
		await addUser(regLogin, regPassword)


		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user)
			},
		};
	},
};
