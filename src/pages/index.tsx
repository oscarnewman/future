import Badge from '@/components/Badge'
import BandageIllustration from '@/components/BandageIllustration'
import ChatIllustration from '@/components/ChatIllustration'
import LaptopIllustration from '@/components/LaptopIllustration'
import MicroscopeIllustration from '@/components/MicroscopeIllustration'
import PersonIllustration from '@/components/PersonIllustration'
import ProviderChatRow from '@/components/ProviderChatRow'
import ServiceRow from '@/components/ServiceRow'
import Table from '@/components/Table'
import UpcomingVisitRow from '@/components/UpcomingVisitRow'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { addDays, subDays } from 'date-fns'

function Home() {
	return (
		<div className="max-w-screen-md mx-auto py-12 space-y-8">
			<div className="flex justify-between px-6">
				<h1 className="text-3xl font-bold">My Health</h1>
				<div className="w-10 h-10 bg-pink-600 rounded-full text-white flex items-center justify-center">
					ON
				</div>
			</div>
			<Table>
				<UpcomingVisitRow
					clinicName="City Bay Urgent Care"
					distanceMi={1.3}
					imageUrl="https://www.gohealthuc.com/sites/default/files/styles/gallery_main/public/pictures/clinics/lowerpacheights_exterior1.jpg?itok=ruo2JTu-"
					date={addDays(new Date(), 3)}
				/>
			</Table>
			<Table>
				<ProviderChatRow
					clinicName="City Bay Urgent Care"
					date={subDays(new Date(), 3)}
					providerName="Roger Federer, NP"
					avatarUrl="https://st.depositphotos.com/3489481/4889/i/950/depositphotos_48892981-stock-photo-headshot-happy-smiling-male-doctor.jpg"
					preview={{
						icons: ['chat', 'video'],
						message: 'Video visit and chat with Roger',
					}}
				/>
				<ProviderChatRow
					clinicName="Medspring"
					date={subDays(new Date(), 25)}
					providerName="Alisha Keys, MD"
					avatarUrl="https://media.gettyimages.com/photos/portrait-of-smiling-nurse-standing-in-hospital-picture-id529400791"
					preview={{
						icons: ['chat'],
						message: 'You sent an image',
					}}
				/>
				<ProviderChatRow
					clinicName="SteadyMD"
					date={subDays(new Date(), 125)}
					providerName="Charlotte Mills, MD"
					avatarUrl="https://www.hospitalrecruiting.com/wp/wp-content/uploads/2020/09/Having-Influence-at-Work-as-a-Nurse.jpg"
					preview={{
						icons: ['prescription'],
						message: 'Charlotte wrote you a prescription',
					}}
				/>

				<button className="p-4 w-full flex items-center justify-between hover:bg-gray-50 active:bg-gray-100">
					<p className="text-sm text-gray-500">3 older threads</p>
					<ChevronRightIcon className="h-6 text-gray-400" />
				</button>
			</Table>

			<Table title="Get care">
				<ServiceRow
					title="Nursing advice chat"
					subtitle="Get quick advice on drugs, injuries, and care from licensed providers"
					badges={<Badge tone="success">Free</Badge>}
					illustration={<ChatIllustration />}
				/>
				<ServiceRow
					title="Telemed visit"
					subtitle="Video or voice call a provider in your state"
					badges={<Badge tone="promote">$49</Badge>}
					illustration={<LaptopIllustration />}
				/>
				<ServiceRow
					title="In-person visit"
					subtitle="Book at thousands of clinics near you"
					badges={<Badge tone="promote">$69 &ndash; $129+</Badge>}
					illustration={<PersonIllustration />}
				/>
			</Table>

			<Table title="COVID-19">
				<ServiceRow
					title="Get tested"
					subtitle="Find a clinic to get the COVID-19 test you need as soon as possible"
					illustration={<MicroscopeIllustration />}
					badges={
						<>
							<Badge tone="promote">Antibody</Badge>
							<Badge tone="promote">PCR</Badge>
							<Badge tone="promote">Rapid</Badge>
						</>
					}
				/>
				<ServiceRow
					title="Find a vaccine"
					subtitle="Search avaiable vaccine stock in your area"
					illustration={<BandageIllustration />}
				/>
			</Table>
		</div>
	)
}

export default Home
