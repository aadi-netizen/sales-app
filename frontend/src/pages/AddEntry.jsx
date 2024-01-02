import React from 'react';
import './addEntry.css'


const AddEntry = () => {
    return (
        <div className='entry-container mx-auto'>
            <h4 className="mt-5 text-center fs-1">ADD SALE ENTRY</h4>
            <div className=" d-flex justify-content-center mt-5">
                <div className=" container">
                    <form className='form-control g-2'>
                    <label for="" class="form-label">Product Name</label>
                        <input type="text" className="form-control p-2 mt-4 mb-2 form-control input-bg" placeholder='Samsung galaxy S12' />
                        <label for="" class="form-label">Quantity</label>
                        <input type="text" className="form-control p-2 mb-2 form-control input-bg" placeholder='1' />
                        <label for="" class="form-label">Price</label>
                        <input type="text" className="form-control p-2 mb-2 form-control input-bg" placeholder='******' />
                        <button type='submit' className="btn btn-primary w-100">  Submit  </button>                          
                    </form>
                </div>
            </div>
        </div>

    );
}

export default AddEntry;