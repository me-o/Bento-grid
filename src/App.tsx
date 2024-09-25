import { twMerge } from 'tailwind-merge';
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
		<div
			className={twMerge(
				' px-4 py-8 space-y-8 font-DMSans leading-none w-screen ',
				' lg:grid lg:gap-7 lg:grid-cols-4 lg:grid-rows-[324px_92px_157px_246px] lg:space-y-0 lg:p-0 lg:items-start *:lg:h-full',
				'max-w-screen-mobile  lg:max-w-[1120px]'
			)}
		>
			<SocialMedia className=" col-span-2" />
			<ManageMultipleAccounts className="  col-start-2 row-start-2 row-span-2" />
			<MaintainAConsistent className=" row-span-2" />
			<ScheduleToSocialMedia className=" col-start-4 row-start-1 row-span-3" />
			<GrowFollowers className=" col-start-3 col-span-2" />
			<Growth className=" col-start-2 row-start-4 " />
			<CreatePost className=" row-start-1 col-start-1 row-span-2" />
			<WriteUseAI className=" col-start-1 row-start-3 row-span-2" />
		</div>
	);
}

export default App;
