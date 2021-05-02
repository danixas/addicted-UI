import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addNewBet, updateBet } from "../../../api";

const BetForm = ({ betData, onBetsChange }) => {
    console.log(betData)
    const [bet, setBet] = useState(betData ? betData : {
       title: "",
       description: "",
       dateStart: null,
       dateEnd: null,
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setBet({...bet, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let result = null;
        if (betData) {
            result = await updateBet(bet.id, bet);
        } else {
            result = await addNewBet(bet);
        }
        onBetsChange(result.data);
    };

    return (
        <Form onSubmit={onSubmit}>
        <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
                name="title"
                onChange={onChange}
                value={bet.title}
                required
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
                type="textarea"
                name="description"
                onChange={onChange}
                value={bet.description}
                required
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Date start</Form.Label>
            <Form.Control
                type="date"
                name="dateStart"
                onChange={onChange}
                value={bet.dateStart}
                required
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Date end</Form.Label>
            <Form.Control
                type="date"
                name="dateEnd"
                onChange={onChange}
                value={bet.dateEnd}
                required
            />
        </Form.Group>
        <Button variant="primary" type="submit" >
                { betData ? "Update" : "Add" }
        </Button>
    </Form>
    )
}

export default BetForm;