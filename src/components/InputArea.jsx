import { useState } from "react";
import Button from "./Button";

const InputArea = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  // Form Validation
  const validateFormInputs = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.fName.trim()) {
      newErrors.fName = "First name is required!";
      isValid = false;
    }

    if (!formData.lName.trim()) {
      newErrors.lName = "Last name is required!";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required!";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid!";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxQZL0GnkMeMa0er8rKp2poteVAtB5R04uHpkX-wmmEojj19vbcUz4dvFaNvmzLnZMl9A/exec";
    const form = document.forms["submit-to-google-sheet"];

    if (validateFormInputs()) {
      // Submitting form to database.
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(() => {
          setSubmitMessage("Form submitted successfully!");

          setTimeout(() => {
            setSubmitMessage("");
          }, 5000);
        })
        .catch((error) => console.error("Error!", error.message));

      setFormData({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="mt-7 space-y-3">
      <div className="flex flex-col items-center gap-3 md:flex-row">
        <div className="w-full">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="First name"
            name="fName"
            value={formData.fName}
            className={`${errors.fName && "animate-shakeAnimation border-red-500"}`}
          />
          <p className="pl-2 text-xs text-secondaryColor">{errors.fName}</p>
        </div>
        <div className="w-full">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Last name"
            name="lName"
            value={formData.lName}
            className={`${errors.lName && "animate-shakeAnimation border-red-500"}`}
          />
          <p className="pl-2 text-xs text-secondaryColor">{errors.lName}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 md:flex-row">
        <div className="w-full">
          <input
            onChange={handleInputChange}
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            className={`${errors.email && "animate-shakeAnimation border-red-500"}`}
          />
          <p className="pl-2 text-xs text-secondaryColor">{errors.email}</p>
        </div>
        <div className="w-full">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Phone number"
            name="phone"
            value={formData.phone}
            className={`${errors.phone && "animate-shakeAnimation border-red-500"}`}
          />
          <p className="pl-2 text-xs text-secondaryColor">{errors.phone}</p>
        </div>
      </div>

      <div>
        <div className="w-full">
          <textarea
            onChange={handleInputChange}
            name="message"
            rows={5}
            placeholder="Message"
            value={formData.message}
            className={`${errors.message && "animate-shakeAnimation border-red-500"}`}
          ></textarea>
          <p className="pl-2 text-xs text-secondaryColor">{errors.message}</p>
        </div>

        <div className="mt-8">
          <Button label="Send Message" onFormSubmit={handleSubmit} />
        </div>

        <span className="mt-3 text-xs text-primaryColorLight">
          {submitMessage}
        </span>
      </div>
    </div>
  );
};

export default InputArea;
