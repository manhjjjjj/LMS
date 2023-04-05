import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FromInput() {
    return (
        <>
            <Form className="d-flex">
                <Button variant="outline-success"><i class="fa-solid fa-magnifying-glass"></i></Button>
                <Form.Control
                    type="Search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
            </Form>
        </>
    )
}
