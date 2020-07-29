import { Collegue } from '../models/Collegue';

export function creerCollegue(): Collegue[] {
  const d1 = new Date('February 4, 2016 10:13:00');
  const d2 = new Date('February 5, 2017 10:13:00');
  const c1 = new Collegue('1', 'nomA', 'prenom1', 'nomA.prenom1@test.com', d1, 'https://fakeimg.pl/500x500/?text=&font=lobster');
  const c2 = new Collegue('2', 'nomB', 'prenom2', 'nomB.prenom2@test.com', d2, 'https://fakeimg.pl/1000x500/?text=Jeannine molleDuBulbe');
  const collegues: Collegue[] = [c1, c2];
  return collegues;
}
