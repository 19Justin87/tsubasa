/* Autogenerated file. Do not edit manually. */

import { defineComponent, Type as RecsType } from "@latticexyz/recs";
import type { World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Card: (() => {
      const name = "Card";
      return defineComponent(
        world,
        {
          token_id: RecsType.NumberArray,
          dribble: RecsType.Number,
          current_dribble: RecsType.Number,
          defense: RecsType.Number,
          current_defense: RecsType.Number,
          cost: RecsType.Number,
          role: RecsType.Number,
          is_captain: RecsType.Boolean,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    Game: (() => {
      const name = "Game";
      return defineComponent(
        world,
        {
          game_id: RecsType.Number,
          player1: RecsType.Number,
          player2: RecsType.Number,
          player1_score: RecsType.Number,
          player2_score: RecsType.Number,
          turn: RecsType.Number,
          outcome: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    Player: (() => {
      const name = "Player";
      return defineComponent(
        world,
        {
          game_id: RecsType.Number,
          player: RecsType.Number,
          goalkeeper_placement: RecsType.Number,
          goalkeeper_id: RecsType.Number,
          defender_placement: RecsType.Number,
          defender_id: RecsType.Number,
          midfielder_placement: RecsType.Number,
          midfielder_id: RecsType.Number,
          attacker_placement: RecsType.Number,
          attacker_id: RecsType.Number,
          remaining_energy: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
  };
}
