import React from 'react';

const SeriesItem = ({imgUrl, seriesTitle}) => (  
         <div className={'seriesItemWrapper'} style={styles.seriesItemWrapper}>
			 <img style={styles.itemImage} src={imgUrl} alt={seriesTitle} />
		 </div>
);

const styles = {
	seriesItemWrapper: {
		//display: 'inline-block',
		width: 200,
		margin: 5,
	},
	itemImage: {
		width: '100%',
		//height: 100,
	}
};

export default SeriesItem;