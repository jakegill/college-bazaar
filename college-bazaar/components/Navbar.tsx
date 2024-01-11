import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
	return (
		<div className='w-full flex items-center space-around h-12 border-b-2 bg-slate-50 border-zinc-300 sticky inset-x-0 top-0 z-20'>
			<MaxWidthWrapper>
				<div className='flex items-center justify-between w-full'>
					<h2 className='md:text-xl font-bold text-blue-600 text-sm'>
						College Bazaar
					</h2>
					<div className='flex gap-2'>
						<Link
							href='/api/auth/login'
							className={buttonVariants({
								variant: "outline",
								size: "sm",
								className: "text-xs",
							})}
						>
							Sign in
						</Link>
						<Link
                            href='/api/auth/register'
							className={buttonVariants({
								size: "sm",
								className: "text-xs",
							})}
						>
							Get Started
						</Link>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
}
