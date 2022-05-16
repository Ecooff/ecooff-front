import { useNavigation } from '@react-navigation/native';

const dateParse = (date) => {
    return date.split('T')[0].split('-')[2] + '-' + date.split('T')[0].split('-')[1] + '-' + date.split('T')[0].split('-')[0];
}

function navigateToPage(page) {
    useNavigation().navigate(page);
};

const navigateBack = () => {
    return useNavigation().goBack;
};

const getTotal = (arr) => {
    const array = [];
    arr.map((e) => array.push(e.price * e.cantidad));
    return array.reduce((a, c) => a + c);
}

const capitalize = (text) => {
    if (typeof text !== 'string') return ''
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

export {
    navigateToPage,
    navigateBack,
    getTotal,
    dateParse,
    capitalize
 };