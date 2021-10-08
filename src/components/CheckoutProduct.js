import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice"


function CheckoutProduct({ id, title, price, rating, description, image, category, hasPrime }) {
    const dispatch = useDispatch()


    const addItemToBasket = () => {
        const product = {
            id, title, price, rating, description, image, category, hasPrime
        }
        dispatch(addToBasket(product))
    }


    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className="grid grid-cols-5">

            <Image src={image} height={200} width={200} objectFit="contain" alt="image" />


            {/* Middle */}

            <div className="col-span-3 mx-5">
                <p className="">
                    {title}
                </p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">
                    {description}
                </p>
                <Currency quantity={price} currnecy="GBP" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://links.papareact.com/fdw"
                            alt="fdw"
                            className="w-12"
                            loading="lazy" />
                        <p className="text-xs text-gray-500">FREE next-day Delivery</p>
                    </div>
                )}
            </div>

            {/* Right add/remove button */}
            <div className="flex flex-col space-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>





        </div>
    )
}

export default CheckoutProduct

