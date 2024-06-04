import React from 'react'

export default function Login() {
  return (
    <>
    <section className="p-6 text-gray-800">
	<form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50">
		<h2 className="w-full text-3xl font-bold leading-tight">Login</h2>
		
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-lime-600 bg-gray-100" />
		</div>
		<div>
			<label htmlFor="password" className="block mb-1 ml-1">Password</label>
			<input id="password" type="password" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-lime-600 bg-gray-100" />
		</div>
		<div className='text-center'>
			<button type="submit" className="px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:bg-lime-400 focus:ring-opacity-50 bg-lime-500 focus:ring-lime-700 hover:ring-lime-600 text-gray-50">Login</button>
		</div>
	</form>
</section>
    </>
  )
}
