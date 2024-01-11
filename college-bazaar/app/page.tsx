import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<MaxWidthWrapper className=''>
				<div className='flex flex-col'>
					<div className='mt-20 mb-10 text-center flex flex-col gap-4'>
						<h1 className='text-2xl md:text-5xl font-bold '>
							<span className='text-blue-700'>Buy, Sell, and Trade</span> with
							your fellow students at{" "}
							<span className='text-orange-600'>College Bazaar</span>
						</h1>
						<p className='text-sm md:text-lg text-zinc-700 max-w-prose text-center mx-auto'>
							College bazaar is a safe marketplace where students can trade
							items without the stress of being scammed by fake users
						</p>
					</div>
					<div className='mx-auto'>
						<Link
							className={buttonVariants({ size: "lg" })}
							href='/dashboard'
							target='_blank'
						>
							Get started
							<ArrowRight className='ml-4' />
						</Link>
					</div>
				</div>
			</MaxWidthWrapper>

			{/* Gradient */}
			<div>
				<div className='relative isolate'>
					<div
						aria-hidden='true'
						className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
					>
						<div
							style={{
								clipPath:
									"polygon(0 0, 0 20%, 40% 0, 20% 20%, 80% 0, 100% 20%, 100% 100%, 0 100%)",
							}}
							className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1.5 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
						></div>
					</div>
				</div>
			</div>

			{/* Steps */}
			<ul className='my-8  flex flex-col gap-10 mt-20'>
				<li className='ml-20'>
					<h2 className='text-slate-900 text-xl md:text-2xl font-bold'>
						Post Items
					</h2>
					<p>Quickly post items to sell to other students</p>
				</li>
				<li className='ml-20'>
					<h2 className='text-slate-900 text-xl md:text-2xl font-bold'>
						Browse the Bazaar
					</h2>
					<p>Look for unique items from your community</p>
				</li>
				<li className='ml-20'>
					<h2 className='text-slate-900 text-xl md:text-2xl font-bold'>
						Make a Deal
					</h2>
					<p>Directly message other students and negotiate a deal</p>
				</li>
			</ul>
		</>
	);
}
