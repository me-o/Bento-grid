import MaintainAConsistent from './components/MaintainAConsistent/MaintainAConsistent';
import ManageMultipleAccounts from './components/ManageMultipleAccounts/ManageMultipleAccounts';
import ScheduleToSocialMedia from './components/ScheduleToSocialMedia/ScheduleToSocialMedia';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
	return (
		<div className=" px-4 py-8 space-y-8 font-DMSans leading-none w-screen overflow-hidden">
			<SocialMedia />
			<ManageMultipleAccounts />
			<MaintainAConsistent />
			<ScheduleToSocialMedia />

			<div className="">Grow followers with non-stop content.</div>
			<div className="">&gt;56% faster audience growth</div>
			<div className="">Create and schedule content quicker.</div>
			<div className="">Write your content using AI.</div>
		</div>
	);
}

export default App;
