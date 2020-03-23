import React from 'react'
import { withRouter } from 'react-router-dom'
import {
    Grid,
    Header,
    Button,
    Icon,
    Card,
    GridColumn
} from 'semantic-ui-react'
import axios from 'axios'
import AddProductionHouse from '../components/AddProductionHouse'
import EditProductionHouse from '../components/EditProductionHouse'
import DeleteProductionHouse from '../components/DeleteProductionHouse'
import { SemanticToastContainer } from 'react-semantic-toasts'
import { toasting } from '../components/Toast'
import AddMovieList from '../components/AddMovieList'
import EditMovieList from '../components/EditMovieList'
import DeleteMovileList from '../components/DeleteMovieList'

class Home extends React.Component {
    state = {
        dataProductionHouse: [],
        dataMovieList: [],
        openAddProductionHouse: false,
        openEditProductionHouse: false,
        openDeleteProductionHouse: false,
        fillDataProductionHouse: {}, // For filled data production House
        openAddMovie: false,
        openEditMovie: false,
        openDeleteMovie: false,
        fillDataMovie: {} // For filled list data movie
    }
    componentDidMount() {
        this.getProductionHouse()
        this.getMovieList()
    }

    // Modals function
    closeAddModalProductionHouse = () => this.setState({ openAddProductionHouse: false })
    closeEditModalProductionHouse = () => this.setState({ openEditProductionHouse: false })
    closeDeleteModalProductionHouse = () => this.setState({ openDeleteProductionHouse: false })
    closeAddMovie = () => this.setState({ openAddMovie: false })
    closeEditMovie = () => this.setState({ openEditMovie: false })
    closeDeleteMovie = () => this.setState({ openDeleteMovie: false })


    getMovieList = () => {
        axios.get(`http://127.0.0.1:3001/movies`)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ dataMovieList: res.data.data })
                }
            })
    }

    getProductionHouse = () => {
        axios.get(`http://127.0.0.1:3001/productionHouse`)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ dataProductionHouse: res.data.data })
                }
            })
    }
    handleOpenModalProductionHouse = () => {
        this.setState({
            openAddProductionHouse: true
        })
    }
    handleAddProductionHouse = (value) => {
        this.setState({
            name: value
        })
    }
    handleSubmitAddProductionHouse = (event) => {
        event.preventDefault()
        if (!this.state.name) {
            toasting('Cannot Submit', 'Name production house cannot empty !', 'warning')
        } else {
            const body = {
                name: this.state.name
            }
            axios.post(`http://127.0.0.1:3001/productionHouse`, body)
                .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            openAddProductionHouse: false,
                            name: ''
                        })
                        this.getProductionHouse()
                        toasting('Success', 'Add Production House Success')
                    }
                })
                .catch(() => {
                    toasting('Error', 'Cannot Submit', 'error')
                })
        }
    }

    handleDataProductionHouse = (event, data) => {
        event.preventDefault()
        this.setState({
            fillDataProductionHouse: data,
            openEditProductionHouse: true
        })
    }

    handleEditProductionHouse = (value) => {
        this.setState({
            fillDataProductionHouse: {
                ...this.state.fillDataProductionHouse,
                name: value
            }
        })
    }

    handleSubmitEditProductionHouse = (event, id) => {
        event.preventDefault()
        if (!this.state.fillDataProductionHouse.name) {
            toasting('Cannot Submit', 'Name production house cannot empty !', 'warning')
        } else {
            const body = {
                name: this.state.fillDataProductionHouse.name
            }
            axios.put(`http://127.0.0.1:3001/productionHouse/${id}`, body)
                .then(res => {
                    if (res.status === 200) {
                        toasting('Success', 'Change Production House Success')
                        this.setState({
                            openEditProductionHouse: false,
                            name: this.state.fillDataProductionHouse.name
                        })
                        this.getProductionHouse()
                    }
                })
                .catch(() => {
                    toasting('Error', 'Cannot Submit', 'error')
                })
        }
    }

    handleOpenModalDeleteProductionHouse = (event, data) => {
        event.preventDefault()
        this.setState({
            fillDataProductionHouse: data,
            openDeleteProductionHouse: true
        })
    }

    handleSubmitDeleteProductionHouse = (event, id) => {
        event.preventDefault()
        axios.delete(`http://127.0.0.1:3001/productionHouse/${id}`)
            .then(res => {
                if (res.status === 200) {
                    toasting('Success', 'Delete Production House Success')
                    this.setState({
                        openDeleteProductionHouse: false,
                        openEditProductionHouse: false
                    })
                    this.getProductionHouse()
                }
            })
            .catch(() => {
                toasting('Error', 'Cannot Submit', 'error')
            })
    }

    handleOpenAddMovie = () => {
        this.setState({
            openAddMovie: true
        })
    }

    handleInputMovieName = (value) => {
        this.setState({
            movie: value
        })
    }

    handleInputMovieGenre = (value) => {
        this.setState({
            genre: value
        })
    }

    handleInputProductionHouse = (value) => {
        this.setState({
            productionHouseId: value
        })
    }

    handleSubmitAddMovie = (event) => {
        event.preventDefault()
        if (!this.state.movie || !this.state.genre || !this.state.productionHouseId) {
            toasting('Cannot Submit', 'All requirement data must filled!', 'warning')
        } else {
            const body = {
                movie: this.state.movie,
                genre: this.state.genre,
                productionHouseId: this.state.productionHouseId
            }
            axios.post(`http://127.0.0.1:3001/movies`, body)
                .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            openAddMovie: false,
                            movie: '',
                            genre: '',
                            productionHouseId: 0,
                        })
                        toasting('Success', 'Add Movie Success')
                        this.getMovieList()
                        this.getProductionHouse()
                    }

                })
                .catch(() => {
                    toasting('Error', 'Cannot Submit', 'error')
                })
        }
    }

    handleDataMovie = (event, data) => {
        event.preventDefault()
        this.setState({
            fillDataMovie: data,
            openEditMovie: true
        })
    }

    handleEditMovieName = (value) => {
        this.setState({
            fillDataMovie: {
                ...this.state.fillDataMovie,
                movie: value
            }
        })
    }

    handleEditMovieGenre = (value) => {
        this.setState({
            fillDataMovie: {
                ...this.state.fillDataMovie,
                genre: value
            }
        })
    }

    handleEditProductionHouseId = (value) => {
        this.setState({
            fillDataMovie: {
                ...this.state.fillDataMovie,
                productionHouseId: value
            }
        })
    }
    handleSubmitEditMovie = (event, id) => {
        event.preventDefault()
        if (!this.state.fillDataMovie.movie || !this.state.fillDataMovie.genre || !this.state.fillDataMovie.productionHouseId) {
            toasting('Cannot Submit', 'All requirement data must filled!', 'warning')
        } else {
            const body = {
                movie: this.state.fillDataMovie.movie,
                genre: this.state.fillDataMovie.genre,
                productionHouseId: this.state.fillDataMovie.productionHouseId
            }
            axios.put(`http://127.0.0.1:3001/movies/${id}`, body)
                .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            openEditMovie: false,
                        })
                        toasting('Success', 'Edit Movie Success')
                        this.getMovieList()
                    }
                })
                .catch(() => {
                    toasting('Error', 'Cannot submit data', 'error')
                })
        }
    }

    handleOpenModalDeleteMovie = (event, data) => {
        event.preventDefault()
        this.setState({
            fillDataMovie: data,
            openDeleteMovie: true
        })
    }

    handleSubmitDeleteMovie = (event, id) => {
        event.preventDefault()
        axios.delete(`http://127.0.0.1:3001/movies/${id}`)
            .then(res => {
                if (res.status === 200) {
                    toasting('Success', 'Delete Movie Success')
                    this.getMovieList()
                    this.setState({
                        openDeleteMovie: false,
                        openEditMovie: false
                    })
                }
            })
            .catch(() => {
                toasting('Error', 'Cannot delete data', 'error')
            })
    }

    render() {
        console.log(this.state.fillDataMovie);

        const options = this.state.dataProductionHouse.map(item => ({
            key: item.id,
            text: item.name,
            value: item.id
        }))
        const {
            openAddProductionHouse,
            openEditProductionHouse,
            openDeleteProductionHouse,
            fillDataProductionHouse,
            openAddMovie,
            openEditMovie,
            openDeleteMovie,
            fillDataMovie
        } = this.state
        return (
            <Grid columns='equal' style={{ margin: 30 }} >
                <div style={{ 'zIndex': 1500, 'position': 'absolute' }}>
                    <SemanticToastContainer position="top-left" />
                </div>
                <div style={{ marginTop: 50 }}>
                    <Header as='h1'>Production House</Header>
                    <Button primary icon labelPosition='left' onClick={() => this.handleOpenModalProductionHouse()}>
                        <Icon name='plus' />
                        Add Production House
                    </Button>
                </div>
                <Grid.Row columns={5}>
                    {this.state.dataProductionHouse.map((item) => {
                        return (
                            <GridColumn>
                                <Card style={{ marginTop: 30 }} raised color='blue'
                                    onClick={(event) => this.handleDataProductionHouse(event, item)} >
                                    <Card.Content style={{ margin: 5 }} textAlign='center' >
                                        <Card.Header>{item.name}</Card.Header>
                                    </Card.Content>
                                </Card>
                            </GridColumn>
                        )
                    })}
                </Grid.Row>
                <AddProductionHouse
                    size={'mini'}
                    open={openAddProductionHouse}
                    closeAddModalProductionHouse={this.closeAddModalProductionHouse}
                    handleAddProductionHouse={this.handleAddProductionHouse}
                    handleSubmitAddProductionHouse={this.handleSubmitAddProductionHouse}
                />
                <EditProductionHouse
                    size={'mini'}
                    open={openEditProductionHouse}
                    closeEditModalProductionHouse={this.closeEditModalProductionHouse}
                    data={fillDataProductionHouse}
                    handleEditProductionHouse={this.handleEditProductionHouse}
                    handleSubmitEditProductionHouse={this.handleSubmitEditProductionHouse}
                    deleteProductionHouse={this.handleOpenModalDeleteProductionHouse}
                />
                <DeleteProductionHouse
                    size={'mini'}
                    open={openDeleteProductionHouse}
                    closeDeleteModalProductionHouse={this.closeDeleteModalProductionHouse}
                    data={fillDataProductionHouse}
                    handleSubmitDeleteProductionHouse={this.handleSubmitDeleteProductionHouse}
                />


                <div style={{ marginBottom: 30, marginTop: 50 }}>
                    <Header as='h1'>Movies List</Header>
                    <Button primary icon labelPosition='left' onClick={() => this.handleOpenAddMovie()}>
                        <Icon name='plus' />
                        Add Movies
                    </Button>
                </div>
                <Grid.Row columns={4}>
                    {this.state.dataMovieList.map((item) => {
                        return (
                            <GridColumn>
                                <Card raised color='red' style={{ marginBottom: 50 }}
                                    onClick={(event) => this.handleDataMovie(event, item)}>
                                    <Card.Content style={{ margin: 5 }} >
                                        <Card.Header>{item.movie}</Card.Header>
                                        <Card.Meta>{item.genre}</Card.Meta>
                                        <Card.Description>{item.name}</Card.Description>
                                    </Card.Content>
                                </Card>
                            </GridColumn>
                        )
                    })}
                </Grid.Row>
                <AddMovieList
                    size={'mini'}
                    open={openAddMovie}
                    close={this.closeAddMovie}
                    selectOptions={options}
                    handleInputMovieName={this.handleInputMovieName}
                    handleInputMovieGenre={this.handleInputMovieGenre}
                    handleInputProductionHouse={this.handleInputProductionHouse}
                    handleSubmitAddMovie={this.handleSubmitAddMovie}
                />
                <EditMovieList
                    size={'tiny'}
                    open={openEditMovie}
                    close={this.closeEditMovie}
                    data={fillDataMovie}
                    selectOptions={options}
                    selected={this.state.fillDataMovie.productionHouseId}
                    deleteMovie={this.handleOpenModalDeleteMovie}
                    handleEditMovieName={this.handleEditMovieName}
                    handleEditMovieGenre={this.handleEditMovieGenre}
                    handleEditProductionHouseId={this.handleEditProductionHouseId}
                    handleSubmitEditMovie={this.handleSubmitEditMovie}
                />
                <DeleteMovileList
                    size={'tiny'}
                    open={openDeleteMovie}
                    close={this.closeDeleteMovie}
                    data={fillDataMovie}
                    handleSubmitDeleteMovie={this.handleSubmitDeleteMovie}
                />
            </Grid>
        )
    }
}

export default withRouter(Home)