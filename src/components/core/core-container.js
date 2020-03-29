import CoreView from './core-view';
import Authorize from '../authorize';
import { withRouter } from 'react-router-dom';

export default withRouter(Authorize(CoreView));