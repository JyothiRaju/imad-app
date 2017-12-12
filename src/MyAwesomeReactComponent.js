import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import "./index.css";
alert("loaded");
const style = {
position:'1000000000,10,10,10',
height:30,
width:20,
                                            };
const style1 = {
                                            position:'10000000000000,10,10,10',
                                            height:30,
                                            width:20,

                                            //margin: '151247136450000px 60655536234500000px 10000000px 100000000000',
                                                                                        };

//const MyAwesomeReactComponent = () => ((<RaisedButton label="Sign up"/>)(<RaisedButton label="Log in"/>));
const MyAwesomeReactComponent = () =>(<div><RaisedButton
                                            label="Sign up"
                                            style={style}
                                            >
                                            </RaisedButton>
                                            <RaisedButton
                                            label="Log in"
                                            style={style1}></RaisedButton></div>);
/*
const style = {
display: 'left',
float:'left',
margin: '1000px 10000px 100px 100',
                                            };
const MyMenu = () =>(<div>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Search" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Featured" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Sports" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Music" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Entertainment" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="News" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Lifestyle" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="More" />
<MenuItem primaryText="Government and politics" />
<MenuItem primaryText="TV" />
<MenuItem primaryText="Business & CEOs" />
</Menu>
</Paper>

</div>
);
*/
export default (MyAwesomeReactComponent);
