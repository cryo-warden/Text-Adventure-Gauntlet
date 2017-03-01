export const registerStatusEffects = (worldState) => {
  const getCharacter = worldState.collections.characters.get;

  const system = worldState.statusEffectSystem;

  system.register('prone', {
    onAdded: (characterId, params) => {
      const character = getCharacter(characterId);

      character.stats.resistance -= 2;
      // TODO complete this
    },
    onRemoved: (characterId, params) => {
      const character = getCharacter(characterId);

      character.stats.resistance += 2;
      // TODO complete this
    }
  });
};