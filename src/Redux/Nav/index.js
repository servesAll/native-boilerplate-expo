import { NavigationActions } from 'react-navigation';
import Navigator from '/src/Routes';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export default function reducer(state = initialState, action) {
    const nextState = Navigator.router.getStateForAction(action, state);
    return nextState || state;
}
