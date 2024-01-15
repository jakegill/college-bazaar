"use client"
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";


export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            if (!res.ok) {
                throw new Error(res.statusText);
            }

            const response = await res.json();
            console.log(response);

        } catch (error) {
            setError((error as Error).message);
        }
		
	};

	return (
		<div className='w-full max-w-xs mx-auto my-20'>
			<form
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mx-auto'
				onSubmit={handleSubmit}
                onClick={() => setError('')}
			>
				<div className='mb-3'>
					<label
						className='block text-zinc-700 text-sm mb-1'
						htmlFor='username'
					>
						Email
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
						id='email'
						type='email'
						placeholder=''
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label
						className='block text-zinc-700 text-sm mb-1'
						htmlFor='password'
					>
						Password
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						type='password'
						placeholder=''
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<button
						className={buttonVariants({
							size: "sm",
							className: "text-xs bg-blue-600",
						})}
						type='submit'
					>
						Sign in
					</button>
					<div className="flex gap-2">
						<p className="text-sm text-zinc-700">Dont have an account?</p>
						<Link className="text-sm text-blue-600 underline"href='/register'>Sign up</Link>
                        
                    </div>
                    {error !== '' ? <p className="text-red-500">{error}</p> : null}
				</div>
			</form>
		</div>
	);
}