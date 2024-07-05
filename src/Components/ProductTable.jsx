import React, {useEffect, useState} from "react";
import { getSucculents } from "../API/SuccsApi";
import ProductCard from './ProductCard';

export default function ProductTable () {

/**Setting state for 'succulents' and 'randomSucculents' */
        const [succulents, setSucculents] = useState([]);
        const [randomSucculents, setRandomSucculents] = useState([]);

/**fetchAndSetSucculents is an async function that fetches succulent data from the API
 * and updates the state. The second argument is an empty dependency array,
 * indicating the effect should only run once, when the component mounts.*/
        useEffect(() => {
            const fetchAndSetSucculents = async () => {
                try {
                    const data = await getSucculents(); //fetching
                    console.log('Fetched succulents:', data);
                    setSucculents(data);    //setting
                } catch (e) {
                    console.error('Error fetching succulents:', e);
                }
            };
            fetchAndSetSucculents();
        }, []);

/**This checks to see that the length of the 'succulents' array is larger than 0,
 * then calls the getRandomSucculents function with an argument of 9, to get 
 * the 9 randomly shuffled succulents needed for the ProductTable.*/
        useEffect(() => {
            if (succulents.length > 0) {
                setRandomSucculents(getRandomSucculents(9));
            }
        }, [succulents]);

/**This function gets random succulents from the API by shuffling the 
 * succulents array and returning 9 random cards from the list.
 */
        function getRandomSucculents(count) {
            let shuffled = succulents.slice();  //creates copy of 'succulents' to prevent mutating original
                //Fisher-Yates Shuffle Algorithm
            for (let i = shuffled.length - 1; i > 0; i--) {     //iterates through the array backwards  
                const j = Math.floor(Math.random() * (i + 1));  //generating random index (j)
                [shuffled[i], shuffled [j]] = [shuffled[j], shuffled [i]];  //swapping elements
            }
            return shuffled.slice(0, count) //pulling the first (in this case 9) elements from shuffled array
        }


/**Mapping through the new randomSucculents array and rendering each as a ProductCard. */
    return (
        <div>
            <div className="row justify-content-around">
                {randomSucculents.map((succulent) => (
                    <div key={succulent.id} className="mx-3 col-md-3 col-sm-12">
                        <ProductCard succulent={succulent} />
                    </div>
                ))}
            </div>
        </div>
    );
}

