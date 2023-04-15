function twiceAsOld(dadYearsOld, sonYearsOld) {
    // let diff = dadYearsOld - sonYearsOld;
    // let result = diff - sonYearsOld;
    // return result > 0 ? result : -result;

    return Math.abs(dadYearsOld - (2 * sonYearsOld));


  }

  console.log(twiceAsOld(29,0))
  console.log(twiceAsOld(55, 30));