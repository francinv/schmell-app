import colors from '../constants/colors';

export default (type: string) => {
  switch (type) {
    case 'Pekelek':
      return colors.PL;
    case 'Jeg har aldri':
      return colors.JHA;
    case 'Svar eller drikk':
      return colors.SED;
    case 'Challenge accepted?':
      return colors.CA;
    case 'Guess The Gibberish':
      return colors.GTG;
    case 'Skal vi vedde?':
      return colors.SV;
    case 'Best - Worst - First':
      return colors.BWF;
    case 'Verste forklaringen':
      return colors.VF;
    case 'Tommel opp/ned':
      return colors.TON;
    default:
      break;
  }
};
