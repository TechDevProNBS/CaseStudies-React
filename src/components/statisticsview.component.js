import React, { Component } from 'react';
import CountUp from 'react-countup';
import '../../node_modules/react-vis/dist/style.css'
import '../App.css'
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    LineMarkSeries,
    AreaSeries,
    ChartLabel
}
    from 'react-vis';

// let intExt = require('../../InternalExternal');

export default class AreaGraph extends Component {

    constructor(props) {
        super(props)

        this.state = {
            values: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:4500/logincheck`,{
            method: 'GET'})
            .then(response => response.json())
            .then(data => {
                var show = "";
                console.log(data.loggedin);
                if (data.loggedin == "false") {
                    window.location.replace(`/viewprofiles`);
                  }
                this.setState({
                    view: show 
                }, () => { 
                    fetch(`http://localhost:4500/stats`)
                .then(response => response.json())
                .then(data =>
                    this.setState({
                        values: data
                    }, () => console.log(this.state.values[0]))
                );
            });
        });   
    }

    render() {
        // console.log(intExt());
        let internals = []
        let externals = []
        let today = new Date();

        for (let i = 0; i < this.state.values.length; i += 3) {
            internals.push(
                {
                    x: this.state.values[i],
                    y: this.state.values[i + 2]
                }
            )

            externals.push(
                {
                    x: this.state.values[i],
                    y: this.state.values[i + 1]
                }
            )
            console.log(i)
        }

        return (
            <div className="App">
                <XYPlot
                    width={500}
                    height={500}
                    xType="ordinal"

                    stackBy="y"
                    //CHANGE THIS WHEN THERE ARE MORE THAN 50 PEOPLE IN ONE TDP INTAKE
                    yDomain={[
                        0,
                        5
                    ]}
                >
                    <YAxis />
                    <XAxis />
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <ChartLabel
                        text = "Intake"
                        className = "alt-x-label"
                        includeMargin = {false}
                        xPercent = {0.93}
                        yPercent = {1}
                    />

                    <ChartLabel
                        text = "Number of people"
                        className="alt-y-label"
                        includeMargin = {false}
                        xPercent = {0.01}
                        yPercent = {0.1}
                    />

                    <ChartLabel
                        text = "Number of internals and externals for each intake"
                        className = "title"
                        includeMargin = {false}
                        xPercent = {0.267}
                        yPercent = {0.05}
                    />
                    <AreaSeries
                        data={externals}
                        color="rgb(0, 119, 200)"
                        opacity={0.75}
                        style={{}}
                    />
                    <AreaSeries
                        data={internals}
                        color="rgb(0, 119, 200)"
                        opacity={0.5}
                        style={{}}
                    />

                </XYPlot>

                <CountUp
                    start={0}
                    end={30000 + today.getHours()*today.getMinutes()}
                    duration={50}
                    delay={0}
                >
                    {({ countUpRef }) => (
                        <div id="tdp_applicants">
                            <span ref={countUpRef}/>
                            &nbsp; applications to the tdp
                        </div>
                    )}
                </CountUp>

                <CountUp
                    start={0}
                    end = {50}
                    duration = {50}
                    delay = {0}
                >
                     {({ countUpRef }) => (
                        <div id="tdp_cookies">
                            <span ref={countUpRef}/>
                            &nbsp; cookie breaks
                        </div>
                    )}
                </CountUp>

                <CountUp
                    start={0}
                    end = {14}
                    duration = {50}
                    delay = {0}
                >
                     {({ countUpRef }) => (
                        <div id="tdp_glass">
                            <span ref={countUpRef}/>
                            &nbsp; glasses broken
                        </div>
                    )}
                </CountUp>

                
            </div>

        );
    }
}
