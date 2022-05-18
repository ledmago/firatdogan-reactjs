export default function Home() {
    return (
        <div className="flex-1 items-center mt-10 mx-4 mb-5">

            <div className="flex flex-1 mb-10 shadow-lg items-center container mx-auto px-4 py-4 text-xl font-sans italic font-medium bg-white rounded-md  justify-between">
                <div>UPayments Store</div>
                <div>Register</div>
            </div>

            <div className="flex-1 flex items-center container mx-auto py-2 text-l font-sans italic font-medium justify-between">
                <input className=" mr-2 w-full xl:w-4/12 shadow appearance-none border rounded py-2 px-3 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Apple Watch, Iphone 11, MacbookPro 16...." />
                <select className="form-select xl:w-3/12 appearance-none shadow block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="mt-10 xl:w-8/12 self-center w-full container mx-auto py-2 grid grid-cols-4 gap-2">
                <div className="flex-col min-h-fit align-center items-center flex justify-center">
                    <div className="bg-white shadow rounded-2xl  py-2 px-2 " >
                        <img className=" h-64 w-52 object-contain" src="https://sharafstore.com/wp-content/uploads/2021/11/iphone-13-pro-gold-select.png"></img>
                    </div>
                    <div className="m-2 font-medium">Apple Watch</div>
                    <div className="m-2 font-medium w-full text-center">$ 529.99</div>
                </div>


            </div>


            <div className=" fixed bg-black bottom-5 right-5 w-16 h-16 rounded-full justify-center items-center flex">
                <i className="fa-solid fa-plus text-white text-4xl"></i>
            </div>
        </div >)
}