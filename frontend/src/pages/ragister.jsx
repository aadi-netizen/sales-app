import React from 'react';


function Ragister() {
    return (
        <div className="container login-container">
            <div className="entry-container mx-auto">
                <h4 className="mt-5 text-center fs-1">Ragistration Form</h4>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='container'>
                        <form>
                        <label for='' className='form-label'>First Name</label>
                            <input type="text" className="p-2 mb-2 form-control input-bg" placeholder='first name' />
                            <label for='' className='form-label'>Last Name</label>
                            <input type="text" className="p-2 mb-2 form-control input-bg" placeholder='last name' />
                            <label for='' className='form-label'>Email</label>
                            <input type="email" className="p-2 mb-2 form-control input-bg" placeholder='xyz@gmail.com' />
                            <label for='' className='form-label'>Password</label>
                            <input type="password" className="p-2 mb-2 form-control input-bg" placeholder='Password' />
                            <button className="btn btn-primary w-100 mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ragister;