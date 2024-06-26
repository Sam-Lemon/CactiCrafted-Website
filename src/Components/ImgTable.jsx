import React from "react";
import Table from 'react-bootstrap/Table';
import ProductCard from './ProductCard';

export default function ImgTable () {

    return (
        <div>
            <Table>
                <tbody>
                    <tr>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td>
                    </tr>
                    <tr>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td>
                    </tr>
                    <tr>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td>
                    </tr>
                </tbody>

            </Table>
        </div>

    );
}

