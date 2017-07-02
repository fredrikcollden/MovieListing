import React from 'react';
import { connect } from 'react-redux';
import { seriesGetData } from '../actions/actions';
import SeriesItem from './SeriesItem';

class SeriesList extends React.Component {    
	constructor(props) {
	   super(props);
	   this.state = {
			fillerSlots: parseInt(window.innerWidth / this.props.itemSize)
	   }
    }

   componentDidMount() {
	   window.addEventListener("resize", this.updateDimensions.bind(this));
	   this.updateDimensions.bind(this);
	   //this.props.getData('/api.js');
	   this.props.getData('https://content.viaplay.se/pc-se/serier/samtliga');
   }

   	updateDimensions() {
		var fillerSlotsCount = parseInt(window.innerWidth / this.props.itemSize);
		this.setState({fillerSlots: fillerSlotsCount});
    }
   
   render() {
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the series</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading series</p>;
        }

		var fillers = [];
		for (var i=0; i < this.state.fillerSlots; i++) {
			fillers.push(<SeriesItem key={'filler'+i} itemSize= {this.props.itemSize}/>);
		}

        return (
            <div style={styles.listStyle}>
               {this.props.series.map((serie, index) => (
                	<SeriesItem key={index} imgUrl={serie.content.images.landscape.url} seriesTitle={serie.content.series.title} itemSize={this.props.itemSize} />
                ))}

				{fillers}

            </div>
        );
    }
}

const styles = {
	listStyle: {
		display: 'inline-flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginTop: 10,
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