import React, {useState} from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import ligandsData from "../data/Ligands";
import catalystsData from "../data/Catalysts";
import noimage from "../assets/images/noimage.jpg";

const Ligands = () => {
  const pageTitle = "Ligands and Catalysts";
  const pageIntro = "Our Popular Products";
  const navigate = useNavigate();

  //state for pagination
  const [currentPage, setCurrentPage]=useState(1);
  const itemsPerPage=10;

  // Pagination logic for ligands
    const indexOfLastLigand = currentPage * itemsPerPage;
    const indexOfFirstLigand = indexOfLastLigand - itemsPerPage;
    const currentLigands = ligandsData
        .sort((a, b) => a.Product.localeCompare(b.Product))
        .slice(indexOfFirstLigand, indexOfLastLigand);
    const totalLigandPages = Math.ceil(ligandsData.length / itemsPerPage);

    // Pagination logic for catalysts
    const currentCatalysts = catalystsData
        .sort((a, b) => a.product.localeCompare(b.product))
        .slice(indexOfFirstLigand, indexOfLastLigand);
    const totalCatalystPages = Math.ceil(catalystsData.length / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0); // Scroll to top when page changes
    };

     // Pagination component
    const Pagination = ({ totalPages }) => {
        const pageNumbers = [];
        
        // Show limited page numbers with ellipsis
        const maxVisiblePages = 5;
        let startPage, endPage;
        
        if (totalPages <= maxVisiblePages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
            const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;
            
            if (currentPage <= maxPagesBeforeCurrent) {
                startPage = 1;
                endPage = maxVisiblePages;
            } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
                startPage = totalPages - maxVisiblePages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesBeforeCurrent;
                endPage = currentPage + maxPagesAfterCurrent;
            }
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

          return (
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button 
                            className="page-link" 
                            onClick={() => paginate(1)}
                            disabled={currentPage === 1}
                        >
                            First
                        </button>
                    </li>
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button 
                            className="page-link" 
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                    </li>
                    
                    {startPage > 1 && (
                        <li className="page-item disabled">
                            <span className="page-link">...</span>
                        </li>
                    )}
                    
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                    
                    {endPage < totalPages && (
                        <li className="page-item disabled">
                            <span className="page-link">...</span>
                        </li>
                    )}
                    
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button 
                            className="page-link" 
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </li>
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button 
                            className="page-link" 
                            onClick={() => paginate(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            Last
                        </button>
                    </li>
                </ul>
            </nav>
        );
    };

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
                  {/* ligends starts here */}

                  {currentLigands
                    .sort((a, b) => a.Product.localeCompare(b.Product))
                    .map((ligand) => (
                      <div className="row pb-3" key={ligand.id}>
                        <div className="col-md-2">
                          {ligand.Image ? (
                            <img
                              src={ligand.Image}
                              className="img-fluid"
                              alt="Product"
                            />
                          ) : (
                            <img
                              src={noimage}
                              className="img-fluid"
                              alt="No Image Found"
                            />
                          )}
                        </div>
                        <div className="col-md-10">
                          <h3 className="h5 font-semibold pb-3 pt-2 pt-md-0">
                            {ligand.Product}
                          </h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  IUPAC Name
                                </p>
                                <h6 className="h6">
                                  {ligand?.IUPACName || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  CAS Number:
                                </p>
                                <h6 className="h6">
                                  {ligand?.CASNumber || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Molecular Formula:
                                </p>
                                <h6 className="h6">
                                  {ligand?.MolecularFormula || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Molecular Weight:
                                </p>
                                <h6 className="h6">
                                  {ligand?.MolecularWeight || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Purity:
                                </p>
                                <h6 className="h6">{ligand?.Purity || "--"}</h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Specific Rotation:
                                </p>
                                <h6 className="h6">
                                  {ligand?.SpecificRotation_aD20 || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Melting Point:
                                </p>
                                <h6 className="h6">
                                  {ligand?.MeltingPoint || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Inventory Status:
                                </p>
                                <h6 className="h6">
                                  {ligand?.InventoryStatus || "--"}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Ligands pagination */}
                    <Pagination totalPages={totalLigandPages} />
                  {/* ligenes ends*/}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Catalysts"
                  role="tabpanel"
                  aria-labelledby="pills-Catalysts-tab"
                >
                  {/* Catalysts starts here */}
                  {currentCatalysts
                    .sort((a, b) => a.product.localeCompare(b.product))
                    .map((catalystItem) => (
                      <div className="row pb-3" key={catalystItem.id}>
                        <div className="col-md-2">
                          {catalystItem.Image ? (
                            <img
                              src={catalystItem.Image}
                              className="img-fluid"
                              alt="Product"
                            />
                          ) : (
                            <img
                              src={noimage}
                              className="img-fluid"
                              alt="No Image Found"
                            />
                          )}
                        </div>
                        <div className="col-md-10">
                          <h3 className="h5 font-semibold pb-3 pt-2 pt-md-0">
                            {catalystItem.product}
                          </h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  IUPAC Name
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.iupacName || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  CAS Number:
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.casNumber || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Molecular Formula:
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.molecularFormula || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Molecular Weight:
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.molecularWeight || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Appearance:
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.appearance || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Purity:
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.purity || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Specific Rotation:
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.specificRotation || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Melting Point:
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.meltingPoint || "--"}
                                </h6>
                              </div>
                            </div>

                            <div className="col-md-3 col-6">
                              <div className="product-desc-item">
                                <p className="text-uppercase font-bold position-relative">
                                  Inventory Status:
                                </p>
                                <h6 className="h6">
                                  {catalystItem?.inventoryStatus || "--"}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                     {/* Catalysts pagination */}
                    <Pagination totalPages={totalCatalystPages} />
                  {/* Catalysts ends*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ligands;
