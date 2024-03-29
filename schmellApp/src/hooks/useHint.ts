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
    case 'Emoji Guessing':
      return hints.EG;
    case 'Shots under brikka':
      return hints.SUB;
    case 'Quiz Game':
      return hints.QG;
    case 'Laveste kortet':
      return hints.LK;
    case '7 spillet':
      return hints.SS;
    case 'Roasting':
      return hints.R;
    case 'Name Your Player':
      return hints.NYP;
    case 'Ikke lov å le':
      return hints.ILL;
    case 'Politikk':
      return hints.P;
    case 'Svar ærlig':
      return hints.SÆ;
    default:
      break;
  }
};
