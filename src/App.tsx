import CreatePost from './components/CreatePost/CreatePost';
import GrowFollowers from './components/GrowFollowers/GrowFollowers';
import Growth from './components/Growth/Growth';
import MaintainAConsistent from './components/MaintainAConsistent/MaintainAConsistent';
import ManageMultipleAccounts from './components/ManageMultipleAccounts/ManageMultipleAccounts';
import ScheduleToSocialMedia from './components/ScheduleToSocialMedia/ScheduleToSocialMedia';
import SocialMedia from './components/SocialMedia/SocialMedia';
import WriteUseAI from './components/WriteUseAI/WriteUseAI';

function App() {
	return (
		<div className=" px-4 py-8 space-y-8 font-DMSans leading-none w-screen overflow-hidden">
			<SocialMedia />
			<ManageMultipleAccounts />
			<MaintainAConsistent />
			<ScheduleToSocialMedia />
			<GrowFollowers />
			<Growth />
			<CreatePost />
			<WriteUseAI />
		</div>
	);
}

export default App;
