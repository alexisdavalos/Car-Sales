const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const featuresReducer = (state = initialState, action) => {
    switch(action.type){
        case 'BUY_FEATURE':
          return {
            ...state,
            additionalPrice: state.additionalPrice + action.payload.price,
            car: {
              ...state.car,
              features: [ ...state.car.features,
                {id: action.payload.id, name: action.payload.name, price: action.payload.price}
              ]
            },//End Car
            additionalFeatures: 
              state.additionalFeatures.filter(feature => {
                if(feature.id !== action.payload.id){
                  return feature
                }else{
                  return null
                };
              }) //End Additional Features
          } 
          case 'REMOVE_FEATURE':
            return{
              ...state,
              additionalPrice: state.additionalPrice - action.payload.price,
              car: {
                ...state.car,
                features: state.car.features.filter(feature => {
                  if(feature.id !== action.payload.id){
                    return feature
                  }else{
                    return null
                  };
                })
              },//End Car
              additionalFeatures: [ ...state.additionalFeatures,
                {id: action.payload.id, name: action.payload.name, price: action.payload.price}
              ]
            }
        default:
            return state;
    }
}
console.log('featuresReducer.js | State:', featuresReducer);