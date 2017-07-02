import React from 'react';
import { connect } from 'react-redux';
import { seriesGetData } from '../actions/actions';
import SeriesItem from './SeriesItem';

class SeriesList extends React.Component {    
   constructor() {
	   super();
	   this.state = {
			fillerSlots: parseInt(window.innerWidth / 200)
	   }
    }

   componentDidMount() {
	   window.addEventListener("resize", this.updateDimensions.bind(this));
	   this.updateDimensions.bind(this);
	   this.props.getData('/api.js');
	   //this.props.getData('https://content.viaplay.se/pc-se/serier/samtliga');
   }

   	updateDimensions() {
		var fillerSlotsCount = parseInt(window.innerWidth / 200);
		this.setState({fillerSlots: fillerSlotsCount});
    }
   
   render() {
	   console.log(this.state.fillerSlots);
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the series</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading series</p>;
        }

		var fillers = [];
		for (var i=0; i < this.state.fillerSlots; i++) {
			fillers.push(<SeriesItem key={'filler'+i} />);
		}

        return (
            <div style={styles.listStyle}>
               {this.props.series.map((serie, index) => (
                	<SeriesItem key={index} imgUrl={serie.content.images.landscape.url} seriesTitle={serie.content.series.title} />
                ))}

				{fillers}

            </div>
        );
    }
}

const styles = {
	listStyle: {
		//top: 0,
		//left: 0,
		//right: 0,
		//textAlign: 'center',
		//position: 'relative',

		display: 'inline-flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'

		//display: 'flex',
		//padding: 5,
		//flexWrap: 'wrap',
		//justifyContent: 'flex-start'
	}
};

const mapStateToProps = (state) => {
    return {
        series: state.series,
        hasError: state.seriesHasError,
        isLoading: state.seriesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (url) => dispatch(seriesGetData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesList);