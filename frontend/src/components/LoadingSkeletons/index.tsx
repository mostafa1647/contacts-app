import SingleContact from "./SingleContact";
import ContactsList from "./ContactsList";

interface LoadingSkeleton {
	SingleContact: typeof SingleContact;
	ContactsList: typeof ContactsList;
}

declare const LoadingSkeletons: LoadingSkeleton;

export { SingleContact, ContactsList };
export default LoadingSkeletons;
