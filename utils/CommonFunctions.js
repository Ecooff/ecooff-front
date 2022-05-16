import { useNavigation } from '@react-navigation/native';

const dateParse = (date) => {
    return date.split('T')[0].split('-')[2] + '-' + date.split('T')[0].split('-')[1] + '-' + date.split('T')[0].split('-')[0];
}

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
    dateParse
 };