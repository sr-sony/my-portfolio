import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
const SERVICE_ID = "service_ejtgseq";
const TEMPLATE_ID = "template_wizq89k";
const USER_ID = "0E0cP4RmJE_9cyfrE";


const ContactForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row lg:justify-between">
                    <img src="" alt='' className="max-w-sm rounded-full shadow-2xl" />
                    <div>
                        <h1 className='font-bold text-4xl my-4'>Contact Me</h1>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                label='Email'
                                name='user_email'
                                placeholder='Email…'
                                required
                                icon='mail'
                                iconPosition='left'
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Name'
                                name='user_name'
                                placeholder='Name…'
                                required
                                icon='user circle'
                                iconPosition='left'
                            />
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Message'
                                name='user_message'
                                placeholder='Message…'
                                required
                            />
                            <Button type='submit' color='green'>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default ContactForm;