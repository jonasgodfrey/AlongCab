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
import React from 'react'
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard'
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
} from 'reactstrap'
// core components
import Header from 'components/Headers/Header.js'

class Icons extends React.Component {
  state = {}
  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Drivers Details</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">driver ID</th>
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
              </Card>
            </div>
          </Row>
          <br />
          <br />
          <br />

          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-white shadow">
                <CardHeader className="bg-gradient-info border-200">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0 text-white">Drivers Registration</h3>
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
                      Vechicular info
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vehicle-manufacturer"
                            >
                              Vehicle Manufacturer
                            </label>
                            <Input
                              className="form-control"
                              id="input-vehicle-manufacturer"
                              placeholder="eg: Toyota"
                              type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vechile-model"
                            >
                              Vehicle Model
                            </label>
                            <Input
                              className="form-control"
                              id="input-vechile-model"
                              placeholder="eg: Toyota camry"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-license-plate"
                            >
                              License plate
                            </label>
                            <Input
                              className="form-control"
                              id="input-license-plate"
                              placeholder="eg: RbC-227-EF"
                              type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vechile-color"
                            >
                              Vehicle color
                            </label>
                            <Input
                              className="form-control"
                              id="input-vechile-color"
                              placeholder="eg: Gray"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                     
                    <h6 className="heading-small text-muted mb-4">
                      Payment Info
                    </h6>
                    <Row>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vehicle-manufacturer"
                            >
                              Account Number
                            </label>
                            <Input
                              className="form-control"
                              id="input-vehicle-manufacturer"
                              placeholder="eg: 0121516023"
                              type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vechile-model"
                            >
                             Account Name
                            </label>
                            <Input
                              className="form-control"
                              id="input-vechile-model"
                              placeholder="eg: John Wick"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-vechile-model"
                            >
                             Bank Name
                            </label>
                            <Input
                              className="form-control"
                              id="input-vechile-model"
                              placeholder="eg: GTB, FBN"
                              type="text"
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
    )
  }
}

export default Icons
