/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  Select,
  Col,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Tables extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Users Details</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">User ID</th>
                      <th scope="col">Current Route</th>
                      <th scope="col">Status</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Username</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require('assets/img/theme/bootstrap.jpg')}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                             ID4567
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Berger Kubwa</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-green" />
                          Online
                        </Badge>
                      </td>
                      <td>
                        Kubwa
                      </td>
                      <td>
                      amadi1
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require('assets/img/theme/bootstrap.jpg')}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                             ID4567
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Berger Kubwa</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          offline
                        </Badge>
                      </td>
                      <td>
                        Kubwa
                      </td>
                      <td>
                      amadi1
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                {/* <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter> */}
              </Card>
            </div>
          </Row>
          <br/>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-white shadow">
                <CardHeader className="bg-gradient-info border-200">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0 text-white">Users Registration</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-phonenumber"
                            >
                              Phone Number
                            </label>
                            <Input
                              className="form-control"
                              id="input-phonenumber"
                              placeholder="Phone number"
                              type="tel"
                              border="3"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control"
                              id="input-email"
                              placeholder="user@example.com"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-state"
                            >
                              State of Residience
                            </label>
                            <Input
                              className="form-control"
                              id="input-state"
                              placeholder="State"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-gender"
                            >
                              Gender
                            </label>

                            <Input
                              type="select"
                              name="select"
                              id="input-gender"
                            >
                              <option>...select...</option>
                              <option>Male</option>
                              <option>Female</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
     
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Payment Info
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vehicle-manufacturer"
                            >
                             Payment Type
                            </label>
                            <Input
                              type="select"
                              name="select"
                              id="input-gender"
                            >
                               <option>...select...</option>
                              <option>Pay with Debit Card</option>
                              <option>Pay with Cash</option>
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col md="3">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vechile-model"
                            >
                              Debit Card  Number
                            </label>
                            <Input
                              className="form-control"
                              id="input-vechile-model"
                              placeholder="eg: 5399 XXXX XXXX XX45"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-license-plate"
                            >
                              Card Expiry Date
                            </label>
                            <Input
                              className="form-control"
                              id="input-license-plate"
                              placeholder="eg: 12/23"
                              type="text"
                              maxLength="5"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="3">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vechile-color"
                            >
                              CVV Number
                            </label>
                            <Input
                              className="form-control"
                              id="input-vechile-color"
                              placeholder="eg: 123"
                              type="number"
                              maxLength="3"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                     
                   
                     
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <Button color="primary" outline type="button">Submit</Button>
                  </Form>
                </CardBody>
                <CardFooter className="bg-light border-200"></CardFooter>
              </Card>
            </Col>
          </Row>
       
        </Container>
      </>
    );
  }
}

export default Tables;
