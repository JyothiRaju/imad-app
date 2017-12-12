import React from 'react';
import "./index.css";
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
const style = {
//display: 'autoCentered',
//sizes:10,
float:'left',
position:'151247136450000,606555362345000000000,10000000,1000000000000000000',
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
export default (MyMenu);
