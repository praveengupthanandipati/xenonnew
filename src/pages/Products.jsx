import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import phytochemicals from "../data/Phytochemicals_data";
import phytochemicalsPdf from "../assets/files/xenonbiosciences-future-products.pdf";

const Products = () => {
    const pageTitle = "Phytochemicals Reference Standards";
    const pageIntro = "Our Popular Products";
    const navigate = useNavigate();

    //on click on product redirecting to poroduct detail  based on ID ID
  const handleTabClick = (id, type) => {
    localStorage.setItem("id", id);
    // scrollToTop(0, 0);
    navigate(`/ProductDetail?q=${id}&type=${type}`);
  };

  const inStockItems = phytochemicals.filter((item) => item.type === "inStock");
  const underProcessing = phytochemicals.filter(
    (item) => item.type === "underProcessing"
  );
  return (
    <div>
      <section className="subPage">
        <div className="subPageHeader">
          <div className="container">
            <div className="row pt-2 pt-md-5">
              <div className="col-lg-6 col-md-10">
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
                    id="pills-Phytochemical-Reference-Standards-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Phytochemical-Reference-Standards"
                    type="button"
                    role="tab"
                    aria-controls="pills-Phytochemical-Reference-Standards"
                    aria-selected="true"
                  >
                    In Stock
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Lead-Phytochemicals-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Lead-Phytochemicals"
                    type="button"
                    role="tab"
                    aria-controls="pills-Lead-Phytochemicals"
                    aria-selected="false"
                  >
                    Under Processing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Synthetic-analogs-of-Lead-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Synthetic-analogs-of-Lead"
                    type="button"
                    role="tab"
                    aria-controls="pills-Synthetic-analogs-of-Lead"
                    aria-selected="false"
                  >
                    Future Products
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-Phytochemical-Reference-Standards"
                  role="tabpanel"
                  aria-labelledby="pills-Phytochemical-Reference-Standards-tab"
                >
                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Name of the Phytochemical</th>
                          <th scope="col">Botanical Source</th>
                          <th scope="col">CAS Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inStockItems.map((item, index) => (
                          <tr key={index}>
                            <td width="40%">
                              <a
                                href=""
                                onClick={() => handleTabClick(item.id, "all")}
                              >
                                {item.Product}
                              </a>
                            </td>
                            <td width="30%">{item.BotanicalSource}</td>
                            <td width="30%">{item.CASNumber}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* table resposive ends*/}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Lead-Phytochemicals"
                  role="tabpanel"
                  aria-labelledby="pills-Lead-Phytochemicals-tab"
                >
                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Chemical Name</th>
                          <th scope="col">Botanical Source</th>
                          <th scope="col">CAS Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {underProcessing.map((item, index) => (
                          <tr key={index}>
                            <td width="40%">
                              <a
                                href=""
                                onClick={() => handleTabClick(item.id, "lead")}
                              >
                                {item.Product}
                              </a>
                            </td>
                            <td width="30%">{item.BotanicalSource}</td>
                            <td width="30%">{item.CASNumber}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* table resposive ends*/}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Synthetic-analogs-of-Lead"
                  role="tabpanel"
                  aria-labelledby="pills-Synthetic-analogs-of-Lead-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <NavLink
                        className="green-btn"
                        to={phytochemicalsPdf}
                        target="_blank"
                      >
                        Download List of Phytochemicals with structure
                        activities
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
