// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

function whosOnline(friends) {
    // Initialize empty arrays for different statuses
    let online = [];
    let away = [];
    let offline = [];
  
    // Iterate through each friend
    for (const i of friends) {
      if (i.status === 'online' && i.lastActivity <= 10) {
        online.push(i.username); // Add online friends with recent activity to online array
      } else if (i.status === 'online' && i.lastActivity > 10) {
        away.push(i.username); // Add online friends with inactive status to away array
      } else {
        offline.push(i.username); // Add offline friends to offline array
      }
    }
  
    // Initialize an empty result object
    const result = {};
  
    // Check if each category array is non-empty and add it to the result object
    if (online.length > 0) {
      result.online = online;
    }
    if (offline.length > 0) {
      result.offline = offline;
    }
    if (away.length > 0) {
      result.away = away;
    }
  
    // Return the result object
    return result;
  }
  