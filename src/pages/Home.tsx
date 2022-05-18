import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
interface IProductType {
    // Name: String;
    // Price: Number
    // Category: String
    // Description: String
    // Avatar: String
    // DeveloperEmail: String,

    avatar: string;
    category: string;
    createdAt: Date;
    description: string;
    developerEmail: string;
    id: string;
    name: string;
    price: number;
}
interface ICategoryType {
    createdAt: Date;
    id: string;
    name: string;
}
export default function Home() {
    const DEFAULT_IMAGE = "https://uploads-ssl.webflow.com/5b51027ab42492b481d39425/5ba289e09f24ea6d65fc8a70_noimage.jpg"
    const [productList, setProductList] = useState<IProductType[]>([]);
    const [categories, setCategories] = useState<ICategoryType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        fetchProductsAndCategories();
    }, [])

    const fetchProductsAndCategories = useCallback(async () => {
        axios.get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories").then(({ data }) => {
            if (data) {
                setCategories(data)
            }
        })
        axios.get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/").then(({ data }) => {
            if (data) {
                setProductList(data)
            }
        })

    }, [])



    return (
        <div className="flex-1 items-center mt-10 mx-4 mb-5">
            <NavBar />
            <div className="flex-1 flex items-center container mx-auto py-2 text-l font-sans italic font-medium justify-between">
                <input className=" mr-2 w-full xl:w-4/12 shadow border rounded py-3 px-3 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Apple Watch, Iphone 11, MacbookPro 16...." onChange={e => setSearchText(e.target.value)} />
                <select className="form-select xl:w-3/12  shadow block px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={e => setSelectedCategory(e.target.value)}>
                    <option selected value="">Categories</option>
                    {categories.map(category => <option>{category.name}</option>)}
                </select>
            </div>

            <div className="mt-10 xl:w-8/12 self-center w-full container mx-auto py-3 grid grid-cols-4 gap-2">


                {productList.filter(product => selectedCategory !== "" ? product.category == selectedCategory : true)
                    .filter(product => searchText !== "" ? product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) : true).map(product =>
                        <Link to={`product/${product.id}`}>
                            <div className="flex-col min-h-fit align-center items-center flex justify-center mb-6">
                                <div className="bg-white shadow rounded-2xl  py-2 px-2 " >
                                    <img className=" h-64 w-52 object-contain" src={product.avatar} onError={(e) => e.currentTarget.src = DEFAULT_IMAGE}></img>

                                </div>
                                <div className="m-2 font-medium h-12 w-52 overflow-hidden">{product.name}</div>
                                <div className="m-2 w-full text-center font-bold">$ {product.price}</div>
                            </div>
                        </Link>
                    )}




            </div>


            <Link to={'create'}><div className=" fixed bg-black bottom-5 right-5 w-16 h-16 rounded-full justify-center items-center flex">
                <i className="fa-solid fa-plus text-white text-4xl"></i>
            </div>
            </Link>
        </div >)
}