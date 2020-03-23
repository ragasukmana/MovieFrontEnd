import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

function AddMovieList(props) {
    return (
        <Modal size={props.size} open={props.open} onClose={props.close}>
            <Modal.Header>Add New Movie</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Movie Name</label>
                        <input placeholder='Enter movie name'
                            onChange={(event) => props.handleInputMovieName(event.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Movie Genre</label>
                        <input placeholder='Enter movie genre'
                            onChange={(event) => props.handleInputMovieGenre(event.target.value)}
                        />
                    </Form.Field>
                    <Form.Select
                        fluid
                        label='Production House'
                        placeholder='Production House'
                        options={props.selectOptions}
                        onChange={(event, { value }) => props.handleInputProductionHouse(value)}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={props.close}>Cancel</Button>
                <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content='Save Data'
                    onClick={(event) => props.handleSubmitAddMovie(event)}
                />
            </Modal.Actions>
        </Modal>

    )
}
export default AddMovieList