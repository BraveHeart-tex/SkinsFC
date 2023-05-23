import getHallOfFamers from '../actions/getHallOfFamers';
import HallOfFameClient from './HallOfFameClient';

const HallOfFamePage = async () => {
  const hallOfFamers = await getHallOfFamers();
  return <HallOfFameClient hallOfFamers={hallOfFamers} />;
};

export default HallOfFamePage;
