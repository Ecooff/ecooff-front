import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import productService from '../../services/ProductService';

{
  /* COMPONENTS */
}
import { MenuComponent, FooterComponent } from '../../components';

const ListScreen = ({ route }) => {
  const [search, setQuery] = useState('');
  const [sorpresas, setSorpresas] = useState([]);
  const [cosmetica, setCosmetica] = useState([]);
  const [mercado, setMercado] = useState([]);
  const [farmacia, setFarmacia] = useState([]);
  const { getBySorpresas, getByCosmetica, getByMercado, getByFarmacia } = productService;

  useEffect(() => {
    getBySorpresas().then((response) => setSorpresas(response.data));
    getByCosmetica().then((response) => setCosmetica(response.data));
    getByMercado().then((response) => setMercado(response.data));
    getByFarmacia().then((response) => setFarmacia(response.data));
  }, []);

  const title = route.params.item;

  const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  };

  const shadowStyleProducts = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  };

  const items = [
    { icon: require('../../assets/icons/bread.png'), title: 'Panaderia' },
    { icon: require('../../assets/icons/infutions.png'), title: 'Infusiones' },
    { icon: require('../../assets/icons/can.png'), title: 'Enlatados' },
    { icon: require('../../assets/icons/snacks.png'), title: 'Snacks' },
    { icon: require('../../assets/icons/flour.png'), title: 'Harinas' },
    { icon: require('../../assets/icons/rice.png'), title: 'Cereales' },
    { icon: require('../../assets/icons/sauces.png'), title: 'Aderezos' },
  ];

  const MERCADO = [
    { title: 'Panaderia' },
    { title: 'Infusiones' },
    { title: 'Enlatados' },
    { title: 'Snacks' },
    { title: 'Harinas' },
    { title: 'Cereales' },
    { title: 'Aderezos' },
  ];

  const COSMETICA = [
    { title: 'Cosmetico 1' },
    { title: 'Cosmetico 2' },
    { title: 'Cosmetico 3' },
    { title: 'Cosmetico 4' },
    { title: 'Cosmetico 5' },
    { title: 'Cosmetico 6' },
    { title: 'Cosmetico 7' },
  ];

  const FARMACIA = [
    { title: 'Dermocosmética' },
    { title: 'Higiene' },
    { title: 'Higiene Personal' },
    { title: 'Higiene de la cabeza' },
    { title: 'Higiene de la piel' },
    { title: 'Higiene de la ropa' },
    { title: 'Higiene de la piel' },
  ];

  const SORPRESAS = [
    { title: 'Sorpresas 1' },
    { title: 'Sorpresas 2' },
    { title: 'Sorpresas 3' },
    { title: 'Sorpresas 4' },
    { title: 'Sorpresas 5' },
    { title: 'Sorpresas 6' },
    { title: 'Sorpresas 7' },
  ];

  const productsList = [
    {
      url: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0de.png',
      title: 'Coca Cola',
      price: '340',
      expirationDate: '7 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://bimbocentroamerica-com-assets.s3.amazonaws.com/s3fs-public/inline-images/1-Pan-Blanco.png?gYmTW593ZNv45iX3zRB7iV9pQ7Njocpj',
      title: 'Pan Lactal Bimbo',
      price: '230',
      expirationDate: '4 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://sicarfarms.com/wp-content/uploads/2021/01/Platano.png',
      title: 'Bananas',
      price: '404',
      expirationDate: '5 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://cepadevinos.com/wp-content/uploads/2018/06/Santa-Julia-Reserva-Malbec-Cabernet-Franc.jpg',
      title: 'Santa Julia Malbec',
      price: '478',
      expirationDate: '1 día',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://www.casa-segal.com/wp-content/uploads/2019/10/chocolate-taza-aguila-semi-amargo-100-gramos-reposteria-mendoza-casa-segal.jpg',
      title: 'Chocolate aguila',
      price: '239',
      expirationDate: '7 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2019/05/galletitas-oreo-venta-ml.jpg',
      title: 'Oreo',
      price: '187',
      expirationDate: '2 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://hiperlibertad.vteximg.com.br/arquivos/ids/160060-600-600/345303-01.a.jpg?v=637248023600270000',
      title: 'Fideos Matarazzo',
      price: '146',
      expirationDate: '5 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://elsuperweb.com/wp-content/uploads/2020/07/GARBANZO-768x768.png',
      title: 'Garbanzos en lata',
      price: '86',
      expirationDate: '4 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2120128_f.jpg',
      title: 'Pan dulce',
      price: '530',
      expirationDate: '4 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
    {
      url: 'https://http2.mlstatic.com/D_NQ_NP_698348-MLA44886982846_022021-O.jpg',
      title: 'Tofu soyana',
      price: '326',
      expirationDate: '7 días',
      seller: {
        url: 'http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png',
        title: 'Carrefour',
      },
    },
  ];

  const navigator = useNavigation();

  return (
    <View style={[styles.homeContainer]}>
      <StatusBar backgroundColor='blue' barStyle='dark-content' />

      <View style={styles.menuContainer}>
        {/* MENU */}
        <MenuComponent />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.products}>
          {/* SEARCHER */}
          <View style={[styles.searchContainer, globalStyles.row, globalStyles.alignItemsCenter, shadowStyle]}>
            <View style={styles.inputSearch}>
              <EvilIcons name='search' style={globalStyles.icons} />

              <TextInput
                placeholder='Buscar'
                value={search}
                keyboardType='email-address'
                icon='mail'
                onChangeText={(query) => setQuery(query)}
                style={globalStyles.input}
              />
            </View>

            <View style={styles.filterContainerBox}>
              <View style={styles.filterContainer}>
                <AntDesign name='filter' size={24} color='#979797' />
              </View>
            </View>
          </View>

          <Text style={[styles.scrollTitle, globalStyles.fontMedium, globalStyles.fontBold]}>{title.title}</Text>

          {/* CATEGORIES SCROLL */}
          <ScrollView showsHorizontalScrollIndicator={false} style={styles.categoryScroll} horizontal={true}>
            {(
              (title.title === 'Mercado' && MERCADO) ||
              (title.title === 'Cosmetica' && COSMETICA) ||
              (title.title === 'Farmacia' && FARMACIA) ||
              (title.title === 'Sorpresas' && SORPRESAS)
            ).map((item, index) => {
              return (
                <View key={index} style={styles.iconsContainer}>
                  <Image style={styles.icons} source={item.icon} />

                  <Text style={globalStyles.fontXSmall}>{item.title}</Text>
                </View>
              );
            })}
          </ScrollView>

          <Text style={[styles.scrollTitle, globalStyles.fontSmall]}>Productos</Text>

          {/* CATEGORIES SCROLL */}
          <ScrollView showsVerticalScrollIndicator={false} style={styles.productScroll}>
            {(
              (title.title === 'Sorpresas' && sorpresas) ||
              (title.title === 'Cosmetica' && cosmetica) ||
              (title.title === 'Mercado' && mercado) ||
              (title.title === 'Farmacia' && farmacia)
            ).map((product, index) => {
              return (
                <View key={index} style={shadowStyleProducts}>
                  <TouchableOpacity
                    onPress={() => navigator.navigate('Product', { product })}
                    style={[styles.productCard, globalStyles.row, shadowStyle, globalStyles.alignItemsCenter]}
                  >
                    <View style={styles.cardImage}>
                      <Image style={styles.product} source={{ uri: product.img }} />
                    </View>

                    <View>
                      <Text
                        style={[{ paddingLeft: 15 }, styles.cardTitles, globalStyles.fontSmall, globalStyles.fontBold]}
                      >
                        {product.title}
                      </Text>

                      <View style={[{ width: '100%' }, globalStyles.row]}>
                        <View style={[styles.cardBody, { width: '50%' }]}>
                          <Text style={[styles.cardTitles, globalStyles.fontSmall]}>$ {product.price}</Text>
                          <Text style={[styles.cardTitles, globalStyles.fontSmall]}>{product.expirationDate}</Text>

                          <View
                            style={[
                              styles.cardTitles,
                              styles.seller,
                              globalStyles.row,
                              globalStyles.alignItemsCenter,
                              globalStyles.fontSmall,
                            ]}
                          >
                            {/* <Image style={styles.productListSeller} source={{ uri: product.seller.url }} /> */}

                            <Text>{product.providerName}</Text>
                          </View>
                        </View>

                        <View style={[styles.bannerLargeMargin, globalStyles.row, globalStyles.alignItemsCenter]}>
                          <Text style={globalStyles.sellIcons}>-</Text>
                          <Text style={{ marginHorizontal: 10 }}>1</Text>
                          <Text style={globalStyles.sellIcons}>+</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <FooterComponent />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },

  products: {
    paddingHorizontal: 10,
    marginBottom: 150,
  },

  menuContainer: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },

  scrollContainer: {
    paddingHorizontal: 10,
  },

  categoryScroll: {
    marginHorizontal: -20,
    paddingLeft: 10,
  },

  scrollTitle: {
    marginTop: 30,
    marginBottom: 30,
  },

  iconsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  icons: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },

  searchContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
  },

  inputSearch: {
    width: '83%',
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    borderRadius: 12,
  },

  filterContainerBox: {
    width: '10%',
    justifyContent: 'flex-end',
    marginRight: 10,
  },

  filterContainer: {
    backgroundColor: '#F9FAFB',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    paddingVertical: 10,
    borderRadius: 12,
  },

  productsListContainer: {
    marginBottom: 25,
  },

  productsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: 110,
    marginHorizontal: 10,
    alignItems: 'flex-start',
  },

  listTitle: {
    marginBottom: 25,
  },

  productOfList: {
    width: 110,
    height: 110,
    marginBottom: 15,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor: '#F4F4F4',
  },

  commerceOfList: {
    width: 110,
    height: 110,
    marginBottom: 15,
    borderRadius: 100,
    backgroundColor: '#F4F4F4',
  },

  secondLabel: {
    marginTop: 10,
  },

  productScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },

  productCard: {
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },

  cardImage: {
    padding: 5,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },

  product: {
    width: 90,
    height: 90,
  },

  cardBody: {
    paddingHorizontal: 15,
  },

  cardTitles: {
    marginBottom: 5,
  },

  bannerLargeMargin: {
    width: '30%',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  productListSeller: {
    width: 30,
    height: 30,
  },
});
