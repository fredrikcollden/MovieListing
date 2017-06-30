import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Main extends React.Component {    
	render() {
		return (
			<div style={styles.main}>
				<div style={styles.header}>
					<Header />
				</div>
				<div style={styles.content}>
					<Content />
				</div>
				<div style={styles.footer}>
					<Footer />
				</div>
			</div>	
    	);
   	}
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
	minHeight: '100vh',
  },
  header: {
	display: 'flex',
    height: 60,
	backgroundColor: '#333333',
	alignItems: 'center',
	padding: '0 20px',
  },
  content: {
	flex: 1,
	padding: '0 20px',
    backgroundColor: '#dddddd',
  },
  footer: {
    height: 50,
	padding: '0 20px',
    backgroundColor: '#333333',
  }
};

export default Main;