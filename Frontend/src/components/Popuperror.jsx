import React from 'react'

const Popuperror = () => {
    return (
        <div>
            <div className="modal fade" id="exampleconfirmModal" tabIndex="-1" aria-labelledby="exampleconfirmModal" aria-hidden="true" data-backdrop="false">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h6 className='lh-base'>Unenrol from ?</h6>
                            <div>
                                <p className='mb-0 normal_font'>You will be removed from this class.</p>
                            </div>
                        </div>
                        <div className="text-end pb-2">
                            <button type="button" className="btn font " data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn font text-primary" data-bs-dismiss="modal" onClick={() => deleteStudentClass(data._id)}>Unenrol</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popuperror