import { useNavigation } from '@react-navigation/native';

function navigateToPage(page) {
    console.log(page);
    useNavigation().navigate(page);
};

const navigateBack = () => {
    console.log('2');
    return useNavigation().goBack;
};

export {
    navigateToPage,
    navigateBack,
 };