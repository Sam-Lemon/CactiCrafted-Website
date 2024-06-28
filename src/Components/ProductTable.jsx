import React, {useEffect, useState} from "react";
import { succsApi } from "../API/SuccsApi";
import Table from 'react-bootstrap/Table';
import ProductCard from './ProductCard';

export default function ProductTable () {
        const [succulents, setSucculents] = useState([]);

    useEffect(() => {
        const fetchSucculents = async () => {
            try {
                const succulentsData = await succsApi.get();
                setSucculents(succulentsData);
            } catch (error) {
                console.error("Error fetching succulents:", error);
            }
        };

        fetchSucculents();
    }, []);

    return (
        <Table bordered>
            <tbody>
                {succulents.map((succulent, index) => {
                    <tr key={index}>
                        <td>
                            <ProductCard  succulent={succulent} />
                        </td>
                    </tr>
                    } 
                )}
            </tbody>
        </Table>
    );
};

