
export const ModalPriPol = () => {
  return (
<div>
      <div id="privacyModal" tabindex="1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full pt-20 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className=" relative w-full text-left justify-center max-w-2xl max-h-full">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

        <div className="flex items-start justify-between p-8 border-b rounded-t border-b-gold dark:border-gray-600">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                PRIVACY POLICY
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gold hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="privacyModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <h1 className=' text-3xl font-extrabold text-center pt-9'>PRIVACY POLICY</h1> */}
            {/* MODAL BODY */}
    <div className="p-6 pb-5 space-y-6">
    <div className="relative w-full max-w-2xl max-h-full">

    <h2 className="text-xl font-bold">Who we are</h2>
    <p className="mb-3 text-gray-500 dark:text-gray-400">Our website address is: <a href="/" target='_blank' rel='noreferrer noopener' className="  text-gold hover:">www.topagent.com</a></p>

    <h3 className="text-xl font-bold">What personal data we collect and why we collect it</h3>
    <h4 className="text-md font-semibold">MEDIA</h4>
        <p className="mb-3 text-gray-500 dark:text-gray-400">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>

    <h5 className="text-md font-semibold">COOKIES</h5>
        <p className="mb-3 text-gray-500 dark:text-gray-400">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>

        <p className="mb-3 text-gray-500 dark:text-gray-400">If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
       
    <h6 className="text-md font-semibold">EMBEDDED CONTENT FROM OTHER WEBSITES</h6>
         <p className="mb-3 text-gray-500 dark:text-gray-400">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>

         <p className="mb-3 text-gray-500 dark:text-gray-400">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
    
    <h3 className="text-xl font-bold">How long we retain your data</h3>
        <p className="mb-3 text-gray-500 dark:text-gray-400">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>

        <p className="mb-3 text-gray-500 dark:text-gray-400">For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
    
    <h3 className="text-xl font-bold">What rights you have over your data</h3>
        <p className="mb-3 text-gray-500 dark:text-gray-400">If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes</p>

    <h3 className="text-xl font-bold">What rights you have over your data</h3>
        <p className="mb-3 text-gray-500 dark:text-gray-400">Visitor comments may be checked through an automated spam detection service.</p>

    <p className="mb-3 text-gray-500 dark:text-gray-400">If you have questions or concerns about our Privacy Policy, please contact us at info.topagent@gmail.com</p>

    {/* <div className=" items-center text-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
    <button type="button" className="text-white bg-gold hover:bg-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read Terms & Conditions</button>
    <button type="button" className="text-white bg-gold hover:bg-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read About Licensing</button>
    </div> */}
    </div>  
    </div>
    </div>
    </div>
    </div>

    </div>
  )
}
export default ModalPriPol;