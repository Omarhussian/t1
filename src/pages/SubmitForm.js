import React from 'react';
import { useFormik , Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/submitform.css'



const SubmitForm = () => {
    const formik = useFormik({ 
        initialValues: {
            name: '',
            email: '',
            mobile: '',
        },
        onSubmit : (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return ( 

        <form className="sub" onSubmit={formik.handleSubmit}>
        
        <div className="name">
        
            <TextField 
            label ="name" 
            value= {formik.values.name} 
            name="name"
             onChange={formik.handleChange} 
             />
        
        </div>
        <div className="email">
        
            <TextField 
            label ="email" 
            value= {formik.values.email} 
            name="email"
             onChange={formik.handleChange} 
             />
        
        </div>
        <div className="mobile">
        
            <TextField 
            label ="mobile" 
            value= {formik.values.mobile} 
            name="mobile"
             onChange={formik.handleChange} 
             />
        
        </div>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
        
        </form>

     );
}
 
export default SubmitForm;