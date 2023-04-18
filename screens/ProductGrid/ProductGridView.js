import {
    View,
    FlatList,
  } from 'react-native';
import { useState } from 'react';
import GridItem from './GridItem';

  function ProductGridView(props) {

    const [products,setProducts]= useState([
        {
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269571-31yo9NB9rDL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=980:*",
            price: 75,
            productName: "Samsung SC 5573",
            specifications: [
                'Dry clean',
                'cyclone',
                'convenience cord storage',
            ],
            reviews: 19,
            stars: 5
        },
        {   productName: "Bissell CleanView Bagless Vacuum",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679513580-aa413b7d-431b-4d25-8cbf-0b938ad624cb.06b8e91d8c7e1c2c714d79fd5681b9a0.jpg?crop=0.668xw:1.00xh;0.255xw,0&resize=980:*",
            price: 85,
            specifications: [
                'Comes with a HEPA filter',
                'Converts from an upright to a stick',
                'Brush roll system minimizes pet hair clogging',
            ],
            reviews: 192,
            stars: 3
        },
        {   productName: "SharkNinja Upright Vacuum",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679513580-aa413b7d-431b-4d25-8cbf-0b938ad624cb.06b8e91d8c7e1c2c714d79fd5681b9a0.jpg?crop=0.668xw:1.00xh;0.255xw,0&resize=980:*",
            price: 185,
            specifications: [
                'Comes with a HEPA filter',
                'Converts from an upright to a stick',
                'Brush roll system minimizes pet hair clogging',
            ],
            reviews: 192,
            stars: 3
        },
        {   productName: "Miele Boost CX1 Parquet",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660564718-screen-shot-2022-08-15-at-7-55-01-am-1660564623.png?crop=0.489xw:1.00xh;0.319xw,0&resize=980:*",
            price: 105,
            specifications: [
                'Automatically adjusts speed and suction according to how much dust it senses',
                'Laser spotter makes it easier to see dust on bare floors',
                'Converts to a handheld vacuum',
            ],
            reviews: 92,
            stars: 2
        },
        {   productName: "Dyson V15 Detect Cordless Vacuum Cleaner",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1628863678-dyson-1628863664.png?crop=0.6666666666666667xw:1xh;center,top&resize=980:*",
            price: 105,
            specifications: [
                'Parquet floor brush specifically designed for hardwood floors',
                'Four suction power settings',
                'Large wheels make it easy to maneuver',
                'it easy to maneuver',
            ],
            reviews: 92,
            stars: 4
        },
        {   productName: "ILIFE EASINE W100 Cordless Wet Dry Vacuum Cleaner",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1672844723-1651587623-31ub-evhngl-sl500-1672844703.jpg?crop=0.913xw:0.913xh;0,0.0868xh&resize=980:*",
            price: 105,
            specifications: [
                'Best pickup of wet, dry and combo messes in our tests',
                'Washable HEPA filter',
                'Very effective self-cleaning function',
            ],
            reviews: 92,
            stars: 4
        },
        {   productName: "LG CordZero Stick Vacuum Cleaner Wet Mop All-in-One Tower",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657217535-31FchacYVL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=980:*",
            price: 105,
            specifications: [
                'Transforms to handheld vacuum, mop and more',
                'Charges in a convenient stand',
                'Easy to use and empty',
            ],
            reviews: 92,
            stars: 4
        },
        {   productName: "Miele Complete C3 Canister Vacuum",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1665167672-31vw1505H1L._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=980:*",
            price: 105,
            specifications: [
                'HEPA filter',
                'Five power settings',
                'Works on all carpet heights and densities',
            ],
            reviews: 92,
            stars: 4
        },
        {   productName: "iRobot Roomba s9+ Robot Vacuum",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654018109-41Jbcwdj4eS._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=980:*",
            price: 95544444,
            specifications: [
                'Best spot cleaning robot in our tests',
                'Automatically empties dirt into its bin',

            ],
            reviews: 92,
            stars: 2
        },
        {   productName: "roborock S7 Robot Vacuum and Mop Cleaner",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1672844946-1646069187-roborock-s7-robot-vacuum-and-mop-1672844931.jpg?crop=1xw:1xh;center,top&resize=980:*",
            price: 650,
            specifications: [
                'Great mapping capabilities',
                'Mopping pads automatically lift when carpet is detected',
            ],
            reviews: 92,
            stars: 4
        },
    ])
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{marginTop: 5}}
          data={products}
          numColumns={2}
          renderItem={({item, index}) => (
            <GridItem item={item} index={index} onPress={()=>{
                let cloneProducts = products.map(product => {
                    if (item.productName === product.productName) {
                      // return {...product,isSaved: true}
                      return {
                        ...product,
                        isSaved:
                          product.isSaved == false || product.isSaved == undefined
                            ? true
                            : false,
                      };
                    }
                    return product;
                  });
                  setProducts(cloneProducts);
            }}/>
          )}
        />
      </View>
    );
  }
  
  export default ProductGridView;