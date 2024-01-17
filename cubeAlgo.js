function findNb(m) {
    let count = 0
    let total = 0
    for(let i = 1; i<=m; i++){
      total+=i**3
      count++
      if(total===m){
        return count
      }else if(total>m){
        return -1
  }
  
    }
}