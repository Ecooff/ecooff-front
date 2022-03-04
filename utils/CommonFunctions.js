import { useNavigation } from '@react-navigation/native';

function navigateToPage(page) {
    console.log(page);
    useNavigation().navigate(page);
};

const navigateBack = () => {
    console.log('2');
    return useNavigation().goBack;
};

const getTotal = (arr) => {
    const array = [];
    arr.map((e) => array.push(e.price * e.cantidad));
    return array.reduce((a, c) => a + c);
}

export {
    navigateToPage,
    navigateBack,
    getTotal,
 };