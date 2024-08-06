import Link from 'next/link';

export function CreateCampaignPrompt() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-[90%] max-w-screen-md py-16">
                <h2 className="text-2xl font-bold mb-4 text-left max-w-[80%] mx-auto">Create New <br /> Webinar Campaign</h2>
                <p className="text-gray-600 my-12">You don&apos;t seem to have any projects</p>
                <div className="flex justify-end">
                    <Link href="/create-project">
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
                            Create New Project 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
