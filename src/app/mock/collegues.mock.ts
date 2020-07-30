import { Collegue } from '../models/Collegue';

export function creerCollegue(): Collegue[] {
  const d1 = new Date('February 4, 2016 10:13:00');
  const d2 = new Date('February 5, 2017 10:13:00');
  const c1 = new Collegue('1', 'nomA', 'prenom1', 'nomA.prenom1@test.com', d1, '../assets/images/quacken.jpg');
  const c2 = new Collegue('2', 'nomB', 'prenom2', 'nomB.prenom2@test.com', d2, '../assets/images/duck1.jpg');
  const collegues: Collegue[] = [c1, c2];
  return collegues;
}
