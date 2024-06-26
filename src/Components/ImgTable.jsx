import React from "react";
import Table from 'react-bootstrap/Table';
import ProductCard from './ProductCard';

export default function ImgTable () {

    return (
        <div>
            <Table>
                <tbody>
                    <tr>
                        <td>Testing col 1</td>
                        {/* <td><ProductCard /></td>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td> */}
                    </tr>
                    <tr>
                        <td>Testing col 2</td>
                        {/* <td><ProductCard /></td>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td> */}
                    </tr>
                    <tr>
                        <td>Testing col 3</td>
                        {/* <td><ProductCard /></td>
                        <td><ProductCard /></td>
                        <td><ProductCard /></td> */}
                    </tr>
                </tbody>

            </Table>
        </div>

    );
}

