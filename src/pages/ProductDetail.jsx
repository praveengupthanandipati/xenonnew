import React, { useEffect, useState, memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import phytochemicals from "../data/Phytochemicals_data";
import ProductEnquiry from "../components/ProductEnquiry";
import noimage from "../assets/images/noimage.jpg";

const ProductDetail = memo(() => {
  //to get id from url product id
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("q");
  const type = queryParams.get("type");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const localId = localStorage.getItem("id");
  const getData = () => {
    setLoading(true);
    const foundProduct = phytochemicals.find(
      (item) => item.id.toString() === id
    );

    if (foundProduct && foundProduct.id.toString() !== product?.id) {
      setProduct(foundProduct);
      console.log(foundProduct);
    }
    setLoading(false);
  };

  //if product loading is true calling product id
  if (loading) {
    console.log("Loading...");
    getData();

    return <div>Loading...</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
  <div>
  <section className="subPage">
    <div className="subPageHeader">
      <div className="container">
        <div className="row pt-2 pt-md-5">
          <div className="col-lg-6 col-md-10">
            <h1 className="h1 font-bold">{product.Product}</h1>
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
            <li className="breadcrumb-item" aria-current="page">
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.Product}
            </li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <div className="pageContainer">
          <div className="row">
            <div className="col-md-3">
              <figure className="border p-3 rounded-3 text-center sticky-top">
                {/* <img src={product.Image} className="img-fluid" /> */}
                {product.Image ? (
                  <img
                    src={product.Image}
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
              </figure>
            </div>
            <div className="col-md-9">
              {/* Tab Starts */}
              <ul
                className="nav nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-Description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Description"
                    type="button"
                    role="tab"
                    aria-controls="pills-Description"
                    aria-selected="true"
                  >
                    Product Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-SpectrualData-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-SpectrualData"
                    type="button"
                    role="tab"
                    aria-controls="pills-SpectrualData"
                    aria-selected="false"
                  >
                    COA & Spectrual data
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-Description"
                  role="tabpanel"
                  aria-labelledby="pills-Description-tab"
                >
                  <div className="row pt-2">
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Botanical Source
                        </p>
                        <h6 className="h6">
                          {product?.BotanicalSource || "--"}
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          IUPAC Name
                        </p>
                        <h6 className="h6">{product?.IUPACName || "--"}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Synonyms
                        </p>
                        <h6 className="h6">{product?.Synonyms || "--"}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          CAS Number
                        </p>
                        <h6 className="h6">
                          <strong>{product?.CASNumber || "--"}</strong>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Molecular Formula
                        </p>
                        <h6 className="h6">
                          {product?.MolecularFormula || "--"}
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Molecular weight
                        </p>
                        <h6 className="h6">
                          {product?.MolecularWeight || "--"}
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Appearance
                        </p>
                        <h6 className="h6">
                          {product?.Appearance || "--"}
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Purity
                        </p>
                        <h6 className="h6">{product?.Purity || "--"}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          HRMS(ESI)
                        </p>
                        <h6 className="h6">{product?.HRMS_ESI || "--"}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Specific Rotation [a]D 20
                        </p>
                        <h6 className="h6">
                          {product?.SpecificRotation_aD20 || "--"}
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          InChI Key
                        </p>
                        <h6 className="h6">{product?.InChIKey || "--"}</h6>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          SMILES
                        </p>
                        <h6 className="h6">{product?.SMILES || "--"}</h6>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          InChI Code
                        </p>
                        <h6 className="h6">{product?.InChICode || "--"}</h6>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          PubChem CID
                        </p>
                        <h6 className="h6">
                          {product?.PubChemCID || "--"}
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          MDL Number
                        </p>
                        <h6 className="h6">{product?.MDLNumber || "-"}</h6>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Inventory Status
                        </p>
                        <h6 className="h6">
                          <strong>
                            {product?.InventoryStatus || "--"}
                          </strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* Description ends */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-SpectrualData"
                  role="tabpanel"
                  aria-labelledby="pills-SpectrualData-tab"
                >
                  CoA and Spectral data available upon request                 
                </div>
              </div>
            </div>
          </div>
          <ProductEnquiry product={product} />
        </div>
      </div>
    </div>
  </section>
</div>
  );
});

export default ProductDetail;
