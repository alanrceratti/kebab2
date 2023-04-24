"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_iy6zn5f",
				"template_8hm6p3f2",
				form.current,
				"GwS-FbYtihip9wEJV"
			)
			.then(
				(result) => {
					alert("Message sent!");
					form.current.reset();
				},
				(error) => {
					alert("Fail to sent message, please try again!");
				}
			);
	};

	return (
		<div className="container pt-36 px-6 mx-auto">
			<section className="mb-32 text-center text-green font-inter font-black">
				<div className="max-w-[700px] mx-auto px-3 lg:px-6">
					<h2 className="text-3xl font-bold mb-12">Contact us!</h2>
					<form ref={form} onSubmit={sendEmail}>
						<div className="mb-6">
							<input
								type="text"
								className="block    
                required            
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleInput7"
								placeholder="Name"
							/>
						</div>
						<div className="mb-6">
							<input
								required
								type="email"
								className="block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleInput8"
								placeholder="Email address"
							/>
						</div>
						<div className="mb-6">
							<textarea
								className="
              requer
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
								rows="3"
								placeholder="Message"
							></textarea>
						</div>
						<div className=" text-center mb-6"></div>
						<button
							type="submit"
							className="w-full px-6 py-2.5 bg-green text-black font-aclonica font-black text-xs leading-tight uppercase rounded shadow-md
            hover:bg-black hover:text-green hover:shadow-lg transition duration-150 ease-in-out"
						>
							Send
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Form;
