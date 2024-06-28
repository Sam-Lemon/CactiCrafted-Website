import React, {useEffect, useState} from "react";
import { getSucculents } from "../API/SuccsApi";
import Table from 'react-bootstrap/Table';
import ProductCard from './ProductCard';

export default function ProductTable () {
        const [succulents, setSucculents] = useState([]);


    useEffect(() => {
        getSucculents().then((data) => {
            setSucculents(data);
        });
    }, []);

    function filterSucculents() {
        return succulents.filter((succulent, index) => index < 9);
    }

    return (
        <div>
            <div className="row justify-content-around">
                    {succulents && filterSucculents().map((succulent, index) => (
                <div className="mx-3 col-md-3 col-sm-12">
                            <ProductCard succulents={succulent} />
                    </div>
                    ))}
            </div>
        </div>
    );
    }
