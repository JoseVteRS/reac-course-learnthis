import { useContext } from "react";
import { SORT_OPTIONS } from "../../constants/sortOptions";
import { USER_FORMS } from "../../constants/usersForms";
import { UserFormContext } from "../../lib/context/UserFormContext";
import Button from "../buttons/Button";
import InputCheckbox from "../forms/InputCheckbox";
import InputSearch from "../forms/InputSearch";
import Select from "../forms/Select";
import style from "./UsersListFilter.module.css";

const UsersListFilter = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => {
	const { currentForm, setCreateForm } = useContext(UserFormContext);

	if (currentForm !== USER_FORMS.FILTER) return null;

	return (
		<>
			<div className={style.form}>
				<div className={style.row}>
					<InputSearch
						placeholder='Buscar...'
						value={search}
						onChange={ev => setSearch(ev.target.value)}
					/>

					<Select
						value={sortBy}
						onChange={ev => setSortBy(Number(ev.target.value))}
					>
						<option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
						<option value={SORT_OPTIONS.NAME}>Por nombre</option>
						<option value={SORT_OPTIONS.ROLE}>Por role</option>
						{/* <option value={SORT_OPTIONS.ACTIVE} disabled={onlyActive}>Por activación</option> */}
						{!onlyActive && (
							<option value={SORT_OPTIONS.ACTIVE}>Por activo</option>
						)}
					</Select>
				</div>

				<div className={style.row}>
					<div className={style.active}>
						<InputCheckbox
							className={style.checkbox}
							checked={onlyActive}
							onChange={ev => setOnlyActive(ev.target.checked)}
						/>
						<p>Mostrar sólo activos</p>
					</div>

					<Button kind='primary' onClick={setCreateForm}>
						Añadir usuario
					</Button>
				</div>
			</div>
		</>
	);
};

export default UsersListFilter;
