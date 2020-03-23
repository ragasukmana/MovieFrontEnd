import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

function AddProductionHouse(props) {
    return (
        <Modal size={props.size} open={props.open} onClose={props.closeAddModalProductionHouse}>
            <Modal.Header>Add New Production House</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Production House Name</label>
                        <input placeholder='Enter production house name'
                            onChange={(event) => props.handleAddProductionHouse(event.target.value)}
                        />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={props.closeAddModalProductionHouse}>Cancel</Button>
                <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content='Save Data'
                    onClick={(event) => props.handleSubmitAddProductionHouse(event)}
                />
            </Modal.Actions>
        </Modal>

    )
}
export default AddProductionHouse