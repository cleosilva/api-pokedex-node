import LegendaryModel from '../../models/legendary/LegendaryModel';
import { v4 } from 'uuid';

const CreateLegendaryService = {
  createLegendary: (
    name,
    description,
    type,
    healthPoints,
    specialAttack,
    defense,
    attack,
    experience,
    specialDefense
  ) => {
    const newLegendary = new LegendaryModel(
      v4(),
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    );

    return newLegendary;
  }
}

module.exports = CreateLegendaryService;