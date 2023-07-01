
export const ModalLicensing = () => {
  return (
    <div>
        <div>
         <div id="ModalLicensing" tabindex="1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full pt-20 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className=" relative w-full text-left justify-center max-w-2xl max-h-full">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

        <div className="flex items-start justify-between p-8 border-b rounded-t border-b-gold dark:border-gray-600">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Licensing
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gold hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="ModalLicensing">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <h1 className=' text-3xl font-extrabold text-center pt-9'>PRIVACY POLICY</h1> */}
            {/* MODAL BODY */}
    <div className="p-6 pb-5 space-y-6">
    <div className="relative w-full max-w-2xl max-h-full">

    <h2 className="text-xl font-bold">Intellectual Property Rights</h2>
    <p className="mb-3 text-gray-500 dark:text-gray-400">All content on this website, including text, images, graphics, logos, and software, is the property of <a href="/" target='_blank' rel='noreferrer noopener' className="  text-gold hover:"> www.topagent.com </a>or its licensors and is protected by Philippine and international copyright laws. </p>
    <p className="mb-3 text-gray-500 dark:text-gray-400">
    You may not reproduce, modify, distribute, or republish any of the content on this website without obtaining prior written permission from TopAgent.</p>
    <p className="mb-3 text-gray-500 dark:text-gray-400">
    The use of our logo or any other trademarks displayed on this website is strictly prohibited without our express written consent.</p>

    <h3 className="text-xl font-bold">Third-Party Content</h3>
    
        <p className="mb-3 text-gray-500 dark:text-gray-400">This website may include content or links to third-party websites for your convenience. We do not have control over the content or practices of these third-party websites and are not responsible for their actions or policies.</p>

        <p className="mb-3 text-gray-500 dark:text-gray-400">Any third-party content or services integrated into our website are subject to their respective terms and licenses. Please review the applicable terms and conditions of these third parties.</p>
       
    <h6 className="text-xl font-bold">Limitations of Liability</h6>
         <p className="mb-3 text-gray-500 dark:text-gray-400">The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.</p>

         <p className="mb-3 text-gray-500 dark:text-gray-400">We shall not be liable for any loss or damage, including but not limited to indirect or consequential loss or damage, arising out of or in connection with the use of this website or any third-party websites linked to from this website.</p>
    
    <h3 className="text-xl font-bold">Contact Information</h3>
        <p className="mb-3 text-gray-500 dark:text-gray-400">If you have any questions or concerns regarding the licensing or intellectual property issues related to our website, please contact us at:</p>

        <p className="mb-3 text-gray-500 dark:text-gray-400">Email: info@topagent.com</p>

        <p className="mb-3 text-gray-500 dark:text-gray-400">Phone: +639154456321</p>

        <p className="mb-3 text-gray-500 dark:text-gray-400">Adress: 11F, One Ayala West Tower, Ayala Avenue, corner Edsa, Makati, 1223 Metro Manila</p>

        
    
    <h3 className="text-xl font-bold">Updates and Modifications</h3>
        <p className="mb-3 text-gray-500 dark:text-gray-400">We reserve the right to update or modify this Licensing page at any time without prior notice. Any changes made will be effective immediately upon posting. Continued use of the website constitutes acceptance of any revisions.</p>
        
    <h3 className="text-md font-bold">Governing Law</h3>
        <p className="mb-3 text-gray-500 dark:text-gray-400">This Licensing page shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising out of or relating to this Licensing page shall be subject to the exclusive jurisdiction of the courts located in Makati, 1223 Metro Manila.</p>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

  )
}
export default ModalLicensing;