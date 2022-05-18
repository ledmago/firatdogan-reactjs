import NavBar from '../components/NavBar';

export default function CreateProductPage() {
    return (
        <div className="flex-1 items-center mt-10 mx-4 mb-5">

            <NavBar />
            <div className="mt-20 mx-auto sm:w-11/12 w-11/12 lg:w-5/12 xl:w-5/12 self-center py-2 justify-center items-center  ">
                <div className='text-3xl font-semibold text-center'>Create Product</div>

                <input className=" mt-12 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Apple Watch, Iphone 11, MacbookPro 16...." />
                <textarea className=" mt-5 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows={5} id="username" placeholder="Apple Watch, Iphone 11, MacbookPro 16...." />
                <input className=" mt-5 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Apple Watch, Iphone 11, MacbookPro 16...." />

                <select className="mt-5  w-full shadow border rounded py-3 px-4 text-gray-700 " aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <input className=" mt-5 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Apple Watch, Iphone 11, MacbookPro 16...." />

                <button className=" font-medium text-lg mt-5 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline">
                    SUBMIT
                </button>

            </div>


        </div >)
}