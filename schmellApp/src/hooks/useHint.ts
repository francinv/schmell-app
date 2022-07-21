import hints from '../constants/hints';

export default (type: string) => {
  switch (type) {
    case 'Pekelek':
      return hints.PL;
    case 'Jeg har aldri':
      return hints.JHA;
    case 'Svar eller drikk':
      return hints.SED;
    case 'Challenge accepted?':
      return hints.CA;
    case 'Guess The Gibberish':
      return hints.GTG;
    case 'Skal vi vedde?':
      return hints.SV;
    case 'Best - Worst - First':
      return hints.BWF;
    case 'Verste forklaringen':
      return hints.VF;
    case 'Tommel opp/ned':
      return hints.TON;
    default:
      break;
  }
};
