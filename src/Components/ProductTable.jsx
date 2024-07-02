import React, {useEffect, useState} from "react";
import { getSucculents } from "../API/SuccsApi";
import ProductCard from './ProductCard';

export default function ProductTable () {
        const [succulents, setSucculents] = useState([]);

        useEffect(() => {
            getSucculents().then((data) => {
                setSucculents(data);
            });
        }, []);

        function getRandomSucculents(count) {
            let shuffled = succulents.slice();
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled [j]] = [shuffled[j], shuffled [i]];
            }
            return shuffled.slice(0, count)
        }

    return (
        <div>
            <div className="row justify-content-around">
                {succulents && getRandomSucculents(9).map((succulent) => (
                    <div key={succulent.id} className="mx-3 col-md-3 col-sm-12">
                        <ProductCard succulents={succulent} />
                    </div>
                ))}
            </div>
        </div>
    );
}

