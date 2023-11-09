import React from 'react';

const FAQ = () => {


    return (
        <div>
            {/* <!-- FAQ --> */}
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium  text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold text-center text-purple-400 sm:text-4xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">: How can I create a study group?</h3>
				<p className="mt-1 dark:text-gray-400">To create a study group, log in to your account, navigate to the "Groups" section, and click on the "Create Group" button. Fill in the details, such as group name, description, and privacy settings, and your group will be ready!</p>
			</div>
			<div>
				<h3 className="font-semibold">Can I submit multiple assignments?</h3>
				<p className="mt-1 dark:text-gray-400">Yes, you can join multiple assignments. Explore the available assignments based on your interests or courses, and click the 'create assigment' button to submit.</p>
			</div>
			<div>
				<h3 className="font-semibold">What types of study materials can be shared in a group?

</h3>
				<p className="mt-1 dark:text-gray-400">Study groups support various types of materials, including documents, presentations, images, and links. Members can collaborate by uploading and sharing relevant study resources.</p>
			</div>
			<div>
				<h3 className="font-semibold">Are there notifications for group activities?</h3>
				<p className="mt-1 dark:text-gray-400">Yes, you will receive notifications for group activities such as new study materials, upcoming study sessions, and messages within the group. You can customize your notification preferences in your account settings.</p>
			</div>
		</div>
	</div>
</section>
{/* <!-- End FAQ --> */}
        </div>
    );
};

export default FAQ;