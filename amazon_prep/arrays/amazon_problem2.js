function getEarliestFinishTime(comedyReleaseTime=[], comedyDuration=[], dramaReleaseTime=[], dramaDuration=[]){
  //organize data so that we have movieobjects with startTime, duration, and endTime properties
  let comedyMovies = comedyReleaseTime.map((startTime,i)=>{
    return {startTime, duration: comedyDuration[i], endTime: startTime+comedyDuration[i]}
  })
  let dramaMovies = dramaReleaseTime.map((startTime,i)=>{
    return {startTime, duration: dramaDuration[i], endTime: startTime+dramaDuration[i]}
  })
  comedyMovies.sort((movieA, movieB)=>movieA.startTime - movieB.startTime);
  dramaMovies.sort((movieA, movieB)=>movieA.startTime - movieB.startTime);

  let minEnd = Infinity;

  //for each comedyMovie as the first movie
  comedyMovies.forEach(comedyMovie=>{
    //check the endTime
    let {endTime: comedyMovieEndTime} = comedyMovie;
    //for each dramaMovie
    dramaMovies.forEach(dramaMovie=>{
      let {startTime:dramaMovieStartTime, endTime:dramaMovieEndTime} = dramaMovie;
      //check if the startTime can start after endTime of comedyMovie. if so, check endTime of dramaMovie
      if(dramaMovieStartTime >= comedyMovieEndTime){
        //if dramaMovie endtime is less than minEnd, set minEnd to be dramaMovie endtime
        if(dramaMovieEndTime< minEnd){
          minEnd = dramaMovieEndTime;
        }
      }
    })
  })

  dramaMovies.forEach(dramaMovie=>{
    //check the endTime
    let {endTime: dramaMovieEndTime} = dramaMovie;
    //for each dramaMovie
    comedyMovies.forEach(comedyMovie=>{
      let {startTime:comedyMovieStartTime, endTime:comedyMovieEndTime} = comedyMovie;
      //check if the startTime can start after endTime of comedyMovie. if so, check endTime of dramaMovie
      if(comedyMovieStartTime >= dramaMovieEndTime){
        //if dramaMovie endtime is less than minEnd, set minEnd to be dramaMovie endtime
        if(comedyMovieEndTime< minEnd){
          minEnd = comedyMovieEndTime;
        }
      }
    })
  })

  //do same logic but checking from dramaMovies as the first movie
  // console.log(comedyMovies, dramaMovies);
  //sort the data based on the startTime property
  //loop through the two arrays to get the lowest end time
  return minEnd
}



// Example usage:
const comedyReleaseTime = [1, 4];
const comedyDuration = [3, 2];
const dramaReleaseTime = [5, 2];
const dramaDuration = [2, 2];

const result = getEarliestFinishTime(comedyReleaseTime, comedyDuration, dramaReleaseTime, dramaDuration);
console.log(result); // Output: 7