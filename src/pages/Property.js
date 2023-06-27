export const Property = () => {
  return (
    <div className="container sm:container mx-auto max-w-screen-xl bg-gray-100 border border-gray-200 duration-500 ease-out dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between uppercase font-medium text-lg text-gray-500">
        <div><i className="fa-solid fa-location-dot"></i> BGC, Taguig City</div>
        <div><p className="">Available</p></div>
      </div>
      <div className="flex justify-between">
        <a href="#" className="hover:text-green transition duration-500 ease-in-out mb-3 text-3xl font-medium text-gray-800 dark:text-gray-400 block">
          Inside of a Modern Voluptuous BGC, Taguig City
        </a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Php 100,000,000</h5>
      </div>
      <div className="max-h-full mx-auto w-full object-scale-down">
        <a href="/" className="">
          <img className="h-[30rem] w-full object-cover" src="https://www.presello.com/wp-content/uploads/2022/09/29134-2.jpg" alt="" />
        </a>
      </div>
      <div className="p-5">
        <div className="flex gap-8 mb-2 uppercase">
          <div>
            <i className="fas fa-bed"></i><span> 4</span><span className="block"> Bedrooms</span>
          </div>
          <div>
            <i className="fas fa-shower"></i><span> 5</span><span className="block"> Bathrooms</span>
          </div>
          <div>
            <i className="fa-solid fa-car"></i><span></span><span className="block"> Car Parks</span>
          </div>
          <div>
            <i className="fa-solid fa-table-cells-large"></i><span> 1059.33 m2</span><span className="block"> Floor Area</span>
          </div>
          <div>
            <i className="fa-solid fa-ruler-combined"></i><span> 1873 m2</span><span className="block"> Lot Area</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <a href="../pages/Property" title="Add to List">
            <i className="fa-solid fa-bookmark text-3xl text-green hover:text-gold"></i>
          </a>
        </div>
      </div>
      <div className="p-5">
        <h2 className="uppercase font-bold text-xl mb-3">Description</h2>
        <p className="text-lg">Inside of a Modern Voluptuous South Forbes, Makati City</p>
      </div>
      <div className="p-5 grid grid-cols-2 grid-rows-2 gap-10">
        <div className="order-1">
          <h2 className="uppercase font-bold text-xl mb-3">Home Features</h2>
          <ul className="capitalize text-lg">
            <li><i className="fa-solid fa-check"></i> maid's room</li>
            <li><i className="fa-solid fa-check"></i> smart home</li>
            <li><i className="fa-solid fa-check"></i> walk-in closet</li>
            <li><i className="fa-solid fa-check"></i> dirty kitchen</li>
            <li><i className="fa-solid fa-check"></i> premium finish</li>
            <li><i className="fa-solid fa-check"></i> family room</li>
            <li><i className="fa-solid fa-check"></i> guest room</li>
            <li><i className="fa-solid fa-check"></i> spacious master Bedrooms</li>
            <li><i className="fa-solid fa-check"></i> porch</li>
            <li><i className="fa-solid fa-check"></i> barbecue area</li>
            <li><i className="fa-solid fa-check"></i> stunning architecture</li>
            <li><i className="fa-solid fa-check"></i> a/c units included</li>
            <li><i className="fa-solid fa-check"></i> swimming pool</li>
            <li><i className="fa-solid fa-check"></i> lush garden</li>
            <li><i className="fa-solid fa-check"></i> led lights</li>
            <li><i className="fa-solid fa-check"></i> high ceiling</li>
            <li><i className="fa-solid fa-check"></i> foyer</li>
            <li><i className="fa-solid fa-check"></i> lanai</li>
            <li><i className="fa-solid fa-check"></i> water storage tracking</li>
            <li><i className="fa-solid fa-check"></i> high fence</li>
            <li><i className="fa-solid fa-check"></i> laundry area</li>
            <li><i className="fa-solid fa-check"></i> driver's room</li>
            <li><i className="fa-solid fa-check"></i> gym</li>
            <li><i className="fa-solid fa-check"></i> breathtaking views</li>
            <li><i className="fa-solid fa-check"></i> utility area</li>
            <li><i className="fa-solid fa-check"></i> guest parking</li>
          </ul>
        </div>
        <div className="order-3">
          <h2 className="uppercase font-bold text-xl mb-3">Neighborhood features</h2>
          <ul className="capitalize text-lg">
            <li><i className="fa-solid fa-check"></i> private gated community</li>
            <li><i className="fa-solid fa-check"></i> CCTV in common areas</li>
            <li><i className="fa-solid fa-check"></i> clubhouse</li>
            <li><i className="fa-solid fa-check"></i> basketball court</li>
            <li><i className="fa-solid fa-check"></i> playground</li>
            <li><i className="fa-solid fa-check"></i> spacious driveways</li>
            <li><i className="fa-solid fa-check"></i> lush greenery</li>
          </ul>
        </div>
        <div className="order-4">
          <h2 className="uppercase font-bold text-xl mb-3">Neighborhood/vicinity</h2>
          <ul className="capitalize text-lg">
            <li>BGC</li>
          </ul>
        </div>
        <div className="order-2">
          <h2 className="uppercase font-bold text-xl mb-3">Nearby establishments</h2>
          <ul className="capitalize text-lg">
            <li><span className="font-bold">Food Hubs:</span> BGC food Hubs</li>
            <li><span className="font-bold">
              Grocery:
            </span> SM Hypermarket
            </li>
            <li><span className="font-bold">
              Gym:
            </span>
            </li>
            <li><span className="font-bold">
              School:
            </span>  University of Makati, De La Salle University Rufino Campus,The British School Manila, International School Manila (ISM), Everest Academy, Fort Bonifacio High School
            </li>
            <li><span className="font-bold">
              Mall/Store:
            </span> Market Market, SM Aura, BGC Uptown Mall, Venice Grand Canal, SM Megamall, Rustan's - Shangri-La Plaza
            </li>
            <li><span className="font-bold">
              Hospital:
            </span> Unciano General Hospital, St. Lukes Medical Center BGC, Ospital ng Makati, The Medical City
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
