import MaintainAConsistent from './components/MaintainAConsistent/MaintainAConsistent';
import ManageMultipleAccounts from './components/ManageMultipleAccounts/ManageMultipleAccounts';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
	return (
		<div className=" px-4 py-8 space-y-8 font-DMSans leading-none w-screen overflow-hidden">
			<SocialMedia />
			<ManageMultipleAccounts />
			<MaintainAConsistent />
			<div className="">
				Schedule to social media. Optimize post timings to publish content at the perfect time for your
				audience.
			</div>
			<div className="">Grow followers with non-stop content.</div>
			<div className="">&gt;56% faster audience growth</div>
			<div className="">Create and schedule content quicker.</div>
			<div className="">Write your content using AI.</div>
		</div>
	);
}

export default App;
