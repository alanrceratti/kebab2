import React from "react";

const Contact = () => {
	return (
		<div class="container pt-36 px-6 mx-auto">
			<section class="mb-32 text-center text-green font-inter font-black">
				<div class="max-w-[700px] mx-auto px-3 lg:px-6">
					<h2 class="text-3xl font-bold mb-12">Contact us!</h2>
					<form>
						<div class="form-group mb-6">
							<input
								type="text"
								class="form-control block
                
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
						<div class="form-group mb-6">
							<input
								type="email"
								class="form-control block
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
						<div class="form-group mb-6">
							<textarea
								class="
              form-control
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
								id="exampleFormControlTextarea13"
								rows="3"
								placeholder="Message"
							></textarea>
						</div>
						<div class="form-group form-check text-center mb-6"></div>
						<button
							type="submit"
							class="w-full px-6 py-2.5 bg-green text-black font-aclonica font-black text-xs leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
						>
							Send
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Contact;
