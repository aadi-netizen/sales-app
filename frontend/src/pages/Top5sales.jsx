import React from 'react';


const Top5sales = () => {
    return (
        <div>
            <h1 className='text-center pt-5'> TOP 5 SALES</h1>
            <div className='sales-table container'>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sales Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Sale Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>SI212</td>
                        <td>Laptop</td>
                        <td>2</td>
                        <td>90000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>SI423</td>
                        <td>Mobile</td>
                        <td>5</td>
                        <td>85000</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}



export default Top5sales;