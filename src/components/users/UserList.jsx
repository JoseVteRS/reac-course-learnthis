import { useFilters, useUsers } from "../../lib/hooks";
import UsersListFilter from "./UsersListFilter";
import UsersListRows from "./UsersListRows";
import style from "./UserList.module.css";
import UserListPagination from "./UserListPagination";
import { getUsersToDisplay } from "../../lib/users/filterUsers";
import UserFormLayout from "../users-forms/UserLayoutContainer";
import UserFormsProvider from "./UsersFormProvider";

const UserList = () => {
	const {
		filters,
		pagination,
		filtersSetters,
		paginationSetters,
		resetFilters
	} = useFilters();

	const { users, usersError, usersLoading, reloadUsers } = useUsers(filters);

	const { paginatedUsers, totalPages } = getUsersToDisplay(
		users,
		filters,
		pagination
	);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>

			<UserFormsProvider resetFilters={resetFilters} reloadUsers={reloadUsers}>
				<UsersListFilter {...filters} {...filtersSetters} />
				<UserFormLayout />
				<UsersListRows
					users={paginatedUsers}
					error={usersError}
					loading={usersLoading}
				/>
			</UserFormsProvider>
			<UserListPagination
				{...pagination}
				{...paginationSetters}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default UserList;
