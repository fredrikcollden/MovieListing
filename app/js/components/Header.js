import React from 'react';

const Header = () => (
         <div>
            <img style={styles.logo} src={require('../../static/header-logo-large.png')} />
         </div>
);

const styles = {
	logo: {
		marginLeft: 40,
		height: 30,
	}
};

export default Header;