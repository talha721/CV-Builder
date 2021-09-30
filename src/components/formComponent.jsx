import {Button, Input, Label} from "reactstrap";
import { Control, LocalForm } from 'react-redux-form';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postData} from "../redux/Actions/cvActions";


export default function Form(){

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        projectTitle: '',
        projectDescription: '',
        projectStartDate: '',
        projectEndDate: '',
        degreeName: '',
        uniName: '',
        uniStartYear: '',
        uniEndYear: '',
        jobTitle: '',
        companyName: '',
        companyLocation: '',
        yearOfExperience: '',
        promotions: ''
    })

    const CVData = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch()

    const handleChange = values => {
        const {name, email, phone, city, address, projectTitle, projectDescription, projectStartDate,
            projectEndDate, degreeName, uniName, uniStartYear, uniEndYear, jobTitle, companyName, companyLocation,
            yearOfExperience, promotions, value} = values.target;
        setData({...data, [name]: value, [email]: value, [phone]: value, [city]: value, [address]: value,
            [projectTitle]: value, [projectDescription]: value, [projectStartDate]: value, [projectEndDate]: value,
            [degreeName]: value, [uniName]: value, [uniStartYear]: value, [uniEndYear]: value, [jobTitle]: value,
            [companyName]: value, [companyLocation]: value, [yearOfExperience]: value, [promotions]: value})
    }

    const handleSubmit = (values) => {
        dispatch(postData(values))
    }

    return(
        <>
            <section className="CV-Builder">
                <h1 className="title">Personal Information</h1>
                <LocalForm model='cvBuilder' className="contact-form row"
                           onSubmit={values => handleSubmit(values)}>
                    <div className="form-field col-lg-6">
                        <Label className="title-Color" htmlFor="name">Name</Label>
                        <Control.text model='.name' id="name" className="input-text js-input" type="text"
                                      onChange={handleChange} required/>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <Label className="title-Color" htmlFor="email">E-mail</Label>
                        <Control.text model='.email' id="email" className="input-text js-input" type="email"
                                      onChange={handleChange} required/>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <Label className="title-Color" htmlFor="phone">Contact Number</Label>
                        <Control.text model='.phone' id="phone" className="input-text js-input" type="text"
                                      onChange={handleChange} required/>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <Label className="title-Color" htmlFor="city">City</Label>
                        <Control.text model='.city' id="city" className="input-text js-input" type="text"
                                      onChange={handleChange} required/>
                    </div>
                    <div className="form-field col-lg-12">
                        <Label className="title-Color" htmlFor="address">Address</Label>
                        <Control.textarea model='.address' id="address" className="input-text js-input" type="text"
                                          onChange={handleChange} required/>
                    </div>
                    <br/><br/>
                    <h1 className="title">Projects Information</h1>
                    <div className="contact-form row">
                        <div className="form-field col-lg-12">
                            <Label className="title-Color" htmlFor="title">Project Title</Label>
                            <Control.text model='.projectTitle' id="tile" className="input-text js-input" type="text"
                                          onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-12">
                            <Label className="title-Color" htmlFor="description">Project Description</Label>
                            <Control.textarea model='.projectDescription' id="description" className="input-text js-input" type="text"
                                              onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <Label className="title-Color" htmlFor="startDate">Project Start Date</Label>
                            <Control.text model='.projectStartDate' id="startDate" className="input-text js-input" type="date"
                                          onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <Label className="title-Color" htmlFor="endDate">Project End Date</Label>
                            <Control.text model='.projectEndDate' id="endDate" className="input-text js-input" type="date"
                                          onChange={handleChange} required/>
                        </div>
                    </div>
                    <h1 className="title">Education Information</h1>
                    <div className="contact-form row">
                        <div className="form-field col-lg-12">
                            <Label className="title-Color" htmlFor="degreeName">Degree Name</Label>
                            <Control.text model='.degreeName' id="degreeName" className="input-text js-input" type="text"
                                          onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-12">
                            <Label className="title-Color" htmlFor="uniName">University Name</Label>
                            <Control.text model='.uniName' id="uniName" className="input-text js-input" type="text"
                                          onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <Label className="title-Color" htmlFor="startUniYear">University Start Year</Label>
                            <Control.text model='.uniStartYear' id="startUniYear" className="input-text js-input" type="number"
                                          onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <Label className="title-Color" htmlFor="endUniDate">University End Year</Label>
                            <Control.text model='.uniEndYear' id="endUniDate" className="input-text js-input" type="number"
                                          onChange={handleChange} required/>
                        </div>
                    </div>
                    <h1 className="title">Work Experience</h1>
                    <div className="contact-form row">
                        <div className="form-field col-lg-6 ">
                            <Label className="title-Color" htmlFor="jobTitle">Job Title</Label>
                            <Control.text model='.jobTitle' id="jobTitle" className="input-text js-input" type="text"
                                          onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-6">
                            <Label className="title-Color" htmlFor="companyName">Company Name</Label>
                            <Control.text model='.companyName' id="companyName" className="input-text js-input" type="text"
                                          onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-12">
                            <Label className="title-Color" htmlFor="companyLocation">Company Location</Label>
                            <Control.text model='.companyLocation' id="companyLocation" className="input-text js-input"
                                          onChange={handleChange} type="text" required/>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <Label className="title-Color" htmlFor="experience">Years of Experience</Label>
                            <Control.text model='.yearOfExperience' id="experience" className="input-text js-input" type="number"
                                          onChange={handleChange} required/>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <Label className="title-Color" htmlFor="promotions">Promotions</Label>
                            <Control.text model='.promotions' id="promotions" className="input-text js-input" type="number"
                                          onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="form-field col-lg-6">
                        <Button className="custom-btn"
                                type="submit"
                                value="Submit"
                                disabled={CVData.cv.isProcessing}
                        >{CVData.cv.isProcessing ? "Loading..." : "Submit"}</Button>
                    </div>
                </LocalForm>
            </section>
        </>
    )
}