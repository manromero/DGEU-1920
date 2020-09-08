import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Body from '../components/Body';
import { opeLoadData } from '../actions';
import { IInitialState } from '../state';

const mapStateToProps = (state: IInitialState) => ({
  dataLoaded: state.dataLoaded
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      opeLoadData
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Body);