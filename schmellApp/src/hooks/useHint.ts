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
    case '2 truths and a lie':
      return hints.TWOTONEL;
    case 'Fu*k/Marry/Kill':
      return hints.FMK;
    case 'Fleip eller fakta':
      return hints.FEF;
    case 'Ikke se på meg':
      return hints.ISPM;
    case 'Klapp for faen':
      return hints.KFF;
    case '5 up':
      return hints.FIVEUP;
    case 'Jæ ska te by`n':
      return hints.JSTB;
    case 'Copycat':
      return hints.CC;
    case 'Mimic Challenge':
      return hints.MC;
    case 'Instant Spoilers':
      return hints.IS;
    default:
      break;
  }
};
