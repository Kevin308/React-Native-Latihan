import { DrawerNavigator } from 'react-navigation';
import Employeelist from './Employeelist';
import Employeecreate from './Employeecreate';
import Employeeedit from './Employeeedit';
import Profile from './Profile';

export default DrawerNavigator(
    {
        Employeelist: {
            screen: Employeelist
        },
        AddNewEmployee: {
            screen: Employeecreate
        },
        EditEmployee: {
            screen: Employeeedit
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Employeelist',
        headerMode: 'none'
    }
);