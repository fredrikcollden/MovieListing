import React from 'react';
import { connect } from 'react-redux';
import { seriesGetData } from '../actions/actions';

class SeriesList extends React.Component {    
   constructor() {
	   super();
    }
   
   componentDidMount() {
	   this.props.getData('/api.js');
	   //this.props.getData('https://content.viaplay.se/pc-se/serier/samtliga');
   }
   
   render() {
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the series</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading series</p>;
        }
        return (
            <ul>
               {this.props.series.map((serie, index) => (
                    <li key={index}>
                        {serie.content.series.title}
                    </li>
                ))}
            </ul>
        );
    }
}

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