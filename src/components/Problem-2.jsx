import React, { useState } from 'react';

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const handleAllContactsClick = () => {
    setShowModalA(true);
  };

  const handleUSContactsClick = () => {
    setShowModalB(true);
  };

  const handleCloseModal = () => {
    setShowModalA(false);
    setShowModalB(false);
  };

  const AllContactsClick = () => {
    setShowModalA(true);
  }

  const USContactsClick = () => {
    setShowModalB(true);
  }
  const handleAllContactsClickB = () => {
    setShowModalA(true);
    setShowModalB(false);
  }
  const handleUSContactsClickB = () => {
    setShowModalA(false);
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleAllContactsClick}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleUSContactsClick}
          >
            US Contacts
          </button>
        </div>

        {/* Modal A */}
        {showModalA && (
          <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">All Contacts</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Content of Modal A */}
                  <p>Modal A Content</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={AllContactsClick}
                  >
                    All Contacts
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={USContactsClick}
                  >
                    US Contacts
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal B */}
        {showModalB && (
          <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">US Contacts</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Content of Modal B */}
                  <p>Modal B Content</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAllContactsClickB}
                  >
                    All Contacts
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUSContactsClickB}
                  >
                    US Contacts
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem2;
