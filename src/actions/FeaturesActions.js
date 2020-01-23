export const buyFeature = item => {
    return { type: 'BUY_FEATURE', payload: item };
};

export const removeFeature = item => {
  return {type: 'REMOVE_FEATURE', payload:item};
}
  