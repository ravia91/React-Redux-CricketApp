import { getBatsmanRuns, isLegalDelivery } from '../Utility/scoreUpdater'

const initialState = {
  'Team 1': {
    players: {
      'Player1.1': {
        name: 'Player1.1',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.2': {
        name: 'Player1.2',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.3': {
        name: 'Player1.3',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.4': {
        name: 'Player1.4',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.5': {
        name: 'Player1.5',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.6': {
        name: 'Player1.6',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.7': {
        name: 'Player1.7',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.8': {
        name: 'Player1.8',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.9': {
        name: 'Player1.9',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.10': {
        name: 'Player1.10',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player1.11': {
        name: 'Player1.11',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
    },
    score: 0,
    wickets: 0,
    ballsPlayed: 0,
  },
  'Team 2': {
    players: {
      'Player2.1': {
        name: 'Player2.1',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.2': {
        name: 'Player2.2',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.3': {
        name: 'Player2.3',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.4': {
        name: 'Player2.4',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.5': {
        name: 'Player2.5',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.6': {
        name: 'Player2.6',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.7': {
        name: 'Player2.7',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.8': {
        name: 'Player2.8',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.9': {
        name: 'Player2.9',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.10': {
        name: 'Player2.10',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
      'Player2.11': {
        name: 'Player2.11',
        battingStats: {
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          hasPlayed: false,
        },
        bowlingStats: {
          overs: 0,
          maiden: 0,
          runs: 0,
          wickets: 0,
        },
      },
    },
    score: 0,
    wickets: 0,
    ballsPlayed: 0,
  },
  numberOfOvers: 5,
  currentTeam: 'Team 1',
  previousTeam: 'Team 2',
};

export const swapInnings = inningsInformation => ({
  type: 'SWAP_INNINGS',
  previousInnings: inningsInformation,
});

export const updateBatsmanStats = (batsman, currentDelivery) => ({
  type: 'UPDATE_BATSMAN_STATS',
  batsman,
  currentDelivery
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWAP_INNINGS': {
      const finishedTeam = state.currentTeam;
      const newState = Object.assign({}, state);
      newState.currentTeam = state.previousTeam;
      newState.previousTeam = finishedTeam;
      newState[finishedTeam].score = action.previousInnings.totalScore;
      newState[finishedTeam].wickets = action.previousInnings.wickets;
      newState[finishedTeam].ballsPlayed = action.previousInnings.balls;
      return newState;
    }
    case 'UPDATE_BATSMAN_STATS' : {
      const newState = Object.assign({}, state);
      let player = newState[newState.currentTeam].players[action.batsman];
      const batsmanRuns = getBatsmanRuns(action.currentDelivery);
      player.battingStats.runs += batsmanRuns;
      if(batsmanRuns == 4)
        player.battingStats.fours ++;
      else if(batsmanRuns == 6)
        player.battingStats.sixes ++;

      if(isLegalDelivery(action.currentDelivery.extra))
        player.battingStats.balls++;
        
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
