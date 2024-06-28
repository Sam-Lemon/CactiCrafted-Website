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

    const limitedSucculents = succulents.slice(0, 9);

    const renderGrid = () => {
        let rows = [];
        for (let i = 0; i < 3; i++) {
            let cells = [];
            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j;
                if (index < limitedSucculents.length) {
                    cells.push(
                        <td key={index}>
                            <ProductCard succulent={limitedSucculents[index]} />
                        </td>
                    );
                } else {
                    cells.push(<td key={index}></td>);
                }
            }
            rows.push(<tr key={i}>{cells}</tr>);
        }
        return rows;
    };

    return (
        <Table bordered>
            <tbody>
                {renderGrid()}
            </tbody>
        </Table>
    );
}

