import {questionType} from '../typings/questionTypes';

export const getPunishmentText = (question: questionType) => {
  const {punishment, type} = question;
  const sips = parseInt(punishment, 10) > 1 ? 'slurker' : 'slurk';

  switch (type) {
    case 'Pekelek':
      return `Personen med flest pek drikker ${punishment} ${sips}.`;
    case 'Jeg har aldri':
      return `De som har gjort påstander drikker ${punishment} ${sips}.`;
    case 'Svar eller drikk':
      return `Om du ikke svarer, må du drikke ${punishment} ${sips}.`;
    case 'Challenge accepted?':
      return `Om challengen ikke fullføres må dere drikke ${punishment} ${sips}.`;
    case 'Guess The Gibberish':
      return `Om du ikke klarer å gjette må du drikke ${punishment} ${sips}. Hvis ikke, kan du dele ut ${punishment} ${sips}.`;
    case 'Best Worst First':
      return `Om man ikke svarer, må man drikke ${punishment} ${sips}, hvis man tar mot utfordringen får man lov til å dele ut.`;
    default:
      return `Du må drikke ${punishment} ${sips}.`;
  }
};
