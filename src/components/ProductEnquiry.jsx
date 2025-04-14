import React, {useState, useRef} from 'react';
// import emailjs from "emailjs/browser";

const ProductEnquiry = (product) => {
  const [firstName, setFirstName] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("Select Your Designation");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [enquiryDescription, setEnquiryDescription] = useState("");
  const form = useRef();

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (designation === "Select Your Designation") {
      newErrors.designation = "Please select your designation";
      isValid = false;
    }
    if (phoneNumber === "") {
      newErrors.phoneNumber = "Phone Number  is required";
      isValid = false;
    }
    if (email === "") {
      newErrors.email = "email  is required";
      isValid = false;
    }
    if (companyName === "") {
      newErrors.companyName = "Company Name   is required";
      isValid = false;
    }
    if (country === "") {
      newErrors.country = "Country  is required";
      isValid = false;
    }
    if (enquiryDescription === "") {
      newErrors.enquiryDescription = "Enquiry Description   is required";
      isValid = false;
    }
    if (product.product === "") {
      newErrors.productName = "Product Name  is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        firstName,
        lastName,
        designation,
        phoneNumber,
        email,
        companyName,
        country,
        productName: product.product,
        enquiryDescription,
      };
      sendEmail(formData);
      form.current.reset();
      setFirstName("");
      setLastName("");
      setDesignation("");
      setEmail("");
      setPhoneNumber("");
      setCompanyName("");
      setCountry("");
      setEnquiryDescription("");
      setErrors({});
    }
  };

  const sendEmail = (formData) => {
    const emailData = {
      to_name: "New Horizon Team",
      first_name: `${formData.firstName} ${formData.lastName}`,
      designation: formData.designation,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      companyName: formData.companyName,
      country: formData.country,
      productName: product.product.Product,
      message: formData.enquiryDescription,
    };

    emailjs
      .send(
        "service_nhylhmp", //service id
        "template_3q9ure8", //template id
        emailData,
        "l99rDhK_D3F96fib5" //public key
      )
      .then(
        (result) => {
          setStatusMessage("Mail sent successfully!"); // Update status message on success
        },
        (error) => {
          setStatusMessage("Mail failed to send. Please try again."); // Update status message on failure
        }
      );
    setTimeout(() => {
      setStatusMessage(null);
    }, 30000);
  };
  return (
    <section className="ProductEnquiryform p-3 p-md-5 rounded-4 mt-2 mt-md-5 ">
    <div className="row">
      <div className="col-md-6">
        <h3 className="h3 font-semibold">Have a question on this product?</h3>
        <p>
          <small className="font-gray">
            FILL THE FORM, YOU’LL BE CONTACTED SHORTLY
          </small>
        </p>
      </div>
      <div className="col-md-6">
        <p>
          Do not hesitate to contact our business representatives: they'll be
          happy to get in touch with you. Just fill in the following form.{" "}
        </p>
      </div>
    </div>
    {statusMessage && (
      <div
        className={`alert alert-success font-bold ${
          statusMessage.includes("failed") ? "error" : "success"
        }`}
      >
        {statusMessage}
      </div>
    )}
    <form className="pt-2 pt-md-4" onSubmit={handleSubmit} ref={form}>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3 form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Write your First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  firstName: null,
                }));
              }}
            />
            {errors.firstName && (
              <small className="text-danger">{errors.firstName}</small>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Write your Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  lastName: null,
                }));
              }}
            />
            {errors.lastName && (
              <small className="text-danger">{errors.lastName}</small>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 form-group">
            <label className="form-label">Designation</label>
            <select
              className="form-select"
              value={designation}
              onChange={(e) => {
                setDesignation(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  designation: null,
                }));
              }}
            >
              <option disabled>Select Your Designation</option>
              <option>Employee</option>
              <option>Manager</option>
              <option>Researcher</option>
            </select>
            {errors.designation && (
              <small className="text-danger">{errors.designation}</small>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  phoneNumber: null,
                }));
              }}
            />
            {errors.phoneNumber && (
              <small className="text-danger">{errors.phoneNumber}</small>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 form-group">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Valid Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  email: null,
                }));
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 form-group">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  companyName: null,
                }));
              }}
            />
            {errors.companyName && (
              <small className="text-danger">{errors.companyName}</small>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 form-group">
            <label className="form-label">Country Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  country: null,
                }));
              }}
            />
            {errors.country && (
              <small className="text-danger">{errors.country}</small>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 form-group">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={product.product.Product}
            />

            {errors.productName && (
              <small className="text-danger">{errors.productName}</small>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3 form-group">
            <label className="form-label">Describe your Enquiry</label>
            <textarea
              className="form-control"
              placeholder="Describe  Your Enquiry"
              value={enquiryDescription}
              onChange={(e) => {
                setEnquiryDescription(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  enquiryDescription: null,
                }));
              }}
            ></textarea>
            {errors.enquiryDescription && (
              <small className="text-danger">
                {errors.enquiryDescription}
              </small>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <button className="btn green-btn w-100">Submit</button>
        </div>
      </div>
    </form>
  </section>
  )
}

export default ProductEnquiry
