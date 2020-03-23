import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

function EditMovieList(props) {
    return (
        <Modal size={props.size} open={props.open} onClose={props.close}>
            <Modal.Header>Edit Movie</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Movie Name</label>
                        <input placeholder='Enter movie name'
                            onChange={(event) => props.handleEditMovieName(event.target.value)}
                            defaultValue={props.data.movie}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Movie Genre</label>
                        <input placeholder='Enter movie genre'
                            onChange={(event) => props.handleEditMovieGenre(event.target.value)}
                            defaultValue={props.data.genre}
                        />
                    </Form.Field>
                    <Form.Select
                        fluid
                        label='Production House'
                        placeholder='Production House'
                        options={props.selectOptions}
                        defaultValue={props.selected}
                        onChange={(event, { value }) => props.handleEditProductionHouseId(value)}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button negative floated='left' size='tiny'
                    onClick={(event) => props.deleteMovie(event, props.data)}>Delete Data</Button>
                <Button color='orange' size='tiny'
                    onClick={props.close}>Cancel</Button>
                <Button
                    positive
                    size='tiny'
                    content='Save Data'
                    onClick={(event) => props.handleSubmitEditMovie(event, props.data.id)}
                />
            </Modal.Actions>
        </Modal>

    )
}
export default EditMovieList