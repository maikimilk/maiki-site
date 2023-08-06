import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // フォームの送信処理を追加
        console.log('Form data submitted:',formData);

            // フォームデータをサーバーサイドに送信
        const requestOptions = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        };

            fetch('/send-email', requestOptions)
                .then((response) => {
                    if (response.ok) {
                        console.log('Form data submitted successfully');
                    } else {
                        console.log('Failed to submit form data');
                    }
                })
                .catch((error) => {
                    console.error('Error submitting form data:', error);
                });
        };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </FormControl>
            <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    resize="vertical"
                    rows={4}
                    required
                />
            </FormControl>
            <Button type="submit" variant="solid" colorScheme="blue">
                Submit
            </Button>
        </form>
    );
};

export default ContactForm;
