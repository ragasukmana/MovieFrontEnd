import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

function EditProductionHouse(props) {
    return (
        <Modal size={props.size} open={props.open} onClose={props.closeEditModalProductionHouse}>
            <Modal.Header>Add New Production House</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Production House Name</label>
                        <input placeholder='Enter production house name'
                            defaultValue={props.data.name}
                            onChange={(event) => props.handleEditProductionHouse(event.target.value)}
                        />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button negative floated='left' size='tiny'
                    onClick={(event) => props.deleteProductionHouse(event, props.data)}>Delete Data</Button>
                <Button color='orange' size='tiny'
                    onClick={props.closeEditModalProductionHouse}>Cancel</Button>
                <Button
                    size='tiny'
                    positive
                    content='Save Data'
                    onClick={(event) => props.handleSubmitEditProductionHouse(event, props.data.id)}
                />

            </Modal.Actions>
        </Modal>

    )
}
export default EditProductionHouse