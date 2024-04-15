import { ROLE } from "../constants";
import { getUser,  addUser, createSession} from "./index";



export const server = {
	async authorize(authLogin, userPassword) {
		const users = await getUser(authLogin);
		const user = users.find(({ login }) => login === authLogin);
		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}
		if (userPassword !== user.userPassword) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: createSession(user.role_id),
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
			res: createSession(user.role_id),
		};
	},
};
