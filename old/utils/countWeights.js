function countWeights({
  starterHydration,
  starterProportion,
  saltProportion,
  targetWeight,
  targetHydration
}) {
  const waterInStarter = starterHydration / (starterHydration + 1);
  const flourInStarter = 1 / (starterHydration + 1);

  const flourProportion = 1 - starterProportion * flourInStarter;
  const waterProportion = targetHydration - starterProportion * waterInStarter;
  const totalPercent = flourProportion + waterProportion + starterProportion + saltProportion;
  
  const res = {
    flour: flourProportion / totalPercent * targetWeight,
    water: waterProportion / totalPercent * targetWeight,
    starter: starterProportion / totalPercent * targetWeight,
    salt: saltProportion / totalPercent * targetWeight
  };
  res['yeast'] = res.flour / 1000 * 11;

  return res;
}

export default countWeights;