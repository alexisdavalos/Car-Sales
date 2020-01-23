const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: [ { id: 2, name: 'Racing detail package', price: 1500 }]
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const featuresReducer = (state = initialState, action) => {
    console.log('featuresReducer.js | State:', state);
    switch(action.type){
        case 'BUY_FEATURE':
          return {
            ...state,
            car: {
              ...state.car,
              features: [ ...state.car.features,
                {id: action.payload.id, name: action.payload.name, price: action.payload.price}
              ]
            },
            additionalFeatures: 
              state.additionalFeatures.filter(feature => {
                if(feature.id !== action.payload.id){
                  return feature
                }else{
                  return null
                };
              })
          }
        default:
            return state;
    }
}