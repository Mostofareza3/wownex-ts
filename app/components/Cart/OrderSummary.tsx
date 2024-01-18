"use client";

const OrderSummary = () => {
  return (
    <div className="md:px-6 px-2 mt-[20px] md:mt-0">
      {/* container  */}
      <div className="bg-[#FC5B5B] md:w-[340px] w-full  text-white grid justify-center p-2 rounded-md">
        {/* order details  */}
        <div className="">
          <h1 className="text-center text-2xl bg-stone-300 py-2 rounded-md text-black">
            Customer Information
          </h1>
          <p></p>
          <p className="my-2 font-light text-center italic">
            To confirm the order enter your name, address, mobile number and
            click on confirm order button
          </p>

          <form className="max-w-sm mx-auto border-[1px] shadow-lg p-4 rounded-[15px]">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="ex: Md. Rafiq"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Phone
              </label>
              <input
                type="text"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                placeholder="ex: 01933325548"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Full Address
              </label>
              <textarea
                id="address"
                rows={2}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex: Mirpur-10, Shawrapara, Iqbal Rd"
              ></textarea>
            </div>
            <div className="mb-5">
              <label
                htmlFor="delivery_area"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose Delivery Area
              </label>
              <select
                id="delivery_area"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="in_dhaka" selected>
                  Home Delivery(In Dhaka)
                </option>
                <option value="out_dhaka">Home Delivery(Outside Dhaka)</option>
              </select>
            </div>

            <button
              type="submit"
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirm You Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
