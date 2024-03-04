import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Formik, Form as FormikForm } from "formik";
import Row from "react-bootstrap/Row";

function FormComponent() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        aadharNumber: 0,
        panNumber: "",
        state: "",
        city: "",
        zipCode: 0,
        email: "",
        phone: 0,
      }}
      validate={(values) => {
        const errors = {};
        if (values.firstName.length != 6) {
          errors.firstName = "First Name length should be 6";
        } else if (!/^[A-Z]+$/i.test(values.firstName)) {
          errors.firstName = "First Name must be string";
        } else if (!values.middleName) {
          errors.middleName = "Required";
        } else if (!/^[A-Z]+$/i.test(values.middleName)) {
          errors.middleName = "Middle Name must be string";
        } else if (!values.lastName) {
          errors.lastName = "Required";
        } else if (!/^[A-Z]+$/i.test(values.lastName)) {
          errors.lastName = "Middle Name must be string";
        } else if (values.aadharNumber.toString().length != 12) {
          errors.aadharNumber = "Aadhar number must be 12 digits";
        } else if (!/^[0-9]+$/i.test(values.aadharNumber)) {
          errors.aadharNumber = "Aadhar Number must be Number";
        } else if (values.panNumber.length != 10) {
          errors.panNumber = "Pan number must be 10 digits";
        } else if (values.zipCode.toString().length != 6) {
          errors.zipCode = "Zip code must be 6 digits";
        } else if (!/^[0-9]+$/i.test(values.zipCode)) {
          errors.zipCode = "Zip code must be Number";
        } else if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleChange, handleBlur, errors, dirty }) => (
        <FormikForm>
          <Row className="mb-2">
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                placeholder="First name"
                controlId="firstName"
                name="firstName"
              />
              {dirty && !errors.firstName && <p>Looks good!</p>}
              {errors.firstName != null && (
                <p type="invalid">{errors.firstName}</p>
              )}
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="middleName">
              <Form.Label>Middle name</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                placeholder="Middle name"
                controlId="middleName"
                name="middleName"
              />
              {dirty && !errors.middleName && <p>Looks good!</p>}
              {errors.middleName != null && (
                <p type="invalid">{errors.middleName}</p>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                placeholder="Last name"
                controlId="lastName"
                name="lastName"
              />
              {dirty && !errors.lastName && <p>Looks good!</p>}
              {errors.lastName != null && (
                <p type="invalid">{errors.lastName}</p>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group as={Col} md="4" controlId="aadharNumber">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="number"
                placeholder="Aadhar number"
                controlId="aadharNumber"
                name="aadharNumber"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="panNumber">
              <Form.Label>Pan Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Pan Number"
                aria-describedby="inputGroupPrepend"
                required
                controlId="panNumber"
                name="panNumber"
              />
              <Form.Control.Feedback type="invalid">
                Enter Pan Number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="4" controlId="state">
              <Form.Label>Enter State</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter State"
                aria-describedby="inputGroupPrepend"
                required
                controlId="state"
                name="state"
              />
              <Form.Control.Feedback type="invalid">
                Enter State or Province.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="city">
              <Form.Label>Enter City</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter city"
                aria-describedby="inputGroupPrepend"
                required
                controlId="city"
                name="city"
              />
              <Form.Control.Feedback type="invalid">
                Enter City.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="zipCode">
              <Form.Label>Enter Zip Code</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter Zip Code"
                aria-describedby="inputGroupPrepend"
                required
                controlId="zipCode"
                name="zipCode"
              />
              <Form.Control.Feedback type="invalid">
                Enter City.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="4" controlId="email">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter Email"
                aria-describedby="inputGroupPrepend"
                required
                controlId="email"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Enter Email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="phone">
              <Form.Label>Enter phone</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                placeholder="Enter phone"
                aria-describedby="inputGroupPrepend"
                required
                controlId="phone"
                name="phone"
              />
              <Form.Control.Feedback type="invalid">
                Enter Email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              onChange={handleChange}
              onBlur={handleBlur}
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </FormikForm>
      )}
    </Formik>
  );
}

export default FormComponent;
