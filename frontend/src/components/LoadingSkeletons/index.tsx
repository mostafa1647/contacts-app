import SingleContact from "./SingleContact";
import ContactsList from "./ContactsList";

interface LoadingSkeleton {
	SingleContact: typeof SingleContact;
	ContactsList: typeof ContactsList;
}

const LoadingSkeletons: LoadingSkeleton = { SingleContact, ContactsList };

export { SingleContact, ContactsList };
export default LoadingSkeletons;
