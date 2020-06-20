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
  
  return {
    flour: flourProportion / totalPercent * targetWeight,
    water: waterProportion / totalPercent * targetWeight,
    starter: starterProportion / totalPercent * targetWeight,
    salt: saltProportion / totalPercent * targetWeight
  };
}

export default countWeights;