import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Image, Text, View, TextInput } from 'react-native'
import globalStyles from '../styles/styles';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

{/* COMPONENTS */ }
import { MenuComponent, FooterComponent } from '../components';

const HomeScreen = () => {

    const [search, setQuery] = useState('');

    const listOfProducts = ['Próximos a vencer', 'Pensados para vos', 'Comercios'];
    const products = [
        [
            {
                url: 'https://hiperlibertad.vteximg.com.br/arquivos/ids/155869-1000-1000/Gaseosa-Coca-Cola-sin-azucar-500-Cc-COCA-COLA-S-AZ----X500ML-1-3057.jpg?v=637236235046500000',
                title: 'Coca Cola',
                price: '340'
            },
            {
                url: 'https://jumboargentina.vteximg.com.br/arquivos/ids/582120-750-750/Pan-Blanco-Bimbo-550-Gr-1-848509.jpg?v=637231218428570000',
                title: 'Pan Lactal Bimbo',
                price: '230'
            },
            {
                url: 'https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=20&m=173242750&s=612x612&w=0&h=dgXrAP6otDeY5h6fhy-SRmW-2dFOCKx1_hNS1lLWF7Y=',
                title: 'Bananas',
                price: '404'
            },
            {
                url: 'https://cepadevinos.com/wp-content/uploads/2018/06/Santa-Julia-Reserva-Malbec-Cabernet-Franc.jpg',
                title: 'Santa Julia Malbec',
                price: '478'
            },
            {
                url: 'https://www.casa-segal.com/wp-content/uploads/2019/10/chocolate-taza-aguila-semi-amargo-100-gramos-reposteria-mendoza-casa-segal.jpg',
                title: 'Chocolate aguila',
                price: '239'
            },
        ],
        [
            {
                url: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2019/05/galletitas-oreo-venta-ml.jpg',
                title: 'Oreo',
                price: '187'
            },
            {
                url: 'https://hiperlibertad.vteximg.com.br/arquivos/ids/160060-600-600/345303-01.a.jpg?v=637248023600270000',
                title: 'Fideos Matarazzo',
                price: '146'
            },
            {
                url: 'https://elsuperweb.com/wp-content/uploads/2020/07/GARBANZO-768x768.png',
                title: 'GArbanzos en lata',
                price: '86'
            },
            {
                url: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2120128_f.jpg',
                title: 'Pan dulce',
                price: '530'
            },
            {
                url: 'https://http2.mlstatic.com/D_NQ_NP_698348-MLA44886982846_022021-O.jpg',
                title: 'Tofu soyana',
                price: '326'
        }],
        [
            {
                url: 'https://promosdelbanco.com/wp-content/uploads/2017/04/Carrefour-Supermercados.png',
                title: 'Carrefour'
            },
            {
                url: 'https://cdn.theorg.com/ba262ed8-039d-41f9-b7dd-053c75d4d48d_thumb.jpg',
                title: 'Farmacity'
            },
            {
                url: 'https://www.coto.com.ar/images/avatar_coto.png',
                title: 'Coto'
            },
            {
                url: 'https://3.bp.blogspot.com/-5VIGChwPq0I/W3Qs0e8KX7I/AAAAAAAAHCs/Ms18CWXimAkJvEKpPUSfA61rUAF5xQiYwCKgBGAs/s640/DIA%2525.png',
                title: 'Día'
            },
            {
                url: 'https://www.gaf-franquicias.com/images/notas/logos/1606400097_365kioscos_franquicia.jpg',
                title: '365'
        }]
    ];

    const items = [
        { url: "../assets/logo-hamburger.png", title: 'Panificados' },
        { url: "../assets/logo-hamburger.png", title: 'Verduras' },
        { url: "../assets/logo-hamburger.png", title: 'Fruta' },
        { url: "../assets/logo-hamburger.png", title: 'Bebidas' },
        { url: "../assets/logo-hamburger.png", title: 'Alcohol' },
        { url: "../assets/logo-hamburger.png", title: 'Galletas' },
        { url: "../assets/logo-hamburger.png", title: 'Basicos' }
    ];

    return (

        <View
            style={[styles.homeContainer]}
        >

            <StatusBar
                backgroundColor="blue"
                barStyle="dark-content"
            />

            <ScrollView
                style={styles.scrollContainer}
            >

                {/* MENU */}
                <MenuComponent />

                {/* CATEGORIES SCROLL */}
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={styles.categoryScroll}
                    horizontal={true}
                >
                    {

                        items.map(item => {

                            return (

                                <View
                                    style={styles.iconsContainer}
                                >

                                    <Image
                                        style={styles.icons}
                                        source={require('../assets/logo-hamburger.png')} />

                                    <Text style={globalStyles.fontXSmall}>{item.title}</Text>

                                </View>

                            );

                        })

                    }

                </ScrollView>

                <View
                    style={styles.products}
                >

                    {/* SEARCHER */}
                    <View
                        style={[styles.searchContainer, globalStyles.row, globalStyles.alignItemsCenter]}
                    >

                        <View style={styles.inputSearch}>

                            <EvilIcons name="search" style={globalStyles.icons} />

                            <TextInput
                                placeholder="Buscar"
                                value={search}
                                keyboardType="email-address"
                                icon="mail"
                                onChangeText={query => setQuery(query)}
                                style={globalStyles.input}
                            />

                        </View>

                        <View
                            style={styles.filterContainerBox}
                        >

                            <View
                                style={styles.filterContainer}
                            >
                                <AntDesign name="filter" size={24} color="#979797" />
                            </View>

                        </View>

                    </View>

                    {/* ROW PRODUCTS */}
                    {

                        listOfProducts.map((list, index) => {

                            return (

                                <View
                                    style={ styles.productsListContainer }
                                >

                                    <View
                                        style={[styles.listTitle, globalStyles.row, globalStyles.alignItemsCenter, globalStyles.justifyContentBetween]}
                                    >

                                        <Text style={[globalStyles.fontMedium]}>{list}</Text>

                                        <Text style={globalStyles.fontSmall}>Ver todos</Text>

                                    </View>

                                    <ScrollView
                                        showsHorizontalScrollIndicator={false}
                                        style={styles.categoryScroll}
                                        horizontal={true}
                                    >
                                        {

                                            products[index].map((product) => {

                                                return (

                                                    <View
                                                        style={styles.productsContainer}
                                                    >

                                                        <Image
                                                            style={styles.productOfList}
                                                            source={{ uri: product.url }} />

                                                        <Text style={[styles.alignTextStart, globalStyles.fontSmall, globalStyles.fontBold]}>{product.title}</Text>
                                                        { index < 2 ? <Text style={[styles.alignTextStart, styles.secondLabel, globalStyles.fontSmall]}>$ {product.price}</Text> : null
                                                        }

                                                    </View>

                                                );

                                            })

                                        }

                                    </ScrollView>

                                </View>

                            )
                        })

                    }

                </View>

            </ScrollView>

            {/* FOOTER */}
            <FooterComponent />

        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({

    homeContainer: {
        flex: 1,
    },

    products: {
        paddingHorizontal: 10,
        marginBottom: 150
    },

    scrollContainer: {
        paddingTop: 40,
        paddingHorizontal: 10
    },

    iconsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    icons: {
        width: 60,
        height: 60,
        marginBottom: 10
    },

    searchContainer: {
        marginVertical: 40,
        justifyContent: 'space-between'
    },

    inputSearch: {
        width: '83%',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 12,
    },

    filterContainerBox: {
        width: '10%',
        justifyContent: 'flex-end',
        marginRight: 10
    },

    filterContainer: {
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderRadius: 12,
    },

    productsContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: 110,
        marginHorizontal: 10,
        alignItems: 'flex-start'
    },

    productsListContainer: {
        marginBottom: 25
    },

    listTitle: {
        marginBottom: 25
    },

    productOfList: {
        width: 110,
        height: 110,
        marginBottom: 15,
        borderRadius: 20
    },

    secondLabel: {
        marginTop: 10,
    },

})
