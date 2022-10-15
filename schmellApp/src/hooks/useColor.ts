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
    case 'Fu*k/Marry/Kill':
      return colors.FMK;
    case '2 truths and a lie':
      return colors.TWOTONEL;
    case 'Fleip eller fakta':
      return colors.FEF;
    case 'Ikke se på meg':
      return colors.ISPM;
    case 'Klapp for faen':
      return colors.KFF;
    case 'Copycat':
      return colors.CC;
    case '5 up':
      return colors.FIVEUP;
    case 'Jæ ska te by`n':
      return colors.JSTB;
    case 'Mimic Challenge':
      return colors.MC;
    case 'Instant Spoilers':
      return colors.IS;
    case 'Emoji Guessing':
      return colors.EG;
    case 'Shots under brikka':
      return colors.SUB;
    case 'Quiz Game':
      return colors.QG;
    case 'Laveste kortet':
      return colors.LK;
    case '7 spillet':
      return colors.SS;
    case 'Roasting':
      return colors.R;
    case 'Name Your Player':
      return colors.NYP;
    case 'Ikke lov å le':
      return colors.ILL;
    case 'Politikk':
      return colors.P;
    case 'Svar ærlig':
      return colors.SÆ;
    default:
      return colors.PL;
  }
};
