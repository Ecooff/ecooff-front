import { useNavigation } from '@react-navigation/native';

const navigateToPage = () => {
    return useNavigation().navigate('Home');
};

const navigateBack = () => {
    return useNavigation().goBack;
};

export {
    navigateToPage,
    navigateBack,
 };