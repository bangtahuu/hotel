import React from 'react';
import ReactDOM from 'react-dom';
// import {Card,Button, Form, Row, Col, FormControl, FormCheck} from 'react-bootstrap';
import {Form} from 'semantic-ui-react';
import {Button, Card, Image} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Icon, Label } from 'semantic-ui-react'

const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'Other', value: 'other'},
]

export class ListRoomPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            room: {
                Name: '',
                Company: '',
                Phone: '',
                Product: '',
                Company_Address: '',
                RangeIncome: '',
                isICMCenter: '',
            },
            rooms: [],
        };

        this.getListRoom = this.getListRoom.bind(this);
        this.setListRoom = this.setListRoom.bind(this);
    }


    getListRoom() {
        // fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listoption")
        fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listRooms")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        // rooms: result,
                        rooms: result
                    });

                    console.log(result[0]);

                }, (error) => {
                    this.setState({
                        isLoaded: true,
                    });
                }
            )
    }

    setListRoom() {
        let Name = "1";
        let Phone = "2";
        let Company = "3";
        let Company_Address = "4";
        let isICMCenter = "5";
        let RangeIncome = "6";
        let Product = "7";
        let encoded = "Name=" + Name + "&Phone=" + Phone + "&Company=" + Company + "&Company_Address=" + Company_Address + "&isICMCenter=" + isICMCenter + "&RangeIncome=" + RangeIncome + "&Product=" + Product;

        fetch('https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec', {
            method: 'POST',
            body: encoded,
            // body: JSON.stringify({
            //     title: 'New title added',
            //     body: 'New body added. Hello body.'
            // }),
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            console.log(response.json());
        }).then(json => {
            console.log(json);
            // this.setState({
            //     user:json
            // });
        });
    }

    render() {

        return (
            <div>
                <Form>
                    <Input fluid action='Search' placeholder='Search...' />
                    <br/>
                    <Form.Group widths='equal'>
                        <Form.Select
                            fluid
                            label='RoomID'
                            options={options}
                            placeholder='Gender'
                        />
                        <Form.Select
                            fluid
                            label='Status'
                            options={options}
                            placeholder='Gender'
                        />
                    </Form.Group>

                    {/*<Button*/}
                    {/*    primary*/}
                    {/*    attached='bottom'*/}
                    {/*    onClick={this.getListRoom}>*/}
                    {/*    Search*/}
                    {/*</Button>*/}
                </Form>
                <br/><br/>
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src='/images/hotelico.jpeg'
                            />
                            <Card.Header>Room 101</Card.Header>
                            <Card.Meta>Tang 1</Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui one buttons'>
                                <Button basic color='green'>
                                    CheckIn
                                </Button>

                            </div>
                        </Card.Content>
                    </Card>

                </Card.Group>
            </div>
        );
    }
}
