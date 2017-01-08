function bubbleSort(items){
	var length = items.length;		//The size of n
	for(let i=0; i<length; i++){	//First loop, the total number of passes
		var sorted = true;			//Assume the list is sorted
		for(let j=0; j<(length-i); j++){
			// compare the current spot with the next spot
			if(items[j] > items[j+1]){
				sorted= false;
				// swap the numbers
				var temp = items[j]; 	//temp var to stash the variable
				items[j] = items[j+1]	//the left item now is set to the right item
				items[j+1] = temp 
			}
		}
		if(sorted){
			break; // stop the outter because we didnt swap anything on this pass
		}
	}
	console.log(items);
}

bubbleSort([1,9,2,3]);