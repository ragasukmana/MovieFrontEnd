import React from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'

function DeleteProductionHouse(props) {
    return (
        <Modal size={props.size} open={props.open} onClose={props.closeDeleteModalProductionHouse}>
            <Modal.Header textAlign='center'>Are you sure ?</Modal.Header>
            <Modal.Content>
                <Header as='h3' textAlign='center'>You are about delete a production house,
                this cannot be undone</Header>
            </Modal.Content>
            <Modal.Actions>
                <Button negative size='tiny' floated='left'
                    onClick={props.closeDeleteModalProductionHouse}>Cancel</Button>
                <Button
                    size='tiny'
                    positive
                    content='Yes, Delete it'
                    onClick={(event) => props.handleSubmitDeleteProductionHouse(event, props.data.id)}
                />

            </Modal.Actions>
        </Modal>
    )
}
export default DeleteProductionHouse