import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const people = [
    {
        name: "Veronica Mize",
        dob: "11/29/2011"
    }, {
        name: "Cecilia Olsson",
        dob: "09/16/1992"
    }, {
        name: "Peter Parker",
        dob: "01/16/1992"
    }, {
        name: "Jimmy Shergil",
        dob: "12/12/2001"
    }, {
        name: "Alexander Alfred",
        dob: "02/09/1891"
    }, {
        name: "Janice Shroyer",
        dob: "12/01/1982"
    }, {
        name: "Ralph White",
        dob: "11/30/2011"
    }, {
        name: "Deborah T. Decker",
        dob: "10/31/1999"
    }
];

class RecordTable extends Component {

    state = {
        people: [...people]
    };

    componentDidMount() {
        this.sortAscendingName();
    }

    componentDidUpdate(prevProps) {
        if (this.props.sortedItems !== prevProps.sortedItems) {
            if (this.props.sortedItems === "name") {
                this.sortAscendingName();
            } else if (this.props.sortedItems === "age") {
                this.sortDescendingAge();
            }
        }
    }

    sortDescendingAge = () => {
        let sortedPeople = [...this.state.people];
        sortedPeople.sort((a, b) => new Date(b.dob) - new Date(a.dob));
        this.setState({ people: sortedPeople });
    }

    sortAscendingName = () => {
        let sortedPeople = [...this.state.people];
        sortedPeople.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({ people: sortedPeople });
    }

    render() {
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.people.map((userData, index) => (
                            <TableRow key={index}>
                                <TableCell>{userData.name}</TableCell>
                                <TableCell>{userData.dob}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

RecordTable.propTypes = {
    sortedItems: PropTypes.string.isRequired
}

export default RecordTable;
