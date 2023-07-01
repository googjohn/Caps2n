export const Search = () => {
  return (
    <>
      <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div className="relative w-full max-w-5xl max-h-full">
          <div className="relative p-4 bg-white bg-opacity-100 rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Find Property
              </h3>
              <button type="button" className="text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Name</label>
                  <input type="text" name="name" id="name" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type property name" required="" />
                </div>
                <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Location</label>
                  <select id="category" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="" className="text-gray-900">Select location</option>
                    <option value="baguio">Baguio City</option>
                    <option value="cebu">Cebu City</option>
                    <option value="davao">Davao City</option>
                    <option value="tagaytay">Tagaytay</option>
                    <option value="manila">Metro Manila</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Max Price</label>
                  <input type="number" name="price" id="price" limit="100000000" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Php100,000,000" required="" />
                </div>
                <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Category</label>
                  <select id="category" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="" className="text-gray-900">Select category</option>
                    <option value="RFO">Ready for occupancy</option>
                    <option value="Pre-selling">Pre-selling</option>
                  </select>
                </div>

              </div>
              <button type="submit" className="text-white bg-green inline-flex items-center border-2 border-transparent hover:border-green hover:bg-transparent hover:text-green transition duration-500  focus:ring-0 focus:outline-none focus:ring-white font-normal rounded-full text-lg px-4 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                Search Property
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
