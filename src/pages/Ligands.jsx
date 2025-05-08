import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom';

const Ligands = () => {
    const pageTitle = "Ligands and Catalysts";
    const pageIntro = "Our Popular Products";
    const navigate = useNavigate();
  return (
    <div>
         <section className="subPage">  
            <div className="subPageHeader">
                <div className="container">
                    <div className="row pt-2 pt-md-5">
                        <div className="col-lg-8 col-md-10">
                        <h1 className="h1 font-bold">{pageTitle}</h1>
                        <p className="d-none d-md-block">{pageIntro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subPageMain">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb my-2">
                            <li className="breadcrumb-item">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {pageTitle}
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="container">
                    <div className="pageContainer">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-Ligands-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-Ligands"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-Ligands"
                                    aria-selected="true"
                                >
                                Ligands
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-Catalysts-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-Catalysts"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-Catalysts"
                                    aria-selected="false"
                                >
                                    Catalysts
                                </button>
                            </li>                              
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-Ligands"
                                role="tabpanel"
                                aria-labelledby="pills-Ligands-tab"
                            >
                                {/* table responsive starts here */}
                                <div className="table-responsive">
                                    <p>Ligands</p>
                                </div>
                                {/* table resposive ends*/}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-Catalysts"
                                role="tabpanel"
                                aria-labelledby="pills-Catalysts-tab"
                                >
                                 {/* table responsive starts here */}
                                 <div className="table-responsive">
                                    <p>Catalysts</p>
                                </div>
                                {/* table resposive ends*/}                            
                            </div>                              
                        </div>
                    </div>
                </div>
            </div>
         </section>
      
    </div>
  )
}

export default Ligands
