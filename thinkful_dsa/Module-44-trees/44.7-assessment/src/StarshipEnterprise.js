const Queue = require("./Queue");

class StarshipEnterprise {
  constructor(officerId = null, officerName = null, reportTo = null) {
    this.officerId = officerId;
    this.officerName = officerName;
    this.reportTo = reportTo; // the officer that the new officer reports to
    this.leftReport = null;
    this.rightReport = null;
  }

  assignOfficer(officerId, officerName) {
    // your solution here
    if(this.officerId === null){ //this will be first insertion
      this.officerId = officerId;
      this.officerName = officerName;
    }else{
      if(officerId > this.officerId && this.rightReport === null){
        this.rightReport = new StarshipEnterprise(officerId, officerName, this)
      }
      else if(officerId < this.officerId && this.leftReport === null){
        this.leftReport = new StarshipEnterprise(officerId, officerName, this)
      } 
      else if(officerId < this.officerId && this.leftReport !== null){
        this.leftReport.assignOfficer(officerId,officerName);
      }
      else if(officerId > this.officerId && this.rightReport !== null){
        this.rightReport.assignOfficer(officerId,officerName);
      } 
    }
    return this;
  }

  findOfficersWithNoDirectReports(values = []) {
    // your solution here
    if(!this.leftReport && !this.rightReport){
      values.push(this.officerName)
    }
    if(this.leftReport){
      this.leftReport.findOfficersWithNoDirectReports(values)
    }
    if(this.rightReport){
      this.rightReport.findOfficersWithNoDirectReports(values);
    }

    return values;
  }

  listOfficersByExperience(officerNames = []) {
    // your solution here
    if(this.rightReport){
      this.rightReport.listOfficersByExperience(officerNames)
    }
    officerNames.push(this.officerName);
    if(this.leftReport){
      this.leftReport.listOfficersByExperience(officerNames)
    }
    return officerNames;
  }

  listOfficersByRank(tree, rankedOfficers = {}) {
    const queue= new Queue()
    queue.enqueue({node:tree, rank: 1});
    let {node, rank} = queue.dequeue();
    rankedOfficers[rank] = [node.officerName]
    while(node){
      console.log(node.officerId);
      if(node.leftReport) queue.enqueue({node: node.leftReport, rank: rank+1});
      if(node.rightReport) queue.enqueue({node:node.rightReport, rank: rank+1});
      //update node
      const dequeued = queue.dequeue()
      if(!dequeued) break;
      node = dequeued.node;
      rank = dequeued.rank;
      if(rankedOfficers[rank]){
        rankedOfficers[rank].push(node.officerName)
      }else{
        rankedOfficers[rank] = [node.officerName]
      }
    }
    console.log(rankedOfficers)
    return rankedOfficers;
  }
}

module.exports = StarshipEnterprise;
