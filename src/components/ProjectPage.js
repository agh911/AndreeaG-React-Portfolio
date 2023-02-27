import React, { useState } from 'react';

const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "black",
    zIndex: 999,
    width: "370px",
    height: "fit-content",
    padding: "30px 35px",
    borderRadius: "10px",
};

const Modal = ({ children, closeModal }) => (
    <div style={modalStyles}>
        {children}
    </div>
);

function ProjectPage(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState({});

    const openModal = project => {
        setIsOpen(true);
        setCurrentProject(project);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentProject({});
    };
    return (
        <div className="col-lg-3 col-md-6 com-sm-12 mb-4">
            <div className="card text-bg-dark" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <button className="btn btn-light" onClick={() => openModal(props)}>View details</button>
                </div>
            </div>
            {isOpen && (
                <Modal closeModal={closeModal}>
                    <div className='d-flex flex-column align-items-end'>
                        <i style={{ background: "none", color: "white", padding: "0 15px" }} className="fa-sharp fa-regular fa-x mb-3" onClick={() => setIsOpen(false)} />
                        <div className='d-flex flex-column align-items-start justify-content-center'>
                            <img style={{ width: "300px", marginBottom: "15px" }} src={currentProject.image} alt={currentProject.name} />
                            <h5 className='clash'>Description</h5>
                            <p>{currentProject.description}</p>
                            <h5 className='clash'>Tools</h5>
                            <p>{currentProject.tools}</p>
                        </div>
                        <div className='d-flex'>
                            <a href={currentProject.github} target="_blank" rel="noreferrer"><button className="btn btn-light"><i style={{ background: "none", color: "#16161a", padding: "0 5px 0 0 " }} className="fa-brands fa-github" />GitHub Repo</button></a>
                            <a href={currentProject.live} target="_blank" rel="noreferrer"><button className="btn btn-outline-light">Live Page</button></a>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default ProjectPage;