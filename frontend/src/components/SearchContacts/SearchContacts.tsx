import type { FC } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { phoneRegex } from "../../utils/common/regex";
import styleClasses from "./SearchContacts.module.scss";
import { Input } from "antd";

const SearchContacts: FC = (): JSX.Element => {
	const navigate = useNavigate();
	const location = useLocation();

	// get search parameters from url
	const [searchParams] = useSearchParams();
	// destructure phone and name from search parameters
	const [phone, name] = [searchParams.get("phone"), searchParams.get("name")];

	const inputSearchProps = {
		placeholder: "Search Contacts",
		onSearch: (value: string): void => {
			if (!value) {
				navigate("/", { replace: true });
				return;
			}

			if (phoneRegex.test(value)) {
				// value is a phone number
				/**
				 * replace + with @ in phone
				 * @see SearchContacts
				 */
				navigate(`/search?phone=${value.replace(/\+/g, "@")}`, {
					replace: true,
				});
			} else {
				// value is a name
				navigate(`/search?name=${value}`, { replace: true });
			}
		},
		enterButton: true,
		/**
		 * replace @ with + in phone
		 * @see SearchContacts
		 */
		defaultValue:
			location?.pathname === "/search"
				? (phone && phone.replace("@", "+")) || name || ""
				: "",
	};

	return (
		<div className={styleClasses.searchContacts}>
			<Input.Search {...inputSearchProps} />
		</div>
	);
};

export default SearchContacts;
