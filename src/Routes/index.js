import { StackNavigator } from 'react-navigation';

import Home from '../Views/Home';
import Example from '../Views/Example';

export default StackNavigator({
    Home: {
        screen: Home,
    },
    Example: {
        screen: Example,
    }
});
