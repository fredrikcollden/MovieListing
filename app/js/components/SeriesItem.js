import React from 'react';

const SeriesItem = ({imgUrl, seriesTitle, itemSize}) => (  
         <div className={'seriesItemWrapper'} style={{'width' : itemSize, margin: 5}}>
			 <img style={styles.itemImage} src={imgUrl} alt={seriesTitle} />
		 </div>
);

const styles = {
	itemImage: {
		width: '100%'
	}
};

export default SeriesItem;