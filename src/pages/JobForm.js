import React from 'react';
import Form from '../components/Forms/Reusable/Form';
import template from '../templates/forms/jobTemplate.json';

function JobForm(props) {

    // let template= {
    //     title: 'Job Application Form',
    //     fields: [
    //         {
    //             title: 'First Name',
    //             type: 'text',
    //             name: 'firstname',
    //             validationProps: {
    //                 required: 'First Name is mandatory'
    //             }
    //         },
    //         {
    //             title: 'Second Name',
    //             type: 'text',
    //             name: 'secondname',
    //             validationProps: {
    //                 required: 'Second Name is mandatory'
    //             }
    //         },
    //         {
    //             title: 'Email',
    //             type: 'email',
    //             name: 'email'
    //         },
    //         {
    //             title: 'Include Portfolio',
    //             type: 'checkbox',
    //             name: 'include_portfolio'
    //         },
    //         {
    //             title: 'Portfolio Link',
    //             type: 'url',
    //             name: 'portfolio_link',
    //             dynamic: {
    //                 field: 'include_portfolio',
    //                 value: true
    //             }
    //         }
    //     ]
    // }

    return (
        // <Form
        //     template={template}
        //     watchFields={['firstname', 'include_portfolio']}
        //     validate={validate}
        //     onSubmit={onSubmit}
        // />
        <Form
            template={template.sections[0]}
            watchFields={['firstname']}
            validate={validate}
            onSubmit={onSubmit}
        />
    );
}


function onSubmit(values) {
    console.log(values);
}

function validate(watchValues, errorMethods) {
    let { errors, setError, clearErrors } = errorMethods;

    // Firstname validation
    let regex=/admin/i    //admin | Admin  | ADMIN | AdMin
    console.log("firstname-->",watchValues['firstname'])
    // if(watchValues['firstname'] === 'Admin'){
    if(watchValues['firstname']?.match(regex)){
        if(!errors['firstname']){
            console.log("entra-->", errors)
            setError('firstname', {
                type: 'manual',
                message: 'You cannot use this first name',
                shouldFocus: true
            })
        }
    }else{
        if(errors['firstname'] && errors['firstname']['type'] === 'manual'){
            console.log("errors-->",errors)
            clearErrors('firstname');
        }
    }
}

export default JobForm;