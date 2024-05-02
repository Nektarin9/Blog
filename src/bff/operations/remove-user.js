import { sessions } from '../sessions';
import { deleteUser } from '../api';
import { ROLE } from '../constants';
export const removeUser = async (hash, userId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	deleteUser(userId);
	return {
		error: null,
		ret: true,
	};
};
