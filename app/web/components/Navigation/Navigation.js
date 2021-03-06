

import React, {Component} from 'react'
import { Breadcrumb, Grid, Row } from 'react-bootstrap';

import Step from './Step'
import Next from './Next'

export default class Navigation extends Component {
    render() {

        let active = {}
        active[this.props.state]=true

        return <div class='hidden-xs'>
            <Breadcrumb>
                <Grid>
                     <Row className="show-grid">
                        <Step link='/calendar' active={active.calendar} title="Calendar" description="Schedule start time" />
                        <Next />
                        <Step link='/map' active={active.map} title="Map" description="Choose a driver" />
                        <Next />
                        <Step link='/person' active={active.person} title="Person" description="Contact the driver" />
                     </Row>
                </Grid>
            </Breadcrumb>
        </div>
    }
}
